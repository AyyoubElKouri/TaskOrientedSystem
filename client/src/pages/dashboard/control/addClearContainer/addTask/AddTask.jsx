import { useContext, useState } from "react";
import { TasksContext } from "../../../Main";
import { PlusCircle } from "lucide-react";
import { handleAdd } from "./handleAdd";

const AddTask = () => {
    const {tasks, setTasks} = useContext(TasksContext);
    const [data, setData] = useState({name: "", hours: 0, minutes: 0});


    return (
        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/40 animate-fade-in-up transition-all duration-500 max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-white mb-6">Ajouter une nouvelle tâche</h2>

            <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2" htmlFor="task-name">Nom de la tâche</label>
                <input
                    id="task-name"
                    value={data.name}
                    onChange={(e) => setData({...data, name: e.target.value})}
                    type="text"
                    placeholder="Nom de la tâche..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 focus:shadow-lg"
                />
            </div>

            <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2" htmlFor="hours">Heures</label>
                        <input
                            id="hours"
                            value={data.hours}
                            onChange={(e) => setData({...data, hours: e.target.value})}
                            type="number"
                            min="0"
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white
                                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 focus:shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2" htmlFor="minutes">Minutes</label>
                        <input
                            id="minutes"
                            value={data.minutes}
                            onChange={(e) => setData({...data, minutes: e.target.value})}
                            type="number"
                            min="0"
                            max="59"
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white
                                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 focus:shadow-lg"
                        />
                    </div>
                </div>

                <button
                    onClick={() => handleAdd(data, setData, tasks, setTasks)}
                    className="flex items-center justify-center gap-2 w-full md:w-[180px] px-5 py-2 rounded-lg border-2 border-green-500 text-green-500 font-semibold
                               hover:bg-green-500 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                >
                    <PlusCircle className="w-5 h-5" />
                    Ajouter
                </button>
            </div>
        </div>
    )
}

export default AddTask;
