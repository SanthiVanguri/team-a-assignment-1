"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Animation variants for the menu container and items
    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: "beforeChildren", // Ensures the container animation completes before children animate
                staggerChildren: 0.1, // Staggers the appearance of each child (menu item)
            }
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <div className="flex flex-col w-full top-0 h-[112px] justify-start items-start z-[999]">
            {/* Top Announcement Section */}
            <section className="flex flex-wrap items-center justify-center w-full px-2 py-1 md:py-0 text-center min-h-8 text-white text-xs md:text-sm bg-gradient-to-r from-[#965DE8] to-[#6B59ED] shadow-[0px_28px_20px_-24px_rgba(107,90,237,0.13)] z-[999]">
                <span className="font-semibold">📣 Avail Discount On Our Selected Courses:</span>&nbsp;
                Get Our Mentor-Led Courses for Flat 50% off!
                <a href="#" className='text-[#FEBD34] ml-2 underline whitespace-nowrap'>Explore</a>
            </section>

            {/* Navigation Bar */}
            <nav className="flex w-full bg-[#02030e] h-[80px] items-center justify-between px-4 md:px-12 lg:px-24 shadow-[0px_10px_20px_rgba(68,62,116,13%)] z-[999] relative">
                {/* Logo Section */}
                <div className="text-center text-3xl font-bold text-[#c9c6ec]">Skill Chase</div>

                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex items-center justify-center gap-10">
                    <ul className="flex gap-5 text-[#d9d7ec]">
                        <li>Home</li>
                        <li>Explore Courses</li>
                        <li>Career</li>
                        <li>Resources</li>
                    </ul>
                    <Button variant="custom" className="bg-[#6B59ED] text-white">Login</Button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button className="md:hidden text-[#d9d7ec]" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={30} />}
                </button>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            className="absolute top-[80px] left-0 w-full bg-[#02030e] z-50 md:hidden shadow-lg"
                        >
                            <ul className="flex flex-col items-center gap-5 p-5 text-[#d9d7ec]">
                                {['Home', 'Explore Courses', 'Career', 'Resources'].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="hover:text-white"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                                <motion.li variants={itemVariants} className="w-full flex justify-center">
                                    <Button variant="custom" className="bg-[#6B59ED] text-white w-full">Login</Button>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};
