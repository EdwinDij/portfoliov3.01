import React from 'react'
import Image from 'next/image'
import frontend from '../../public/code.png'
import backend from '../../public/coding.png'
import hands from '../../public/agreement.png'

export default function Exp() {
  return (
    <div className='mb-40'>
        <div className='flex justify-evenly max-lg:flex-col max-lg:items-center max-lg:gap-6'>
            <div className='group bg-zinc-800 w-80 p-10 cursor-pointer hover:bg-indigo-700 duration-700'>
                <Image src={frontend}
                height='60'
                width='60'
                alt="frontend"/>
                <h2 className='font-bold text-2xl'>
                    Front-end
                </h2>
                <p>Conception, intégration, amélioration en HTML, CSS, Javascript</p>
                <p className='text-xl text-indigo-700 group-hover:text-white duration-700'>En savoir plus</p>
            </div>
            <div className='group bg-zinc-800 w-80 p-10 cursor-pointer hover:bg-indigo-700 duration-700'>
                <Image src={backend}
                height='60'
                width='60'
                alt="backend"/>
                <h2 className='font-bold text-2xl'>
                    Back-end
                </h2>
                <p>API, base de donné avec nodejs, Mongodb, sql, Firebase</p>
                <p className='text-xl text-indigo-700 group-hover:text-white duration-700'>En savoir plus</p>
            </div>
            <div className='group bg-zinc-800 w-80 p-10 cursor-pointer hover:bg-indigo-700 duration-700'>
                <Image src={hands}
                height='60'
                width='60'
                alt="backend"/>
                <h2 className='font-bold text-2xl'>
                    Soft-skills
                </h2>
                <p>Enthousiaste, motivé, prêt à apprendre et s{"'"}investir... </p>
                <p className='text-xl text-indigo-700 group-hover:text-white duration-700'></p>
            </div>

        </div>
    </div>
  )
}
