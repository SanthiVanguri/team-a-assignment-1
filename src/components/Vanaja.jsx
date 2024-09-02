import React from 'react';
import Image from 'next/image';

export const Vanaja = () => {
    return (
        <div className="flex w-full max-w-[1140px] p-5 items-center justify-center">
            <div className="flex flex-col text-start items-start justify-center">
                <h1 className='text-[#454C5F] text-[30px] w-[519px] font-bold'>
                    AI's Growing Impact on Industries: 
                    Real-World Examples You Can't Miss
                </h1>
                <p className="text-[18px]">
                    Have you heard of the latest advancement in artificial
                    intelligence?
                </p>
                <p className="text-[18px]">
                    AI is able to analyze vast amounts of data and make
                    predictions with unprecedented accuracy. It's helping
                    businesses increase revenue and gain a competitive edge.
                </p>
                <p className="text-[18px]">
                    In this blog, I'll explore the latest advancements and dive 
                    into the ways this technology is transforming healthcare,
                    finance, manufacturing, and more.
                </p>
                <p className="text-[18px]">
                    Read more as we uncover incredible examples of AI's impact.
                </p>
            </div>
            <Image src="/industry.svg" alt="arrow" height={500} width={500} />
        </div>
    );
}
