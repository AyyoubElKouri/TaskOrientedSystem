import { useContext, useState } from 'react';

import { TasksContext } from '../../Main';
import DisplayMode from './editComponents/DispalyMode';
import EditMode from './editComponents/EditMode';

const Task = ({ id , name, time, done }) => {

    const {tasks, setTasks} = useContext(TasksContext);
    const [editMode, setEditMode] = useState(false);

    

    return (
        editMode ?
        <EditMode       id={id}
                        name={name}
                        time={time}
                        done={done}
                        tasks={tasks}
                        setTasks={setTasks}
                        editMode={editMode}
                        setEditMode={setEditMode}
        /> : 
        <DisplayMode    id={id} 
                        name={name}
                        time={time}
                        done={done}
                        tasks={tasks}
                        setTasks={setTasks}
                        editMode={editMode}
                        setEditMode={setEditMode}
        />
    );
};

export default Task;
