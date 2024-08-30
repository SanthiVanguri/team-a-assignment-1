"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleMouseEnter = (menuName) => setActiveDropdown(menuName);
    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setHoveredCourse(null);
    };
    const handleCourseMouseEnter = (courseName) => setHoveredCourse(courseName);
    const handleCourseMouseLeave = () => setHoveredCourse(null);
    const toggleMobileDropdown = (menuName) => {
        setMobileActiveDropdown(mobileActiveDropdown === menuName ? null : menuName);
    };

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
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
                        {/* List Items with Dropdowns */}
                        <li className="hover:text-[#6B59ED] cursor-pointer">Home</li>
                        <li
                            className="relative group hover:text-[#6B59ED] flex items-center cursor-pointer"
                            onMouseEnter={() => handleMouseEnter('explore')}
                            onMouseLeave={handleMouseLeave}
                        >
                            Explore Courses
                            <ChevronDown className="ml-1" size={16} />
                            {/* Dropdown for Explore Courses */}
                            <AnimatePresence>
                                {activeDropdown === 'explore' && (
                                    <motion.ul
                                        className="absolute left-0 top-[48px] mt-1 w-48 bg-[#705dea] text-white rounded-md shadow-lg"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={menuVariants}
                                    >
                                        <li
                                            className="relative px-4 py-2 text-[#FEBD34] hover:bg-[#6B59ED] flex justify-between cursor-pointer"
                                            onMouseEnter={() => handleCourseMouseEnter('basic')}
                                            onMouseLeave={handleCourseMouseLeave}
                                        >
                                            Basic Courses
                                            <ChevronRight size={14} />
                                            {hoveredCourse === 'basic' && (
                                                <motion.ul
                                                    className="absolute left-full top-0 mt-1 w-48 bg-[#705dea] text-white rounded-md shadow-lg"
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={menuVariants}
                                                >
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Computer Science</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Electronics</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Mechanics</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Physics</li>
                                                </motion.ul>
                                            )}
                                        </li>
                                        <li
                                            className="relative px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] flex justify-between cursor-pointer"
                                            onMouseEnter={() => handleCourseMouseEnter('advanced')}
                                            onMouseLeave={handleCourseMouseLeave}
                                        >
                                            Advanced Courses
                                            <ChevronRight size={14} />
                                            {hoveredCourse === 'advanced' && (
                                                <motion.ul
                                                    className="absolute left-full top-0 mt-1 w-48 bg-[#705dea] text-white rounded-md shadow-lg"
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={menuVariants}
                                                >
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">AI</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Web Development</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Machine Learning</li>
                                                </motion.ul>
                                            )}
                                        </li>
                                        <li
                                            className="relative px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] flex justify-between cursor-pointer"
                                            onMouseEnter={() => handleCourseMouseEnter('integrated')}
                                            onMouseLeave={handleCourseMouseLeave}
                                        >
                                            Integrated Courses
                                            <ChevronRight size={14} />
                                            {hoveredCourse === 'integrated' && (
                                                <motion.ul
                                                    className="absolute left-full top-0 mt-1 w-48 bg-[#705dea] text-white rounded-md shadow-lg"
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={menuVariants}
                                                >
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Data Science</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Software Engineering</li>
                                                    <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Cybersecurity</li>
                                                </motion.ul>
                                            )}
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Simple List Items without Dropdowns */}
                        <li className="hover:text-[#6B59ED] cursor-pointer">Career</li>
                        <li className="relative group hover:text-[#6B59ED] flex items-center cursor-pointer"
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            Resources
                            <ChevronDown className="ml-1" size={16} />
                            {/* Dropdown for Resources */}
                            <AnimatePresence>
                                {activeDropdown === 'resources' && (
                                    <motion.ul
                                        className="absolute left-0 top-[48px] mt-1 w-48 bg-[#705dea] text-white rounded-md shadow-lg"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={menuVariants}
                                    >
                                        <li className="px-4 py-2 hover:bg-[#6B59ED] text-[#FEBD34] cursor-pointer">eBooks</li>
                                        <li className="px-4 py-2 hover:bg-[#6B59ED] hover:text-[#FEBD34] cursor-pointer">Articles</li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
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
                                <motion.li
                                    variants={itemVariants}
                                    className="hover:text-white cursor-pointer"
                                >
                                    Home
                                </motion.li>
                                {/* Mobile Dropdown for Explore Courses */}
                                <motion.li
                                    variants={itemVariants}
                                    className="flex flex-col items-start w-full cursor-pointer"
                                    onClick={() => toggleMobileDropdown('explore')}
                                >
                                    <div className="flex justify-center w-full items-center hover:text-white">
                                        Explore Courses <ChevronDown size={16} className={`${mobileActiveDropdown === 'explore' ? 'rotate-180' : ''}`} />
                                    </div>
                                    <AnimatePresence>
                                        {mobileActiveDropdown === 'explore' && (
                                            <motion.ul
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={menuVariants}
                                                className="w-full text-left mt-2"
                                            >
                                                <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Basic Courses</li>
                                                <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Advanced Courses</li>
                                                <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Integrated Courses</li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.li>
                                <motion.li
                                    variants={itemVariants}
                                    className="hover:text-white cursor-pointer"
                                >
                                    Career
                                </motion.li>
                                {/* Mobile Dropdown for Resources */}
                                <motion.li
                                    variants={itemVariants}
                                    className="flex flex-col items-start w-full cursor-pointer"
                                    onClick={() => toggleMobileDropdown('resources')}
                                >
                                    <div className="flex justify-center w-full items-center hover:text-white">
                                        Resources <ChevronDown size={16} className={`${mobileActiveDropdown === 'resources' ? 'rotate-180' : ''}`} />
                                    </div>
                                    <AnimatePresence>
                                        {mobileActiveDropdown === 'resources' && (
                                            <motion.ul
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={menuVariants}
                                                className="w-full text-left mt-2"
                                            >
                                                <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">eBooks</li>
                                                <li className="px-4 py-2 hover:text-[#FEBD34] hover:bg-[#6B59ED] cursor-pointer">Articles</li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.li>
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