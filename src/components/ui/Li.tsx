import Link from 'next/link'
import React from 'react'
import { Inter } from "next/font/google";

interface props {
    children: React.ReactNode;
    href: string
}
const inter = Inter({ subsets: ["latin"] });

export const Li = ({children, href} : props) => {
  return (
    <li className={inter.className && 'flex items-center text-cyan-950 px-5 md:text-sm xl:text-base 2xl:text-xl justify-center h-10 font-medium '}>
        <Link className='transition duration-200 hover:scale-105 active:scale-110 ' href={href}>{children}</Link>
    </li>
  )
}
