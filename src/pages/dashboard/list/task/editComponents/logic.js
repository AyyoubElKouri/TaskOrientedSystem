export const deleteHandler = (tasks, id, setTasks) => {
    const newTasks = tasks.filter(task => task.id != id);
    setTasks(newTasks);
}

export const doneHandler = (tasks, id, setTasks) => {
    const newTasks = tasks.map(task => (task.id == id) ? {...task, done: !task.done}: task);
    setTasks(newTasks);
}

export const editHandler = (editMode, setEditMode) => {
    setEditMode(!editMode);
}

export const handleSave = (tasks, id, data, setTasks, setEditMode) => {
    const newTasks = tasks.map(task =>
    task.id === id ? { ...task, name: data.name, time: data.time, done: data.done } : task
    );
    setTasks(newTasks);
    setEditMode(false);
};

export const handleCancel = (setEditMode) => {
    setEditMode(false);
};