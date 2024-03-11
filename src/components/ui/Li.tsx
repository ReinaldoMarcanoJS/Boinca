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
    <li className={inter.className && 'flex items-center text-cyan-950 rounded-xl px-2 mx-2 justify-center h-10 font-medium border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'}>
        <Link href={href}>{children}</Link>
    </li>
  )
}
