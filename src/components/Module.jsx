"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Module = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        setOpenIndex(1);
    }, []);

    return (
        <div className="flex flex-col w-full bg-[#08040f] items-center justify-center py-8 px-4 sm:px-8">
            <h1 className="w-full max-w-[1140px] text-start text-[#c9c6ec] font-poppins text-[20px] md:text-[30px] font-semibold mb-8">
                Artificial Intelligence Course Syllabus
            </h1>

            {[...Array(5)].map((_, i) => (
                <div key={i + 1} className="w-full max-w-[1140px] mb-4">
                    <div
                        className={`flex justify-between items-center w-full p-4 cursor-pointer border ${openIndex === i + 1
                                ? 'bg-[#6B59ED] text-white border-[#6B59ED] rounded-t-[10px]'
                                : 'bg-[#0d0f1c] text-white border-[#0c0e1e] rounded-[10px]'
                            }`}
                        onClick={() => handleToggle(i + 1)}
                    >
                        <h2 className="text-[18px] sm:text-[20px] font-semibold">
                            {`Module ${i + 1}`}
                        </h2>
                        <Image
                            src={openIndex === i + 1 ? '/minus.svg' : '/plus.svg'}
                            alt={openIndex === i + 1 ? 'Collapse' : 'Expand'}
                            height={20}
                            width={17}
                        />
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i + 1 ? 'max-h-[500px] py-4' : 'max-h-0'
                            } bg-[#0b0514] px-4 sm:px-8`}
                    >
                        <ul className="list-disc text-[16px] sm:text-[18px] text-[#c9c6ec] space-y-2 ml-4">
                            {i === 0 && (
                                <>
                                    <li>Architecture</li>
                                    <li>Data Structure</li>
                                </>
                            )}
                            {i === 1 && (
                                <>
                                    <li>Python Data Science Package to Manipulate</li>
                                    <li>Calculate and Analyze Data</li>
                                </>
                            )}
                            {i === 2 && (
                                <>
                                    <h2 className='text-[18px] sm:text-[20px] mb-1 font-medium'>Learn how to :</h2>
                                    <li>Explore</li>
                                    <li>Visualize</li>
                                    <li>Extract Insights from Data</li>
                                </>
                            )}
                            {i === 3 && (
                                <>
                                    <li>Build the foundation you need to think statistically and to speak the language of your data.</li>
                                </>
                            )}
                            {i === 4 && (
                                <>
                                    <li>Introduction to Neural Networks</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            ))}

            <div className="w-full max-w-[1140px] text-start text-[#c9c6ec] font-poppins text-[16px] sm:text-[18px] font-semibold mt-8 ">
                Looking for the complete module?
            </div>

            <div className="w-full max-w-[1140px] flex flex-col md:flex-row justify-center items-center gap-10 mt-6 px-4">
                <div className="text-[#6B59ED] font-poppins text-[20px] sm:text-[24px] font-semibold bg-transparent">
                    Download Full Syllabus
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-center w-full sm:w-auto">
                    <div className="relative w-full sm:w-[273.48px] h-[40px] border-2 border-[black] rounded-lg">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-full px-3 py-2 rounded-lg border-none bg-[#0d0f1c] text-[#c9c6ec] text-[15px] focus:outline-none"
                        />
                    </div>
                    <div className="relative w-full sm:w-[273.48px] h-[40px] border-2 border-[black] rounded-lg">
                        <input
                            type="number"
                            placeholder="10 digit mobile number"
                            className="w-full h-full px-3 py-2 rounded-lg border-none bg-[#0d0f1c] text-[#c9c6ec] text-[15px] focus:outline-none"
                        />
                    </div>
                    <button className="w-full sm:w-[188.67px] h-[40px] bg-[#6B59ED] text-white rounded-lg text-[15px] font-semibold">
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Module;