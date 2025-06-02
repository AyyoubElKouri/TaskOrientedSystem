import { Trash, Pen, CheckCircle, Circle } from 'lucide-react';
import { deleteHandler, finishHandler, unfinishHandler, editHandler } from './logic';

const DisplayMode = ({id, name, time, done, tasks, setTasks, editMode, setEditMode}) => {
    return (
        <div className="flex items-center justify-between bg-gray-800/50 backdrop-blur-sm text-gray-100 p-6 rounded-xl shadow-md space-x-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-gray-800/70 border border-gray-700/50">
            {/* texts */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
                <p className="text-sm text-gray-400 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {time.hours} hours, {time.minutes} minutes
                </p>
            </div>

            {/* done or not */}
            <p className={`text-sm font-medium px-3 py-1 rounded-full ${
                done ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
            }`}>
                {done ? "Terminé" : "En cours"}
            </p>

            {/* buttons for delete, modify, and make done */}
            <div className='flex space-x-3'>
                {done ? (
                    <CheckCircle 
                        className="text-green-500 w-6 h-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-green-400" 
                        onClick={() => unfinishHandler(tasks, id, setTasks)} 
                    />
                ) : (
                    <Circle 
                        className="text-gray-400 w-6 h-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-yellow-400" 
                        onClick={() => finishHandler(tasks, id, setTasks)} 
                    />
                )}
                <Trash 
                    className="text-red-500 w-6 h-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-red-400" 
                    onClick={() => deleteHandler(tasks, id, setTasks)} 
                />
                <Pen 
                    className="text-blue-500 w-6 h-6 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-blue-400" 
                    onClick={() => editHandler(editMode, setEditMode)} 
                />
            </div>
        </div>
    )
}

export default DisplayMode;