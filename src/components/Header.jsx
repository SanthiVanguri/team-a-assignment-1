import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const Header = () => {
    return (
        <div className="flex flex-col w-full top-0 h-[112px] justify-start items-start z-[999]">
            <section className="flex items-center justify-center w-full text-center h-8 text-white text-sm bg-gradient-to-r from-[#965DE8] to-[#6B59ED] shadow-[0px_28px_20px_-24px_rgba(107,90,237,0.13)] z-[999]">
                📣  <span className="font-semibold">Avail Discount On Our Selected Courses:</span> Get Our Mentor-Led Courses for Flat 50% off!
                <a href="#" className='text-[#FEBD34] ml-2 underline'>Explore</a>
            </section>
            <nav className="flex w-full bg-white
             h-[80px] items-center justify-between px-2 md:px-24 shadow-[0px_10px_20px_rgba(107,90,237,0.13)] z-[999]">
                {/* <Image 
                src="https://skillchase.in/images/CompanyLogo.jpg"
                alt="logo"
                height={100}
                width={100}
            /> */}
                <div className="text-center text-3xl font-bold text-[#454C5F]">Skill Chase</div>
                <div className='flex items-center justify-center gap-10'>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>Explore Courses</li>
                        <li>Career</li>
                        <li>Resources</li>
                    </ul>
                    <Button variant="custom" className="bg-[#6B59ED] text-white">Login</Button>
                </div>

            </nav>

        </div>
    )
}
