import React from 'react';
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import Image from 'next/image';
import { BackgroundBeams } from './ui/background-beams';

export const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-112px)] w-full px-10 gap-16 bg-[#02030e]">
            {/* <Image
                className='z-[0] overflow-hidden'
                src="/herobg.svg"
                alt="Cover Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            /> */}
            <div className="flex-2 items-start justify-start lg:min-h-[600px]  p-5 z-[5]">
                <BoxReveal boxColor={"#6B59ED"} duration={0.5}>
                    <p className="text-md text-[#6B59ED] font-semibold">
                        Artificial Intelligence Online Course<span className="text-[#6B59ED]">.</span>
                    </p>
                </BoxReveal>
                <BoxReveal boxColor={"#6B59ED"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[#c9c6ec] text-[2em] md:text-[3rem] font-bold ">
                        Learn AI in 2 Months <br /> and Get Job Ready
                    </h2>
                </BoxReveal>
                <BoxReveal boxColor={"#6B59ED"} duration={0.5} className="w-full">
                    <div className="flex flex-wrap justify-between mt-[1.5rem] gap-4 w-full md:min-w-[520px] text-[#c9c6ec]">
                        <div className="flex flex-col gap-4 w-full md:w-[48%] ">
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                1 Year Course Access
                            </p>
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                Live Mentorship by Experts
                            </p>
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                Internship Certificate
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-[48%]">
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                40+ Hours of Live Class
                            </p>
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                2 Capstone Projects
                            </p>
                            <p className="flex items-center gap-2">
                                <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                                Course Completion Certificate
                            </p>
                        </div>
                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#6B59ED"} duration={0.5} >
                    <div className="flex flex-row gap-2 w-full mt-10">
                        <Image src="/★.svg" alt="arrow" height={14} width={14} />
                        <Image src="/★.svg" alt="arrow" height={14} width={14} />

                        <Image src="/★.svg" alt="arrow" height={14} width={14} />

                        <Image src="/★.svg" alt="arrow" height={14} width={14} />

                        <Image src="/★.svg" alt="arrow" height={14} width={14} />

                        <p className="text-sm font-semibold text-[#bdb9e2]">
                            Rated 4.9/5 from over 600 reviews<span className="text-[#6B59ED]">.</span>
                        </p>
                    </div>

                </BoxReveal>

            </div>
            <div className="flex flex-col items-center justify-center w-full p-4 m-4 max-w-[400px] rounded-xl bg-[#6B59ED] h-auto z-[5]">
                <h1 className="text-white text-2xl font-semibold text-center">Join the AI Revolution</h1>
                <h3 className="text-white text-md font-thin text-center">Over 200 students have already</h3>
                <h3 className="text-white text-md font-thin text-center mb-4">registered for the next batch!</h3>

                <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-2 w-full max-w-[339px] h-[40px] px-3 py-2 rounded-t-lg rounded-bl-lg bg-[#F7FAFF] text-[#393939] text-[15px] font-[Poppins] font-normal focus:outline-none"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className="mt-4 w-full max-w-[339px] h-[40px] px-3 py-2 rounded-t-lg rounded-bl-lg bg-[#F7FAFF] text-[#393939] text-[15px] font-[Poppins] font-normal focus:outline-none"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="mt-4 w-full max-w-[339px] h-[40px] px-3 py-2 rounded-t-lg rounded-bl-lg bg-[#F7FAFF] text-[#393939] text-[15px] font-[Poppins] font-normal focus:outline-none"
                />

                <label className="mt-4 text-white text-sm text-start w-full px-4">
                    When do you want to start?
                </label>

                <div className="relative w-full max-w-[339px]">
                    <select
                        className="appearance-none mt-2 w-full h-[40px] px-4 py-2 rounded-t-lg rounded-bl-lg bg-[#F7FAFF] text-[#393939] text-[15px] font-[Poppins] font-normal focus:outline-none"
                        style={{
                            backgroundImage: `url('/down.svg'), linear-gradient(to bottom, #F7FAFF 0%, #F7FAFF 100%)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center',
                            backgroundSize: '14px',
                        }}
                    >
                        <option value="january" className="text-[#393939] hover:bg-[#EDEDED] p-2">January</option>
                        <option value="february" className="text-[#393939] hover:bg-[#EDEDED]">February</option>
                        <option value="march" className="text-[#393939] hover:bg-[#EDEDED]">March</option>
                        <option value="april" className="text-[#393939] hover:bg-[#EDEDED]">April</option>
                        <option value="may" className="text-[#393939] hover:bg-[#EDEDED]">May</option>
                        <option value="june" className="text-[#393939] hover:bg-[#EDEDED]">June</option>
                        <option value="july" className="text-[#393939] hover:bg-[#EDEDED]">July</option>
                        <option value="august" className="text-[#393939] hover:bg-[#EDEDED]">August</option>
                        <option value="september" className="text-[#393939] hover:bg-[#EDEDED]">September</option>
                        <option value="october" className="text-[#393939] hover:bg-[#EDEDED]">October</option>
                        <option value="november" className="text-[#393939] hover:bg-[#EDEDED]">November</option>
                        <option value="december" className="text-[#393939] hover:bg-[#EDEDED]">December</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full max-w-[339px] h-[40px] flex justify-center items-center rounded-t-lg rounded-bl-lg bg-[#EDBF01] text-[#393939] text-[16px] font-semibold focus:outline-none"
                >
                    SUBMIT
                </button>

                <p className="flex flex-row w-full px-4 items-center justify-start gap-2 text-white text-sm mt-3">
                    <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                    Still have any doubt?
                </p>
                <p className="flex flex-row w-full px-4 items-center justify-start gap-2 text-white text-sm mt-3">
                    <Image src="/arrow.svg" alt="arrow" height={14} width={14} />
                    Get one-to-one mentorship.
                </p>

                <p className="flex flex-row w-full px-4 items-center justify-start gap-2 text-white text-lg font-semibold mt-8">
                    <Image src="/whatsapp.svg" alt="whatsapp" height={20} width={20} />
                    +91-9431246850
                </p>
            </div>

            <BackgroundBeams />
        </div>
    )
}