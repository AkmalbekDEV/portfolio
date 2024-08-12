import React from 'react'
import { BiMobile, BiPhone, BiStats } from 'react-icons/bi'
import { BsUiChecks } from 'react-icons/bs'
import { FaLaptopCode, FaPhone } from 'react-icons/fa'
import { FcStatistics } from 'react-icons/fc'
import { GrStatusCriticalSmall } from 'react-icons/gr'
import { IoCodeWorking } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'

const Services = () => {
    const desc1 = "My main service is Web Development, as I am a Frontend developer creating websites based on React JS. But I'm not just a frontend developer, I have other services too, you can check them out!"
    const desc2 = "My second service is UI | UX Design. I can easily integrate designs and animations from Figma, Adobe XD, and other programs into Frontend programming code and create websites with it."
    const desc3 = "I also know how to work with digital marketing, advertising and posters, various banners. This is also a very good idea for business development. That's why I chose these 3 services and work on them!"

    return (
        <section id='services' className='bg-[#31065A]'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='grid gap-10 py-10 pb-14'>
                    <div className='grid gap-5'>
                        <h1 className='text-white text-4xl font-medium text-center tracking-wide'>My <span className='text-[#F86F03]'>Services</span></h1>
                        <div className='flex items-center justify-center'>
                            <div className='w-[250px] border-b border-white'></div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-5 max-sm:flex-col max-sm:gap-5'>
                        <div className='grid py-10 gap-5 px-10 bg-white content-between rounded-2xl w-[380px]'>
                            <div className='flex items-center justify-center'>
                                <FaLaptopCode size={60} color='#F86F03' />
                            </div>
                            <h1 className='text-center text-3xl font-medium text-[#170550]'>Web Development</h1>
                            <h1 className='text-center text-lg text-[#170550]'>{desc1}</h1>
                        </div>
                        <div className='grid py-10 gap-5 px-10 bg-white content-between rounded-2xl w-[380px]'>
                            <div className='flex items-center justify-center'>
                                <MdDesignServices size={60} color='#F86F03' />
                            </div>
                            <h1 className='text-center text-3xl font-medium text-[#170550]'>UI | UX Design</h1>
                            <h1 className='text-center text-lg text-[#170550]'>{desc2}</h1>
                        </div>
                        <div className='grid py-10 gap-5 px-10 bg-white content-between rounded-2xl w-[380px]'>
                            <div className='flex items-center justify-center'>
                                <BiStats size={60} color='#F86F03' />
                            </div>
                            <h1 className='text-center text-3xl font-medium text-[#170550]'>Digital Marketing</h1>
                            <h1 className='text-center text-lg text-[#170550]'>{desc3}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services