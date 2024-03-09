import Link from 'next/link'
import React from 'react'

interface props {
    children: React.ReactNode;
    href: string
}

export const Li = ({children, href} : props) => {
  return (
    <li className='flex items-center font-serif rounded-xl px-2 mx-2 justify-center h-10  border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'>
        <Link href={href}>{children}</Link>
    </li>
  )
}
