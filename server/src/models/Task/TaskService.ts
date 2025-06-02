import { Request, Response } from 'express';
import TaskValidator from './TaskValidator';
import TaskRepository from './TaskRepository';
import Task from './Task';


class TaskService {

    private validator: TaskValidator;
    private repository: TaskRepository;

    public constructor(validator: TaskValidator , repository: TaskRepository) {
        this.validator = validator;
        this.repository = repository;
    }

    public async newTask(request: Request, response: Response): Promise<void> {

        // Check if the data is valid.
        const data = request.body;
        const result = this.validator.newTaskValidate(data);

        if(!result) {
            response.status(400).json({ error: "Invalid data provided" });
            return;
        }

        // save the task to the database.
        const newTask = new Task(result.name, result.hours, result.minutes);
        const save = await this.repository.save(newTask);
        if(!save) {
            response.status(500).json({ error: "Error saving task" });
        } else {
            response.status(200).json({ message: "Task saved successfully", 
                                        id: newTask.getId(),
                                        name: newTask.getName(),
                                        hours: newTask.getHours(),
                                        minutes: newTask.getMinutes()
            });
        }

        return;
    }

    public async modifyTask(request: Request, response: Response): Promise<void> {

        // Check if the data is valid.
        const data = request.body;
        const result = this.validator.modifyTaskValidate(data);

        if(!result) {
            response.status(400).json({ error: "Invalid data provided" });
            return;
        }

        // Get the task from the database.
        const taskId = request.params.id;
        const task = await this.repository.getTask(taskId);

        if(!task) {
            response.status(404).json({ error: "Task not found" });
            return;
        }

        // Modify the task.
        result.name && (task.setName(result.name));
        result.hours && (task.setHours(result.hours));
        result.minutes && (task.setMinutes(result.minutes));

        // Save the task to the database.
        const save = await this.repository.save(task);

        if(!save) {
            response.status(500).json({ error: "Error saving task" });
        } else {
            response.status(200).json({ message: "Task modified successfully" });
        }

        return;
    }

    public async deleteTask(request: Request, response: Response): Promise<void> {

        // Delete the task from the database.
        const taskId = request.params.id;
        const deleteTask = await this.repository.remove(taskId);

        if(!deleteTask) {
            response.status(500).json({ error: "Error deleting task" });
        } else {
            response.status(200).json({ message: "Task deleted successfully" });
        }

        return;
    }

    public async getAllTasks(request: Request, response: Response): Promise<void> {

        // Get all tasks from the database.
        const tasks: Task[] = await this.repository.getAll();

        let tasksArray: {id: string, name: string, hours: number, minutes: number, finished: boolean}[] = [];
        for(let task of tasks) {
            tasksArray.push({id: task.getId(), name: task.getName(), hours: task.getHours(), minutes: task.getMinutes(), finished: task.getFinished()});
        }

        response.status(200).json(tasksArray);
        return;

    }

    public async makeTaskFinished(request: Request, response: Response): Promise<void> {

        // Check if the task exist in the database.
        const taskId = request.params.id;
        const task = await this.repository.getTask(taskId);

        if(!task) {
            response.status(404).json({ error: "Task not found" });
            return;
        }

        task.makeFinished();

        // Save the object to the database.
        const save = await this.repository.save(task);

        if(!save) {
            response.status(500).json({ error: "Error saving task" });
        } else {
            response.status(200).json({ message: "Task maked finished successfully" });
        }

        return;
    }

    public async makeTaskUnfinished(request: Request, response: Response): Promise<void> {

        // Check if the task exist in the database.
        const taskId = request.params.id;
        const task = await this.repository.getTask(taskId);

        if(!task) {
            response.status(404).json({ error: "Task not found" });
            return;
        }

        task.makeUnFinished();

        // Save the object to the database.
        const save = await this.repository.save(task);

        if(!save) {
            response.status(500).json({ error: "Error saving task" });
        } else {
            response.status(200).json({ message: "Task maked finished successfully" });
        }

        return;
    }

    public async deleteAllTasks(request: Request, response: Response): Promise<void> {

        const deletee = await this.repository.deleteAll();

        if(!deletee) {
            response.status(500).json({ error: "Error deleting all tasks" });
        } else {
            response.status(200).json({ message: "All tasks are deleted successfully" });
        }

        return;
    }
}

export default TaskService;
