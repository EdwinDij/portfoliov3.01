import React, { useState } from 'react';
import Image from 'next/image';
import github from '../../public/github-original.svg';
import social from '../../public/linkedin-original.svg';
import Modal from './Modal'
export default function Contact() {

    const [showModal, setShowModal] = useState<any>(false)


    return (
        <div id='Contact'>
            <div className='flex justify-around bg-zinc-800 py-16 max-sm:flex-col max-sm:items-center max-sm:gap-6 max-sm:px-4'>
                <div>
                    <h4 className='font-bold text-3xl max-sm:text-xl'>Travaillons ensemble sur votre prochain projet.</h4>
                    <p className='text-lg max-sm:mt-6'>Peu importe le projet, je serai ravis de vous aider dans votre projet.</p>
                </div>
                <div>
                    <button type='button' className='bg-indigo-600 rounded py-2 px-6 text-xl hover:bg-indigo-800' onClick={() => setShowModal(true)}>Contact</button>
                    {showModal && <Modal setOpenModal={setShowModal} />}
                </div> 
            </div >
            
            <div className='flex justify-center mt-14 shadow pt-6 shadow-white bg-zinc-500'>
                <a href='https://github.com/EdwinDij' target="_blank" rel="noopener noreferrer">
                        <Image
                        src={github}
                        alt='github'
                        width="48"
                        height="48" />
                
                </a>
                <a href='https://www.linkedin.com/in/edwin-dijeont-1469a0226' target="_blank" rel="noopener noreferrer">
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