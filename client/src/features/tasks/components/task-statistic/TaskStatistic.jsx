import { ListChecks, CheckCircle2, Clock4, AlarmClockCheck } from 'lucide-react';
import DataFrame from './DataFrame';
import useStatistics from '../../hooks/useStatistics';

const TaskStatistic = () => {
    const {
        tasksNumber,
        completedTasksNumber,
        hours,
        minutes,
        CompletedHoursNumber,
        CompletedMinutesNumber
    } = useStatistics();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <DataFrame
                name="All"
                value={tasksNumber}
                unite="tasks"
                Icon={ListChecks}
                colorClass="text-blue-400"
            />
            <DataFrame
                name="Completed"
                value={completedTasksNumber}
                unite="tasks"
                Icon={CheckCircle2}
                colorClass="text-green-400"
            />
            <DataFrame
                name="All"
                value={hours + 'h ' + minutes + 'min'}
                unite=""
                Icon={Clock4}
                colorClass="text-yellow-400"
            />
            <DataFrame
                name="Completed"
                value={CompletedHoursNumber + 'h ' + CompletedMinutesNumber + 'min'}
                unite=""
                Icon={AlarmClockCheck}
                colorClass="text-purple-400"
            />
        </div>
    );
};

export default TaskStatistic;
