import { useContext, useState } from "react";
import { TasksContext } from "../pages/Home";

const useAddTask = () => {

    const { tasks, setTasks } = useContext(TasksContext);
    const [data, setData] = useState({ name: '', hours: 0, minutes: 0 });

    const handleAdd = async () => {
        if (!data.name.trim()) return;

        try {
            // Send request to server to add new task
            const response = await fetch(`http://localhost:3000/task/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    hours: data.hours,
                    minutes: data.minutes
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Failed to add new task: ${errText}`);
            }

            // Get the new task from the server response
            const result = await response.json();

            // Update UI locally without refreshing the page
            const newTask = {
                id: result.id,
                name: result.name,
                hours: result.hours,
                minutes: result.minutes,
                done: false // par défaut
            };

            setTasks([...tasks, newTask]);

            // Reset form inputs
            setData({ name: "", hours: 0, minutes: 0 });

        } catch (error) {
            console.error('Error in adding new task:', error.message);
        }
    }

    return { handleAdd, data, setData };

}

export default useAddTask;