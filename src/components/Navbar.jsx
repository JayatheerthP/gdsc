import React from 'react'
import logo from '../assets/logo-white.png'
const Navbar = () => {
    return (
        <div className="flex p-4 items-center justify-around">
            <div>
                <img src={logo} alt="" className='w-24' />
            </div>
            <div className="flex gap-8">
                <a href="" className='text-lg hover:border-b-2 hover:borber-b-red-500 border-b-orange-700'>FOOD DELIVERY</a>
                <a href="" className='text-lg hover:border-b-2 hover:borber-b-red-500 border-b-orange-700'>HOW IT WORKS</a>
                <a href="" className='text-lg hover:border-b-2 hover:borber-b-red-500 border-b-orange-700'>OUR CITIES </a>
                <a href="" className='text-lg hover:border-b-2 hover:borber-b-red-500 border-b-orange-700'>SIGN UP</a>
            </div>
        </div>
    )
}

export default Navbar