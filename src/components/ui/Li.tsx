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
    <li className={inter.className && 'flex items-center text-cyan-950 px-5  justify-center h-10 font-medium active:bg-gray-200'}>
        <Link href={href}>{children}</Link>
    </li>
  )
}
