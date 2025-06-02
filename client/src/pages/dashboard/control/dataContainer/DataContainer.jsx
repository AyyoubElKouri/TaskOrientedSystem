import { getCompletedTasksNumber, getTotalHoursNumber, getTotalTasksNumber, getCompletedHoursNumber } from "./logic";
import { useContext } from "react";
import { TasksContext } from "../../Main";

import { ListChecks, CheckCircle2, Clock4, AlarmClockCheck, } from "lucide-react";
import DataFrame from "./dataFrame/DataFrame";

const DataContainer = () => {

    const {tasks} = useContext(TasksContext);

    const totalTasksNumber = getTotalTasksNumber(tasks);
    const completedTasksNumber = getCompletedTasksNumber(tasks);
    const {hours, minutes} = getTotalHoursNumber(tasks);
    const { hours: Chours, minutes: Cminutes } = getCompletedHoursNumber(tasks);

    return (
        <div className="bg-gray-950/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in transition-all duration-500">
            <DataFrame name="All" value={totalTasksNumber} unite="tasks" Icon={ListChecks} colorClass="text-blue-400" />
            <DataFrame name="Completed" value={completedTasksNumber} unite="tasks" Icon={CheckCircle2} colorClass="text-green-400" />
            <DataFrame name="All" value={hours + "h" + " " + minutes + "min"} unite="" Icon={Clock4} colorClass="text-yellow-400"  />
            <DataFrame name="Completed" value={Chours + "h" + " " + Cminutes + "min"} unite="" Icon={AlarmClockCheck} colorClass="text-purple-400" />
        </div>
    );
};

export default DataContainer;
