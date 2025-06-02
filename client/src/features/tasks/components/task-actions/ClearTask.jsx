import { Trash2, Trash } from 'lucide-react';
import useClearTasks from '../../hooks/useClearTasks';

const ClearTask = () => {

    const { showModal, setShowModal, clearAllTasks, confirmClearAll } = useClearTasks();

    return (
        <>
            <div className="">
            <button
                    onClick={clearAllTasks}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-700/20 text-red-400 border border-red-500/30
                            hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:ring-offset-2"
                >
                    <Trash2 className="w-5 h-5" />
                    Delete all tasks
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
                        <h3 id="modal-title" className="text-white text-xl font-semibold mb-4">
                            Confirmation
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Are you sure you want to delete <strong>all</strong> tasks? This action
                            is irreversible.
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
