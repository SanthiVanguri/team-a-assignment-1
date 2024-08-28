import Image from 'next/image'
import React from 'react'

export const Vanaja = () => {
    return (
        <div className="flex w-full h-[516.19px] items-center justify-center ">
            <div className="flex flex-col text-start items-start justify-center ">
                <h1 className='text-[#454C5F] text-[30px] w-[519px] font-bold'>
                    AI’s Growing Impact on Industries:
                    Real-World Examples You Can’t
                    Miss
                </h1>
                <p className="text-[18px]">Have you heard of the latest advancement in artificial
                    intelligence?
                </p>
            </div>
            <Image src="/industry.svg" alt="industry" height={500} width={500} />
        </div>
    )
}
