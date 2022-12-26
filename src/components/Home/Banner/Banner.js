import React from 'react'
import {Link} from 'react-router-dom'
import img from '../../images/staffappbg.jpg'

function Banner() {
    return (
        <div className="bg-white dark:bg-gray-800 lg:flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16 ">
                <div className="sm:w-3/3 lg:w-5/5 w-full flex flex-col relative z-20 ">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="uppercase text-4xl sm:text-5xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Connect With 
                        <span className="text-4xl sm:text-5xl">
                            Your Colleagues.
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <Link to="/" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Get started
                        </Link>
                        <Link to="/" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                            Read more
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="container lg:block lg:w-3/5 relative mt-16">
                <img src={img} className="max-w-xl md:max-w-xl m-auto" alt='the banner'/>
            </div>
        </div>
    )
}

export default Banner