import { useState, useEffect } from "react"

const useTaskManager = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/task/get_all')
                const data = await response.json()
                console.log(data);
                setTasks(data)
            } catch (error) {
                console.error('Erreur lors du fetch des tâches:', error)
            }
        }

        fetchTasks()
    }, [])

    return { tasks, setTasks };
}

export default useTaskManager;