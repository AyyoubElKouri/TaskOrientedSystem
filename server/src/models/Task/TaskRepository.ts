import Database from '../../config/database/Database';
import Task from './Task';

class TaskRepository {
    private database: Database;

    public constructor(database: Database) {
        this.database = database;
    }

    public async save(task: Task): Promise<boolean> {
        try {
            await this.database.connect();

            await this.database.executeQuery(
                `
                INSERT INTO tasks (id, name, hours, minutes, finished)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    name = VALUES(name),
                    hours = VALUES(hours),
                    minutes = VALUES(minutes),
                    finished = VALUES(finished)
                `,
                [task.getId(), task.getName(), task.getHours(), task.getMinutes(), task.getFinished()]
            );

            return true;

        } catch (error) {
            console.error('Error saving task:', error);
            return false;
        }
    }

    public async getTask(id: string): Promise<Task | null> {

        try {

            await this.database.connect();

            const task = await this.database.executeQuery(
                'SELECT * FROM tasks WHERE id = ?',
                [id]
            );

            if (task.length === 0) {
                return null;
            }

            const taskData = task[0];
            return new Task(taskData.name, taskData.hours, taskData.minutes, taskData.id);

        } catch (error) {

            console.error('Error retrieving task:', error);
            return null;
        }
    }

    public async remove(id: string): Promise<boolean> {
        try {
            await this.database.connect();

            // Check if the task exists
            const task = await this.database.executeQuery(
                'SELECT * FROM tasks WHERE id = ?',
                [id]
            );
            if (task.length === 0) {
                console.error('Delete task failed: Task not found');
                return false;
            }

            await this.database.executeQuery(
                'DELETE FROM tasks WHERE id = ?',
                [id]
            );

            return true;
        } catch (error) {
            console.error('Error removing task:', error);
            return false;
        }
    }

    public async getAll(): Promise<Task[]> {
        try {
            await this.database.connect();

            const results = await this.database.executeQuery(
                'SELECT id, name, hours, minutes, finished FROM tasks'
            );

            const tasks: Task[] = results.map((row: any) => {
                return new Task(row.name, row.hours, row.minutes, row.id, row.finished);
            });

            return tasks;

        } catch (error) {
            console.error('Error fetching tasks:', error);
            return [];
        }
    }

    public async deleteAll(): Promise<boolean> {

        try {

            await this.database.connect();

            await this.database.executeQuery(
                'DELETE FROM tasks'
            );

            return true;

        } catch (error) {
            console.log("Error, ", error);
            return false;
        }


    }

}

export default TaskRepository;
