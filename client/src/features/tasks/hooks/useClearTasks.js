import { useContext, useState } from "react";
import { TasksContext } from "../pages/Home";

const useClearTasks = () => {

    const { setTasks } = useContext(TasksContext);
    const [showModal, setShowModal] = useState(false);

    const clearAllTasks = () => {
        setShowModal(true);
    };

    const confirmClearAll = async () => {
        try {
            const response = await fetch(`http://localhost:3000/task/delete_all`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Failed to delete all tasks: ${errText}`);
            }

            setTasks([]);
            setShowModal(false);
        } catch (error) {
            console.error('Error while clearing all tasks:', error.message);
        }
    };

    return { showModal, setShowModal, clearAllTasks, confirmClearAll };
}

export default useClearTasks;