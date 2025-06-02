import { useContext, useState } from 'react';

import { TasksContext } from '../../pages/Home';
import DisplayMode from './DispalyMode';
import EditMode from './EditMode';

const Task = ({ id, name, time, finished }) => {
    const { tasks, setTasks } = useContext(TasksContext);
    const [editMode, setEditMode] = useState(false);

    return editMode ? (
        <EditMode
            id={id}
            name={name}
            time={time}
            finished={finished}
            tasks={tasks}
            setTasks={setTasks}
            editMode={editMode}
            setEditMode={setEditMode}
        />
    ) : (
        <DisplayMode
            id={id}
            name={name}
            time={time}
            finished={finished}
            tasks={tasks}
            setTasks={setTasks}
            editMode={editMode}
            setEditMode={setEditMode}
            className="bg-gray-800 rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
        />
    );
};

export default Task;
