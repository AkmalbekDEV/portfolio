import React from 'react'
import Akmal from '../assets/akmal.jpg'

const About = () => {
    const desc = "Hello, I am Akmal. I am a Frontend Developer based on React JS programming language. I started learning Frontend programming in 2022 and finished it at the end of 2023. I am currently working as a Frontend Developer at Top Language Center. I have completed 6 projects so far, some of them are: English With Begov, WBS Community, Tenge Market and others. I know how to create websites with the following programming languages: HTML5, CSS3, Tailwind CSS, JavaScript, React JS. I have studied about 50% of React JS frameworks, for example: Chakra UI, React I18 Next, Swiper, Typewriter, GSAP, AOS, Framer Motion, etc. I am currently learning Vue JS programming language, improving my skills and intend to create new programs again!"

    return (
        <section id='about' className='bg-[#170550]'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='grid gap-10 py-10 pb-14'>
                    <div className='grid gap-5'>
                        <h1 className='text-white text-4xl font-medium text-center tracking-wide'>About <span className='text-[#F86F03]'>Me</span></h1>
                        <div className='flex items-center justify-center'>
                            <div className='w-[200px] border-b border-white'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-20 max-sm:gap-10 max-sm:flex-col max-sm:px-10'>
                        <img src={Akmal} alt="" className='w-[35%] rounded-2xl max-sm:w-full' />
                        <div className='grid gap-5 content-start h-[80%] max-sm:text-center'>
                            <h1 className='text-4xl max-sm:text-3xl max-sm:font-bold font-medium tracking-wide text-white'>Frontend Developer</h1>
                            <h1 className='text-lg text-white'>{desc}</h1>
                            <div className='max-sm:flex max-sm:justify-center mt-3'>
                                <a href='#contact' className='px-10 py-2 rounded-full bg-[#F86F03] text-white font-medium w-fit'>Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About