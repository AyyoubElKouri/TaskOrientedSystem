import AddTask from "./addTask/AddTask";
import ClearTask from "./clearTask/ClearTask";

const AddClearContainer = () => {
    return (
        <div className="mt-6 flex flex-col  max-w-lg mx-auto animate-fade-in-down transition-all duration-500 px-4 sm:px-0">
            <AddTask />
            <ClearTask />
        </div>
    )
}

export default AddClearContainer;

