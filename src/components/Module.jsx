"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Module = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        setOpenIndex(1);
    }, []);

    return (
        <div className="flex flex-col w-full h-[755px] bg-[#6B59ED08] items-center justify-center gap-[6px]">
            {/* Module 1 */}
            <div className="w-[1140px]">
                <div
                    className={`flex w-full h-[54px] ${openIndex === 1 ? 'bg-[#6B59ED] text-white border border-[#6B59ED] rounded-t-[10px]' : 'bg-white text-black border border-[#F0F5FD]'}   p-[15px_31px] cursor-pointer items-center gap-[26px]`}
                    onClick={() => handleToggle(1)}
                >
                    <Image
                        src={openIndex === 1 ? '/minus.svg' : '/plus.svg'}
                        alt={openIndex === 1 ? 'minus' : 'plus'}
                        height={20}
                        width={17}
                    />
                    <h2 className={`text-[20px] font-semibold ${openIndex === 1 ? 'text-white' : 'text-black'}`}>Module 1</h2>
                </div>
                <div
                    className={`flex w-full bg-[#F9F9F9] items-center p-[30px_65px] overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === 1 ? 'max-h-[200px]' : 'hidden'
                        }`}
                >
                    <h2 className="w-[130px] text-[18px] font-thin">
                        Architecture
                        <br />
                        Data Structure
                    </h2>
                </div>
            </div>

            {/* Module 2 */}
            <div className="w-[1140px]">
                <div
                    className={`flex w-full h-[54px] ${openIndex === 2 ? 'bg-[#6B59ED] text-white border border-[#6B59ED] rounded-t-[10px]' : 'bg-white text-black border border-[#F0F5FD]'}   p-[15px_31px] cursor-pointer items-center gap-[26px]`}

                    onClick={() => handleToggle(2)}
                >
                    <Image
                        src={openIndex === 2 ? '/minus.svg' : '/plus.svg'}
                        alt={openIndex === 2 ? 'minus' : 'plus'}
                        height={20}
                        width={17}
                    />
                    <h2 className={`text-[20px] font-semibold ${openIndex === 2 ? 'text-white' : 'text-black'}`}>Module 2</h2>
                </div>
                <div
                    className={`flex w-full bg-[#F9F9F9] items-center p-[30px_65px] overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === 2 ? 'max-h-[200px]' : 'hidden'
                        }`}
                >
                    <h2 className="w-[130px] text-[18px] font-thin">
                        Python Data Science Package to Manipulate
                        <br />
                        Calculate and Analyze Data
                    </h2>
                </div>
            </div>

            {/* Module 3 */}
            <div className="w-[1140px]">
                <div
                    className={`flex w-full h-[54px] ${openIndex === 3 ? 'bg-[#6B59ED] text-white border border-[#6B59ED] rounded-t-[10px]' : 'bg-white text-black border border-[#F0F5FD]'}   p-[15px_31px] cursor-pointer items-center gap-[26px]`}

                    onClick={() => handleToggle(3)}
                >
                    <Image
                        src={openIndex === 3 ? '/minus.svg' : '/plus.svg'}
                        alt={openIndex === 3 ? 'minus' : 'plus'}
                        height={20}
                        width={17}
                    />
                    <h2 className={`text-[20px] font-semibold ${openIndex === 3 ? 'text-white' : 'text-black'}`}>Module 3</h2>
                </div>
                <div
                    className={`flex w-full bg-[#F9F9F9] items-center p-[30px_65px] overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === 3 ? 'max-h-[200px]' : 'hidden'
                        }`}
                >
                    <h2 className="w-[130px] text-[18px] font-thin">
                        Learn how to:
                        <br />
                        Explore
                        <br />
                        Visualize
                        <br />
                        Extract Insights from Data
                    </h2>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full h-auto ">
                <label htmlFor=""></label>
            </div>
        </div>
    );
};

export default Module;
