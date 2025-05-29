import React, { useState, createContext } from 'react'

import Header from '../../shared/components/header/Header'
import Control from './control/Control'
import TasksList from './list/TasksList'
import tasksList from '../../data/list'

export const TasksContext = React.createContext();

const Main = () => {

    const [tasks, setTasks] = useState(tasksList)
    

    return (
        <TasksContext.Provider value={{tasks, setTasks}} >
            <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 transition-all duration-500 ease-in-out">
                <Header />
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 animate-fade-in animate-duration-[700ms] animate-fill-forwards">
                    <Control />
                    <TasksList />
                </div>
            </div>
        </TasksContext.Provider>
    )
}

export default Main