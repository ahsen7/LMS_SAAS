'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const nitems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'Profile', href: '/myprofile' },
    { label: 'Subscriptions', href: '/subscriptions' },
]

const NavItems = () => {
    const pathName = usePathname();
    return (
        <nav className='flex items-center gap-4'>
            {nitems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathName === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems