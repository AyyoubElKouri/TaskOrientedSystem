
export const getTotalTasksNumber = (tasks) => {
    return tasks.length;
};


export const getCompletedTasksNumber = (tasks) => {
    return tasks.filter(task => task.done).length;
};



export const getTotalHoursNumber = (tasks) => {
    const totalMinutes = tasks.reduce((sum, task) => {
        return sum + (task.time.hours * 60 + task.time.minutes);
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
};


export const getCompletedHoursNumber = (tasks) => {
    const totalMinutes = tasks
        .filter(task => task.done)
        .reduce((sum, task) => {
            return sum + (task.time.hours * 60 + task.time.minutes);
        }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { hours, minutes };
};
