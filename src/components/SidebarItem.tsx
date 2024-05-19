import Link from "next/link";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { CiBookmarkCheck } from "react-icons/ci";

interface props {
  children: React.ReactNode;
}

export const SidebarItem = ({ children}: props) => {

            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

  return (
    <li>
      <Link
        href="/dashboard/rest-todos"
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
      >
        <CiBookmarkCheck size={30} />

        <span className="-mr-1 font-medium">{children}</span>
      </Link>
    </li>
  );
};
