import React from 'react';
import Image from 'next/image';

export const Mentors = () => {
    return (
        <div className="flex w-full  items-center justify-center bg-[#02030e]">
            <div className="flex flex-col w-full max-w-[1140px] h-[450px]  ">
                {/* Text part  */}
                <div className="flex flex-col text-center items-center justify-center">
                <h1 className="text-[32px] font-semibold text-[#c9c6ec] mb-3">Meet Our Mentors</h1>
                <p className="text-lg italic text-[#bdb9e2] max-w-[640px]">We are ready to assist, advise, encourage and listen as you begin your
                professional courses at YHills.</p>
            </div>
                {/* Image part */}
                <div className="flex flex-row items-center justify-evenly pt-5">
                    <div className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center">
                        <Image src="/Garima-Mittal.webp.svg" alt="arrow" height={110} width={110} className='absolute top-0 z-[5]' />

                        <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                            <h2 className="text-[16px] text-white font-semibold pb-2">Garima Mittal</h2>
                            <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                            <p className="text-[13px] text-[#F5FF11] pb-2">AutoCAD Trainer </p>
                            <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742]">
                                <Image src="/linkedin.svg" alt="arrow" height={25} width={25}  />

                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center">
                        <Image src="/Garima-Mittal.webp.svg" alt="arrow" height={110} width={110} className='absolute top-0 z-[5]' />

                        <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                            <h2 className="text-[16px] text-white font-semibold pb-2">Garima Mittal</h2>
                            <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                            <p className="text-[13px] text-[#F5FF11] pb-2">AutoCAD Trainer </p>
                            <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742]">
                                <Image src="/linkedin.svg" alt="arrow" height={25} width={25}  />

                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center">
                        <Image src="/Garima-Mittal.webp.svg" alt="arrow" height={110} width={110} className='absolute top-0 z-[5]' />

                        <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                            <h2 className="text-[16px] text-white font-semibold pb-2">Garima Mittal</h2>
                            <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                            <p className="text-[13px] text-[#F5FF11] pb-2">AutoCAD Trainer </p>
                            <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742]">
                                <Image src="/linkedin.svg" alt="arrow" height={25} width={25}  />

                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center">
                        <Image src="/Garima-Mittal.webp.svg" alt="arrow" height={110} width={110} className='absolute top-0 z-[5]' />

                        <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                            <h2 className="text-[16px] text-white font-semibold pb-2">Garima Mittal</h2>
                            <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                            <p className="text-[13px] text-[#F5FF11] pb-2">AutoCAD Trainer </p>
                            <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742]">
                                <Image src="/linkedin.svg" alt="arrow" height={25} width={25}  />

                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-[220px] bg-[#02030e] rounded-lg h-[275px] items-center justify-center">
                        <Image src="/Garima-Mittal.webp.svg" alt="arrow" height={110} width={110} className='absolute top-0 z-[5]' />

                        <div className="absolute flex flex-col w-[220px] min-h-[220px] bg-[#5743E2] rounded-lg bottom-0 pt-[30px] items-center justify-center">
                            <h2 className="text-[16px] text-white font-semibold pb-2">Garima Mittal</h2>
                            <div className="w-[160px] border-t border-gray-500 pb-2"></div>
                            <p className="text-[13px] text-[#F5FF11] pb-2">AutoCAD Trainer </p>
                            <div className="flex items-center justify-center p-[12px] rounded-lg bg-[#77777742]">
                                <Image src="/linkedin.svg" alt="arrow" height={25} width={25}  />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
