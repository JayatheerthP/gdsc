import React from 'react'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eigth from '../assets/8.jpg'
const Food = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className='w-[23rem] container'><img src={one} alt="" /></div>
            <div className='w-[23rem] container'><img src={two} alt="" /></div>
            <div className='w-[23rem] container'><img src={three} alt="" /></div>
            <div className='w-[23rem] container'><img src={four} alt="" /></div>
            <div className='w-[23rem] container'><img src={five} alt="" /></div>
            <div className='w-[23rem] container'><img src={six} alt="" /></div>
            <div className='w-[23rem] container'><img src={seven} alt="" /></div>
            <div className='w-[23rem] container'><img src={eigth} alt="" /></div>
        </div>
    )
}

export default Food