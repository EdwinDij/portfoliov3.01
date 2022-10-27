import React, { useState } from 'react'
import Image from 'next/image'
import { projectItems } from '../api/project_file'

export default function Projets() {

let sortProject = projectItems.sort((a:any, b:any) => (a.id < b.id))

console.log(sortProject)

    return (
        <div id='Project'>
            <div className='flex justify-around'>
                <div>
                    <h2>Mes projets</h2>
                    <p>Voici tout mes projets web.</p>
                </div>
                <div>
                    <button type='button' className=''>
                        Tout
                    </button>
                </div>
            </div>
            <div className="flex justify-around flex-wrap gap-8 "> {/* div qui contient toute les card la ou commence le .map*/}
                {sortProject.map((work: any) => {
                    return <a href={work.link} target="_blank" rel="noopener noreferrer" key={work.id}> {/*div globale qui contiendra le texte*/}
                        <div className='px-8 pt-10 bg-zinc-800 flex flex-col grou'> {/* div avec background qui a l'image */}
                            <Image src={work.image}
                                width="300"
                                height="180"
                                alt={work.alt}
                            />
                            <div>
                                {work.icons.map((icons: any, work: any) => {
                                return <Image src={icons}
                                    width="30"
                                    height="30"
                                    alt="icone"
                                    key={work.id}
                                />
                            })}
                            </div>
                        </div>
                        <h3 className='text-xl '>{work.title}</h3>
                    </a>
                })}
            </div>


        </div>
    )
}
