const useTask = () => {
    const deleteHandler = async (tasks, id, setTasks) => {

        try {

            // Send request to server to mark task as finished.
            const response = await fetch(`http://localhost:3000/task/delete/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete task with id ${id}`);
            }

            // Update tasks locally (UI state).
            const newTasks = tasks.filter(task => task.id != id);
            setTasks(newTasks);

        } catch (error) {
            console.error('Error in deleting task:', error.message);
        }
    }

    const finishHandler = async (tasks, id, setTasks) => {

        try {

            // Send request to server to mark task as finished.
            const response = await fetch(`http://localhost:3000/task/finish/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to update task with id ${id}`);
            }

            // Update tasks locally (UI state).
            const newTasks = tasks.map(task =>
                task.id === id ? { ...task, finished: !task.finished } : task
            );

            setTasks(newTasks);

        } catch (error) {
            console.error('Error in marking task as finished:', error.message);
        }
    };

    const unfinishHandler = async (tasks, id, setTasks) => {

        try {

            // Send request to server to mark task as unfinished.
            const response = await fetch(`http://localhost:3000/task/unfinish/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to update task with id ${id}`);
            }

            // Update tasks locally (UI state).
            const newTasks = tasks.map(task =>
                task.id === id ? { ...task, finished: !task.finished } : task
            );

            setTasks(newTasks);

        } catch (error) {
            console.error('Error in marking task as unfinished:', error.message);
        }
    }


    const editHandler = (editMode, setEditMode) => {
        setEditMode(!editMode);
    }

    const handleSave = async (tasks, id, data, setTasks, setEditMode) => {

        try {

            const body = {};
            body.name = data.name.trim();
            body.hours = data.time.hours;
            body.minutes = data.time.minutes;

            if(body.name.length === 0) return;

            const response = await fetch(`http://localhost:3000/task/modify/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`Failed to modify task: ${errText}`);
            }

            // update the local UI.
            const updatedTasks = tasks.map(task =>
                task.id === id
                    ? {
                        ...task,
                        ...(body.name !== undefined && { name: body.name }),
                        ...(body.hours !== undefined && { hours: body.hours }),
                        ...(body.minutes !== undefined && { minutes: body.minutes })
                    }
                    : task
            );

            setTasks(updatedTasks);
            setEditMode(false);

        } catch (error) {
            console.error('Error in modifying task:', error.message);
        }
    };

    const handleCancel = (setEditMode) => {
        setEditMode(false);
    };


    return {

        deleteHandler,
        finishHandler,
        unfinishHandler,
        editHandler,
        handleSave,
        handleCancel

    }
}

export default useTask;