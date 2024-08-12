import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { BiLocationPlus, BiPhone } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === "" || number === "" || email === "" || desc === "") {
            toast({
                title: 'Error!',
                description: "Please fill the all inputs and try again!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            return;
        } else {
            toast({
                title: 'Submit!',
                description: "Your informations are successfully submitted!",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        }

        const token = '6468082632:AAHjNdMTUZX1n6CF6n1D-UShBWi2Msbmc0Y';
        const chat_id = '-4228537280';
        const my_text = `
            New Client ‼️
            💳 Name: ${name}
            ✉️ Email: ${email}
            📲 Number: ${number}
            🎛 Description: ${desc}
        `;

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

        axios.get(url)
            .then((response) => {
                console.log('Message sent', response.data);
            })
            .catch((error) => {
                console.error('Error sending message', error);
            });

        setName("");
        setNumber("");
        setEmail("");
        setDesc("");
    }

    return (
        <section id='contact' className='bg-[#170550]'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='grid gap-10 py-10 pb-14'>
                    <div className='grid gap-5'>
                        <h1 className='text-white text-4xl font-medium text-center tracking-wide'>Contact</h1>
                        <div className='flex items-center justify-center'>
                            <div className='w-[250px] border-b border-white'></div>
                        </div>
                    </div>
                    <div className='flex mt-10 justify-evenly max-sm:flex-col-reverse max-sm:px-10 max-sm:gap-12'>
                        <div className='grid gap-10 max-sm:gap-5 w-[35%] h-[90%] max-sm:w-full content-center'>
                            <div className='flex items-center max-sm:justify-center gap-5'>
                                <BiPhone size={35} color='white' />
                                <a href='tel:+998937572022' className='font-medium text-2xl max-sm:text-xl text-white'>+998 93 757 20 22</a>
                            </div>
                            <div className='flex items-center max-sm:justify-center gap-5'>
                                <MdEmail size={35} color='white' />
                                <a href='mailto:akmaldevuzb@gmail.com' className='font-medium text-2xl max-sm:text-xl text-white'>akmaldevuzb@gmail.com</a>
                            </div>
                            <div className='flex items-center max-sm:justify-center gap-5'>
                                <GrLocation size={35} color='white' />
                                <a target='_blank' href='https://www.google.com/maps/@41.5841649,60.6083536,19.25z?entry=ttu' className='font-medium text-2xl max-sm:text-xl text-white'>Urgench, Uzbekistan</a>
                            </div>
                        </div>
                        <div className='w-[50%] h-[100%] grid content-center max-sm:w-full'>
                            <form onSubmit={handleSubmit} className='grid gap-4'>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='text-white pl-7 py-3 rounded-full outline-none bg-[#ffffff30] w-full' placeholder='Full Name' />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='text-white pl-7 py-3 rounded-full outline-none bg-[#ffffff30] w-full' placeholder='Email Address' />
                                <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} className='text-white pl-7 py-3 rounded-full outline-none bg-[#ffffff30] w-full' placeholder='Phone Number' />
                                <textarea type='text' value={desc} onChange={(e) => setDesc(e.target.value)} className='text-white pl-7 py-3 rounded-3xl outline-none bg-[#ffffff30] w-full pb-16 resize-none' placeholder='Your Message' />
                                <div className='flex justify-center'>
                                    <button className='px-20 py-2 rounded-full bg-[#ffffff30] text-white'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact