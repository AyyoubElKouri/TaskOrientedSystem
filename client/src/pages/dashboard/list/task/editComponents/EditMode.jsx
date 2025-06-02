import { useState } from "react";
import { handleSave, handleCancel } from "./logic";

const EditMode = ({ id, name, time, done, tasks, setTasks, editMode, setEditMode }) => {
    const [data, setData] = useState({ name, time, done });

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm text-gray-100 p-6 rounded-xl shadow-lg transform transition-all duration-300 border border-gray-700/50">
            {/* Inputs group */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-400 mb-2 font-medium" htmlFor="taskName">Nom</label>
                    <input
                        id="taskName"
                        type="text"
                        className="px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2 font-medium">Heures</label>
                        <input
                            type="number"
                            min={0}
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            value={data.time.hours}
                            onChange={(e) =>
                                setData({ ...data, time: { ...data.time, hours: Number(e.target.value) } })
                            }
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-2 font-medium">Minutes</label>
                        <input
                            type="number"
                            min={0}
                            max={59}
                            className="w-24 px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            value={data.time.minutes}
                            onChange={(e) =>
                                setData({ ...data, time: { ...data.time, minutes: Number(e.target.value) } })
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-4">
                <button
                    onClick={() => handleCancel(setEditMode)}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    Cancel
                </button>
                <button
                    onClick={() => handleSave(tasks, id, data, setTasks, setEditMode)}
                    className="flex-1 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditMode;
