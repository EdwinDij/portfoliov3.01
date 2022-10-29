import React from 'react'
import me from '../../public/me-memoji.png';
import Image from 'next/image';

export default function About() {
    return (
        <div id="About" className='perso flex items-center justify-evenly h-3/4 my-40 '>
            <div>
                <Image src={me} alt="moi en memoji" />
            </div>
            <div className='flex flex-col gap-20 '>
                <div>
                    <p className='text-indigo-600 font-semibold text-xl'>Bonjour, je suis Edwin Dijeont</p>
                    <h1 className='text-5xl font-bold mt-2'>Développeur Front-end</h1>
                    <p className='mt-4'>Je m{"'"}applle Edwin, je vis à Paris<br></br> 
                    Passionné par le développement front-end, par l{"'"}informatique, la création. <br></br>
                    Ma soif d{"'"}apprendre ne s{"'"}éteint jamais.

                 
                    
                    </p>
                </div>
                <div>
                    <button type="button" className='text-lg font-semibold bg-indigo-600 rounded px-6 py-3 hover:bg-indigo-800'>
                        <a href="/Dijeont_CV(6).pdf" target="_blank" rel="noreferrer"> Mon parcours</a>

                    </button>
                </div>
            </div>


        </div>
    )
}
