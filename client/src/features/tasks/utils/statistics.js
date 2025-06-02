export const getTotalTasksNumber = (tasks) => {
    return tasks.length;
};


export const getCompletedTasksNumber = (tasks) => {
    return tasks.filter(task => task.finished).length;
};


export const getTotalHoursNumber = (tasks) => {
    const totalMinutes = tasks.reduce((sum, task) => {
        return sum + ((task?.hours || 0) * 60 + (task?.minutes || 0));
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
};


export const getCompletedHoursNumber = (tasks) => {
    const totalMinutes = tasks
        .filter(task => task.finished)
        .reduce((sum, task) => {
            return sum + ((task?.hours || 0) * 60 + (task?.minutes || 0));
        }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
};
