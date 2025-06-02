import React from 'react'
import Header from '../../../../components/Header'

const HomeContainer = ({children}) => {
    return (
        <div className='min-h-screen flex flex-col bg-[#F5F7FA] dark:bg-[#0F172A] text-gray-900 dark:text-gray-100 transition-colors duration-300'>
            <Header />
            <div className='flex-grow flex flex-col items-center justify-center py-12 px-6'>
                <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;
