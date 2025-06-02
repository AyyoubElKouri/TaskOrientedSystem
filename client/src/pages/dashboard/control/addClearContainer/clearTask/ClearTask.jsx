import { useContext, useState } from "react";
import { Trash2, Trash } from "lucide-react";
import { TasksContext } from "../../../Main";

const ClearTask = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const [showModal, setShowModal] = useState(false);

    const clearAllTasks = () => {
        setShowModal(true);
    };

    const confirmClearAll = async () => {
        try {
            const response = await fetch(`http://localhost:3000/task/delete_all`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Failed to delete all tasks: ${errText}`);
            }

            // مسح الواجهة من المهام
            setTasks([]);
            setShowModal(false);

        } catch (error) {
            console.error('Error while clearing all tasks:', error.message);
        }
    };


    return (
        <>
            <div className="flex flex-col sm:flex-row gap-5 mt-6 max-w-md mx-auto">
                {/* Bouton Supprimer toutes les tâches */}
                <button
                    onClick={clearAllTasks}
                    className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold transition duration-300
                               hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 w-full sm:w-auto"
                >
                    <Trash2 className="w-5 h-5" />
                    <span>Delete all tasks</span>
                </button>
            </div>

            {/* Modal de confirmation */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="bg-gray-800 rounded-xl p-6 max-w-md w-[90%] shadow-2xl border border-gray-700
                                   animate-fade-in-up"
                    >
                        <h3
                            id="modal-title"
                            className="text-white text-xl font-semibold mb-4"
                        >
                            Confirmation
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Are you sure you want to delete <strong>all</strong> tasks? This
                            action is irreversible.
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmClearAll}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ClearTask;
