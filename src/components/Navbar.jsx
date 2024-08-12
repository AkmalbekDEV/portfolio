import React from 'react'
import Logo from '../assets/logo.png'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='py-3 bg-[#170550] fixed w-full top-0 left-0 shadow-md'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='flex items-center justify-between max-sm:px-5'>
                    <div className='flex items-center gap-1'>
                        <img src={Logo} alt="" className='w-20' />
                        <div className='grid'>
                            <h1 className='font-semibold tracking-wider text-2xl text-white'>AKMAL</h1>
                            <h1 className='font-thin text-[11px] tracking-widest text-white'>FRONTEND DEV</h1>
                        </div>
                    </div>
                    <nav className='flex items-center gap-7 max-sm:hidden'>
                        <a href="#hero" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>Home</a>
                        <a href="#about" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>About Me</a>
                        <a href="#services" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>Services</a>
                        <a href="#skills" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>Skills</a>
                        <a href="#projects" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>Projects</a>
                        <a href="#contact" className='transition font-medium text-xl text-white hover:text-[#F86F03]'>Contact</a>
                    </nav>
                    <a href='#contact' className='cursor-pointer max-sm:hidden px-10 py-2 rounded-full bg-white text-[#170550] font-medium hover:shadow-md hover:shadow-white active:bg-gray-200 transition-all'>Hire me</a>
                    <div className='hidden max-sm:block'>
                        <BiMenu size={40} color='white' onClick={onOpen} className='cursor-pointer' />
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent bgColor={'#31065A'}>
                                <DrawerCloseButton color='white' />
                                <DrawerHeader textColor={'white'}>Menu</DrawerHeader>
                                <DrawerBody>
                                    <div className='grid'>
                                        <a href="#hero" className='w-full text-center border-b py-5 hover:rounded-xl transition font-medium text-xl text-white hover:bg-[#ffffff30]'>Home</a>
                                        <a href="#about" className='w-full text-center border-b py-5 hover:rounded-xl transition font-medium text-xl text-white hover:bg-[#ffffff30]'>About Me</a>
                                        <a href="#services" className='w-full text-center border-b py-5 hover:rounded-xl transition font-medium text-xl text-white hover:bg-[#ffffff30]'>Services</a>
                                        <a href="#skills" className='w-full text-center border-b py-5 hover:rounded-xl transition font-medium text-xl text-white hover:bg-[#ffffff30]'>Skills</a>
                                        <a href="#projects" className='w-full text-center border-b py-5 hover:rounded-xl transition font-medium text-xl text-white hover:bg-[#ffffff30]'>Projects</a>
                                        <a href="#contact" className='w-full text-center transition py-5 hover:rounded-xl font-medium text-xl text-white hover:bg-[#ffffff30]'>Contact</a>
                                        <div className='flex justify-center mt-5'>
                                            <a href='#contact' className='cursor-pointer px-20 py-3 rounded-full bg-white text-[#170550] font-medium hover:shadow-md hover:shadow-white active:bg-gray-200 transition-all'>Hire me</a>
                                        </div>
                                    </div>
                                </DrawerBody>
                                <DrawerFooter>
                                    <div className='flex justify-center'>
                                        <h1 className='font-medium text-center text-white text-base'>Copywrite & Copy : 2024 | All Right Reserved by AKMAL</h1>
                                    </div>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar