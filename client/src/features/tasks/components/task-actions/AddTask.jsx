import { PlusCircle } from 'lucide-react';
import useAddTask from '../../hooks/useAddTask';

const AddTask = () => {

    const {handleAdd, data, setData } = useAddTask();

    return (
        <div className="flex items-center justify-center bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/40 animate-fade-in-up transition-all duration-500">

            <div className="flex md:flex-row md:items-end gap-70">
                <div className="flex gap-5">

                    <div className="flex items-center gap-3">
                        <label className="block text-sm text-gray-400" htmlFor="task-name">
                            Nom
                        </label>
                        <input
                            id="task-name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            type="text"
                            placeholder="Nom de la tâche..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white placeholder-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 focus:shadow-lg"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="text-sm text-gray-400" htmlFor="hours">
                            Heures
                        </label>
                        <input
                            id="hours"
                            value={data.hours}
                            onChange={(e) => setData({ ...data, hours: e.target.value })}
                            type="number"
                            min="0"
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white
                                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 focus:shadow-lg"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="text-sm text-gray-400" htmlFor="minutes">
                            Minutes
                        </label>
                        <input
                            id="minutes"
                            value={data.minutes}
                            onChange={(e) => setData({ ...data, minutes: e.target.value })}
                            type="number"
                            min="0"
                            max="59"
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/60 border border-gray-600/50 text-white
                                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 focus:shadow-lg"
                        />
                    </div>
                </div>

                <button
                    onClick={handleAdd}
                    className="flex items-center justify-center gap-2 w-full md:w-[180px] px-6 py-2.5 rounded-xl bg-green-700/20 text-green-400 border border-green-500/30
                            hover:bg-green-500 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:ring-offset-2"
                >
                    <PlusCircle className="w-5 h-5" />
                    Ajouter
                </button>
            </div>
        </div>
    );
};

export default AddTask;
