import AddTask from "./AddTask";
import ClearTask from "./ClearTask";

const TaskActions = () => {
    return (
        <div className="mt-6 flex flex-col mx-auto animate-fade-in-down transition-all duration-500 px-4 sm:px-0">
            <AddTask />
        </div>
    )
}

export default TaskActions;

