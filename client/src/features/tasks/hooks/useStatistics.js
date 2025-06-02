import { useContext } from "react";
import { TasksContext } from "../pages/Home";
import { getCompletedHoursNumber, getCompletedTasksNumber, getTotalHoursNumber, getTotalTasksNumber } from "../utils/statistics";

const useStatistics = () => {

    const { tasks } = useContext(TasksContext);

    const tasksNumber = getTotalTasksNumber(tasks);
    const completedTasksNumber = getCompletedTasksNumber(tasks);
    const { hours, minutes } = getTotalHoursNumber(tasks);
    const { hours: CompletedHoursNumber, minutes: CompletedMinutesNumber } = getCompletedHoursNumber(tasks);

    return {tasksNumber, completedTasksNumber, hours, minutes, CompletedHoursNumber, CompletedMinutesNumber};
}

export default useStatistics;