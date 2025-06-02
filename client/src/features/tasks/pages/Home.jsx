import React from 'react';
import useTaskManager from '../hooks/useTaskManager';
import HomeContainer from '../components/home/HomeContainer';
import TasksList from '../components/task-list/TasksList';
import TaskStatistic from '../components/task-statistic/TaskStatistic';
import TaskActions from '../components/task-actions/TaskActions';
import ClearTask from '../components/task-actions/ClearTask';

export const TasksContext = React.createContext();

const Home = () => {
    const { tasks, setTasks } = useTaskManager();

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <HomeContainer>
                <TaskStatistic />
                <TaskActions />
                <TasksList />
                <ClearTask/>
            </HomeContainer>
        </TasksContext.Provider>
    );
};

export default Home;
