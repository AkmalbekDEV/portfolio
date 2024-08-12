import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.svg'

const Hero = () => {
    return (
        <section id='hero' className='bg-[#31065A] max-sm:pb-16'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='flex items-center justify-between gap-10 max-sm:flex-col-reverse'>
                    <div className='grid gap-3 max-sm:gap-5 w-[50%] max-sm:w-full max-sm:px-10 max-sm:text-center' data-aos="fade-up">
                        <h1 className='font-semibold text-3xl text-[#F86F03]'>Hi, It's me</h1>
                        <h1 className='font-bold text-5xl max-sm:text-4xl text-white'>AKMALBEK YUSUFOV</h1>
                        <h1 className='font-semibold text-4xl text-white'>And I'm a <span className='text-[#F86F03]'>Frontend Developer</span></h1>
                        <h1 className='text-xl text-white'>I am a Frontend Developer who can build websites mainly in React JS programming language and other languages as well.</h1>
                        <div className='flex items-center gap-5 mt-3 max-sm:justify-center'>
                            <Link target='_blank' to={"https://github.com/AkmalbekDEV"}>
                                <FaGithub size={35} color='white' />
                            </Link>
                            <Link target='_blank' to={"https://instagram.com/wbs_dev"}>
                                <FaInstagram size={35} color='white' />
                            </Link>
                            <Link target='_blank' to={"https://t.me/yusufov_711"}>
                                <FaTelegram size={35} color='white' />
                            </Link>
                        </div>
                        <div className='max-sm:flex max-sm:justify-center mt-5'><Link className='px-10 py-2 rounded-full bg-[#F86F03] text-white w-fit font-medium'>Download CV</Link></div>
                    </div>
                    <img src={Banner} alt="" data-aos="fade-up" />
                </div>
            </div>
        </section>
    )
}

export default Hero