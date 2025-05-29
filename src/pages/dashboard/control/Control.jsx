import AddClearContainer from "./addClearContainer/AddClearContainer";
import DataContainer from "./dataContainer/DataContainer";

const Control = () => {
    return (
        <div className="h-full w-full md:w-[50%] bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6 animate-fade-in-up transition-all duration-500">
            <DataContainer />
            <AddClearContainer />
        </div>
    )
}

export default Control;