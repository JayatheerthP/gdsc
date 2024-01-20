import React from 'react'

const Info = () => {
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className="flex flex-col items-center gap-8 font-thin">
                <span className='text-4xl'>GET FOOD FAST — NOT FAST FOOD</span>
                <div className=' h-[2px] bg-orange-500 w-28' />
                <span className='text-xl'>
                    Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy.
                    <br />
                    No time for cooking. So let us take care of that, we’re really good at it, we promise!
                </span>
                <div className="flex gap-10 flex-wrap font-extralight mt-[3rem]">
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <i className="text-5xl text-orange-400 fa-solid fa-infinity"></i>
                        <span className='text-2xl'>UP TO 365 DAYS/YEAR</span>
                        <span className='text-lg'>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</span>
                    </div>
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <i className="text-5xl text-orange-400 fa fa-stopwatch"></i>
                        <span className='text-2xl'>READY IN 20 MINUTES</span>
                        <span className='text-lg'>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</span>
                    </div>
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <i className="text-5xl text-orange-400 fa fa-carrot"></i>
                        <span className='text-2xl'>100% ORGANIC</span>
                        <span className='text-lg'>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</span>
                    </div>
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <i className="text-5xl text-orange-400 fa-solid fa-cart-shopping"></i>
                        <span className='text-2xl'>ORDER ANYTHING</span>
                        <span className='text-lg'>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info