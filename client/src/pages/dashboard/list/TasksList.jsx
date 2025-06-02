import { useContext } from "react";
import { TasksContext } from "../Main";
import Task from "./task/Task";

const TasksList = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <div
            className="h-[659px] bg-gray-900 w-[70%] p-6 rounded-lg shadow-lg mx-auto space-y-4 overflow-y-auto"
        >
            {tasks.map(task => (
                <Task key={task.id} id={task.id} name={task.name} time={{hours: task.hours, minutes: task.minutes }} done={task.finished} />
            ))}
        </div>
    );
}

export default TasksList;
