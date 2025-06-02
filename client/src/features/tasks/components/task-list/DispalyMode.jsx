import { Trash, Pen, CheckCircle, Circle } from 'lucide-react';
import useTask from '../../hooks/useTask';

const DisplayMode = ({ id, name, time, finished, tasks, setTasks, editMode, setEditMode }) => {
    const { deleteHandler, finishHandler, unfinishHandler, editHandler } = useTask();

    return (
        <div className="flex items-center justify-between bg-gray-900/60 backdrop-blur-md text-gray-100 p-6 rounded-2xl shadow-lg space-x-6 transition-colors duration-300 hover:shadow-2xl hover:bg-gray-800/80 border border-gray-700/70">
            {/* Texts */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1 truncate">{name}</h3>
                <p className="text-sm text-gray-400 flex items-center select-none">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    {time.hours} hours, {time.minutes} minutes
                </p>
            </div>

            {/* Status */}
            <p
                className={`text-sm font-semibold px-4 py-1 rounded-full select-none ${
                    finished ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/30 text-yellow-400'
                }`}
            >
                {finished ? 'Terminé' : 'En cours'}
            </p>

            {/* Action buttons */}
            <div className="flex space-x-5">
                {finished ? (
                    <CheckCircle
                        className="text-green-500 w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-green-400"
                        onClick={() => unfinishHandler(tasks, id, setTasks)}
                        aria-label="Mark as unfinished"
                    />
                ) : (
                    <Circle
                        className="text-yellow-400 w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-yellow-300"
                        onClick={() => finishHandler(tasks, id, setTasks)}
                        aria-label="Mark as finished"
                    />
                )}
                <Trash
                    className="text-red-600 w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-red-500"
                    onClick={() => deleteHandler(tasks, id, setTasks)}
                    aria-label="Delete task"
                />
                <Pen
                    className="text-blue-500 w-7 h-7 cursor-pointer transition-colors duration-300 hover:text-blue-400"
                    onClick={() => editHandler(editMode, setEditMode)}
                    aria-label="Edit task"
                />
            </div>
        </div>
    );
};

export default DisplayMode;
