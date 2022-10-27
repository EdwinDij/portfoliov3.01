import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex font-bold justify-between sticky'>
            <div>
                <h1>ED</h1>
            </div>
            <div className='flex gap-10'>
                <Link href="/">
                    <a className='hover:text-indigo-500'>Home</a>
                </Link>
                <Link href="/Project">
                    <a className='hover:text-indigo-500'>Projets</a>
                </Link>
                <Link href="/About">
                    <a className='hover:text-indigo-500'>À propos</a>
                </Link>
                <Link href="/Contact">
                    <a className='hover:text-indigo-500'>Contact</a>
                </Link>
            </div>
        </nav>
    )
}
