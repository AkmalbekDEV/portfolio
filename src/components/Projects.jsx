import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://9e95e3f0fe4424bc.mokky.dev/projects')
            setData(response.data)
        } catch (error) {
            console.log("There was an error fetching the data", error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section id='projects' className='bg-[#31065A]'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='grid gap-10 py-10 pb-14'>
                    <div className='grid gap-5'>
                        <h1 className='text-white text-4xl font-medium text-center tracking-wide'>Projects</h1>
                        <div className='flex items-center justify-center'>
                            <div className='w-[250px] border-b border-white'></div>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap max-sm:flex-nowrap max-sm:flex-col gap-10 justify-between mt-7'>
                        {data.map((product) => {
                            return (
                                <div key={product.id} className='grid gap-5'>
                                    <img className='w-[350px] h-[200px] rounded-xl' src={product.image} alt="" />
                                    <h1 className='text-center text-xl font-medium text-white'>{product.name}</h1>
                                    <div className='flex items-center justify-evenly'>
                                        <a href={product.demo} className='px-5 py-2 rounded-md bg-[#F86F03] text-white'>Live Demo</a>
                                        <a href={product.github} className='px-5 py-2 rounded-md bg-[#F86F03] text-white'>Github Link</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects