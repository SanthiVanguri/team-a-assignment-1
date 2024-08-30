import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export const PromoCard = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[800px] bg-[#02030E] ">
            <div className="flex items-center justify-center flex-col lg:flex-row h-full w-full p-4 md:px-20 lg:max-w-[1400px] gap-8">
                <div className="flex flex-col items-start justify-center w-full lg:w-1/3 h-full p-4 gap-5">
                    <h1 className="text-5xl text-[#c9c6ec]">Artificial
                        Intelligence
                        Course Fee
                    </h1>
                    <p className="text-[#c9c6ec] ">Quality learning, simplified and budget-
                        friendly – just for you!
                    </p>
                    <div className="flex w-full  p-4 flex-col items-start justify-center gap-4 bg-[#0a0c19] rounded-xl">
                        <Image src="/quotes.svg" alt="arrow" height={30} width={30} />
                        <p className="text-[#c9c6ec] ">“The YHills course is straightforward,
                            featuring hands-on projects and a
                            real-world approach, I recommend it!”</p>

                        <div className="flex flex-row w-full max-w-[320px] h-auto items-center justify-between p-4 px-6 rounded-lg bg-[#0d0f1c] border border-[#15192e]">
                            <div className="flex flex-col items-start justify-center">
                                <Image src="/userp.svg" alt="arrow" height={30} width={30} />
                                <h2 className="text-sm text-[#c9c6ec]">Priyanshu K</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="flex flex-row items-center justify-center gap-1 w-full ">
                                    <Image src="/★.svg" alt="arrow" height={16} width={16} />
                                    <Image src="/★.svg" alt="arrow" height={16} width={16} />

                                    <Image src="/★.svg" alt="arrow" height={16} width={16} />

                                    <Image src="/★.svg" alt="arrow" height={16} width={16} />

                                    <Image src="/★.svg" alt="arrow" height={16} width={16} />


                                </div>
                                <p className="text-xs text-[#bdb9e2]">
                                    5-star rating
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative flex flex-col items-center justify-center w-full lg:w-1/3 h-[645px] p-4 ">
                    <div className="absolute top-0 flex flex-col items-start justify-start bg-[#6B59ED] rounded-[25px] w-full max-w-[500px] h-[165px] p-5 gap-2">
                        <h1 className="text-xl font-semibold text-white ">Mentor-Led Program</h1>
                        <h1 className="text-4xl font-bold text-white ">₹ 6000 <span className="font-normal text-lg"> /Course</span></h1>

                    </div>
                    <div className="aboslute mt-[116px] flex flex-col w-full max-w-[400px] bg-[#0d0f1c] rounded-b-xl min-h-[525px] px-4 py-1 gap-3">
                        <div className="flex h-[75px] w-[75px] items-center justify-center bg-[#02030a] z-[4] rounded-xl p-2 border border-[#6B59ED]">
                            <Image src="/hand.svg" alt="arrow" height={50} width={50} />
                        </div>
                        <div className="text-lg font-semibold text-[#c9c6ec] mb-1">You’ll Get Access to:</div>
                        <ul className="flex flex-col items-start justify-center w-full h-auto gap-3 mb-10">
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                        </ul>
                        <Button variant="custom" className="bg-[#6B59ED] text-white rounded-xl w-full max-w-[175px] flex items-center justify-center text-lg px-5 py-2">Start Learning</Button>

                    </div>

                </div>
                <div className="relative flex flex-col items-center justify-center w-full lg:w-1/3 h-[645px] p-4 ">
                    <div className="absolute top-0 flex flex-col items-start justify-start bg-[#6B59ED] rounded-[25px] w-full max-w-[500px] h-[165px] p-5 gap-2">
                        <h1 className="text-xl font-semibold text-white ">Mentor-Led Program</h1>
                        <h1 className="text-4xl font-bold text-white ">₹ 6000 <span className="font-normal text-lg"> /Course</span></h1>

                    </div>
                    <div className="aboslute mt-[116px] flex flex-col w-full max-w-[400px] bg-[#0d0f1c] rounded-b-xl min-h-[525px] px-4 py-1 gap-3">
                        <div className="flex h-[75px] w-[75px] items-center justify-center bg-[#02030a] z-[4] rounded-xl p-2 border border-[#6B59ED]">
                            <Image src="/hand.svg" alt="arrow" height={50} width={50} />
                        </div>
                        <div className="text-lg font-semibold text-[#c9c6ec] mb-1">You’ll Get Access to:</div>
                        <ul className="flex flex-col items-start justify-center w-full h-auto gap-3 mb-10">
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec]">
                                <Image src="/headphone.svg" alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                        </ul>
                        <Button variant="custom" className="bg-[#6B59ED] text-white rounded-xl w-full max-w-[175px] flex items-center justify-center text-lg px-5 py-2">Start Learning</Button>

                    </div>

                </div>
            </div>
        </div>
    )
}
