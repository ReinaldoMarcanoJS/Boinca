import React from "react";
import type { AnchorHTMLAttributes } from "react";
type PropsFooterRedirect = {
  children: React.ReactNode;
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & PropsFooterRedirect;

export const OptionsRedirectModal = ({
  children,
  ...propsA
}: Props): JSX.Element => {
  return (
    <li className="mt-2 px-3 hover:bg-cyan-950/80 active:bg-cyan-950 rounded-md py-1" >
      <a
        href="#"
        {...propsA}
        className="hover:font-semibold transition duration-300 pointer-events-auto block">
        {children}
      </a>
    </li>
  );
};
