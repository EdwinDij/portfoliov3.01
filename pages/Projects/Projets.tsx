import React, { useState } from 'react'
import Image from 'next/image'
import { projectItems } from '../api/project_file'

export default function Projets() {

    let sortProject = projectItems.sort((a: any, b: any) => (a.id < b.id))
    return (
        <div id='Project' className='mb-20'>
            <div className='text-center mb-16'>
                <div>
                    <h2 className='text-4xl'>Mes projets</h2>
                    <p className='text-lg'>Voici tout mes projets web.</p>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-6"> {/* div qui contient toute les card la ou commence le .map*/}
                {sortProject.map((work: any) => {
                    return <a href={work.link} target="_blank" rel="noopener noreferrer" key={work.id}> {/*div globale qui contiendra le texte*/}
                        <div className='px-8 pt-10 bg-zinc-800 flex flex-col hover:bg-indigo-800 duration-700'> {/* div avec background qui a l'image */}
                            <Image src={work.image}
                                width="300"
                                height="180"
                                alt={work.alt}
                            />
                            <div>
                                {work.icons.map((icons: any, index: any) => {
                                    return <Image src={icons}
                                        width="30"
                                        height="30"
                                        alt="icone"
                                        key={index}
                                    />
                                })}
                            </div>
                        </div>
                        <h3 className='text-xl'>{work.title}</h3>
                        <p className='sm'>{work.status}</p>
                    </a>
                })}
            </div>
        </div>
    )
}
