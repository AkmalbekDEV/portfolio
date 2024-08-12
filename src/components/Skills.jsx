import React from 'react'
import mySkills from './MySkills'
import { Progress } from '@chakra-ui/react'

const Skills = () => {
    return (
        <section id='skills' className='bg-[#170550]'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='grid gap-10 py-10 pb-14'>
                    <div className='grid gap-5'>
                        <h1 className='text-white text-4xl font-medium text-center tracking-wide'>My <span className='text-[#F86F03]'>Skills</span></h1>
                        <div className='flex items-center justify-center'>
                            <div className='w-[250px] border-b border-white'></div>
                        </div>
                    </div>
                    <div className='grid gap-5 mt-5'>
                        {mySkills.map((product) => {
                            return (
                                <div key={product.id} className='flex items-center justify-between max-sm:flex-col max-sm:gap-3'>
                                    <h1 className='text-2xl font-medium text-white w-[12%] max-sm:w-full max-sm:text-center'>{product.name}</h1>
                                    <div className='p-1 rounded-full w-[70%] bg-[#ffffff35]'>
                                        <div className={`rounded-full bg-[#F86F03] p-1`} style={{ width: `${product.progress}%` }}></div>
                                    </div>
                                    <h1 className='text-2xl text-white'>{product.progress}%</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills