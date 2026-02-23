import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {

    const Year = new Date();
    const getYear = Year.getFullYear();

    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio rerum alias! Inventore quibusdam ducimus facere incidunt, unde cupiditate dolores minima totam odit enim! Reprehenderit unde facere ratione! Tempore, facilis!</p>
                </div>
                <div>
                    <p className='font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About us</li></Link>
                        <Link to="/contact"><li>Contact us</li></Link>
                        <Link to="/privacy"><li>Privacy Policy</li></Link>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+923001081100</li>
                        <li>zaviyarbutt55@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright @ {getYear} EverX.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
