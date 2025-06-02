import { useContext } from 'react';
import { TasksContext } from '../../pages/Home';
import Task from './Task';

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl space-y-5 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-700"
    style={{ height: 'calc(100vh - 150px)' }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          time={{ hours: task.hours, minutes: task.minutes }}
          finished={task.finished}
        />
      ))}
    </div>
  );
};

export default TasksList;
