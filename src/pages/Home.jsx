import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="flex flex-col gap-4 h-screen HERO text-white">
            <Navbar/>
            <div className="flex flex-col flex-1 h-full justify-start gap-4 px-48 mt-[15rem] font-light">
                <span className='text-5xl'>GOODBYE JUNK FOOD.</span>
                <span className='text-4xl'>HELLO SUPER HEALTHY MEALS.</span>
                <div className="flex gap-6">
                    <button className='rounded-full p-2 bg-orange-500 text-white px-6 text-lg hover:bg-orange-600'>I'm Hungry</button>
                    <button className='rounded-full text-lg duration-200 p-2 px-6 hover:bg-orange-500 hover:text-white bg-transparent border border-orange-500'>Show me more</button>
                </div>
            </div>
        </div>
    )
}

export default Home