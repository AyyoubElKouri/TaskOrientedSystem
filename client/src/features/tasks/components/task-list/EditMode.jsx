import { useState } from 'react';
import useTask from '../../hooks/useTask';

const EditMode = ({ id, name, time, finished, tasks, setTasks, editMode, setEditMode }) => {
    const [data, setData] = useState({ name, time, finished });
    const { handleSave, handleCancel } = useTask();

    return (
        <div className="bg-gray-900/60 backdrop-blur-md text-gray-100 p-6 rounded-2xl shadow-xl border border-gray-700/70 transition-transform duration-300">
            {/* Inputs group */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex flex-col flex-1">
                    <label htmlFor="taskName" className="text-sm text-gray-400 mb-3 font-semibold tracking-wide">
                        Nom
                    </label>
                    <input
                        id="taskName"
                        type="text"
                        className="px-5 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 shadow-sm"
                        placeholder="Nom de la tâche"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-3 font-semibold tracking-wide">Heures</label>
                        <input
                            type="number"
                            min={0}
                            className="w-28 px-5 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 shadow-sm"
                            value={data.time.hours}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    time: { ...data.time, hours: Number(e.target.value) },
                                })
                            }
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-3 font-semibold tracking-wide">Minutes</label>
                        <input
                            type="number"
                            min={0}
                            max={59}
                            className="w-28 px-5 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 shadow-sm"
                            value={data.time.minutes}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    time: { ...data.time, minutes: Number(e.target.value) },
                                })
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-6">
                <button
                    onClick={() => handleCancel(setEditMode)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 px-7 py-3 rounded-xl text-white font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
                >
                    Cancel
                </button>
                <button
                    onClick={() => handleSave(tasks, id, data, setTasks, setEditMode)}
                    className="flex-1 bg-green-600 hover:bg-green-700 px-7 py-3 rounded-xl text-white font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditMode;
