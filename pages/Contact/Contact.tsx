import React from 'react';
import Image from 'next/image';
import github from '../../public/github-original.svg';
import social from '../../public/linkedin-original.svg'
export default function Contact() {
    return (
        <div>
            <div className='flex justify-around bg-zinc-800 py-10'>
                <div>
                    <h4 className='font-bold text-3xl'>Travaillons ensemble sur votre prochain projet.</h4>
                    <p className='text-lg'>Peu importe le projet, je serai ravis de vous aider dans votre projet.</p>
                </div>
                <div>
                    <button type='button' className='bg-indigo-600 rounded py-2 px-6 text-xl hover:bg-indigo-800'>Contact</button>
                </div>
            </div >

            <div className='flex justify-center'>
                <a href='https://github.com/EdwinDij'>
                    <Image
                        src={github}
                        alt='github'
                        width="48"
                        height="48" />
                </a>
                <a href='http://google.com'>
                    <Image
                        src={social}
                        alt='linkedin'
                        width="48"
                        height="48"
                    />
                </a>
            </div>
        </div>
    )
}