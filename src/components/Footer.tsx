import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BsFacebook, BsGithub, BsInstagram,  BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-muted p-4 md:py-8 w-full">
      <div className=" flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; 2024 Boinca Servicios. All Todos los derechos reservados.
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" aria-label="Facebook">
            <BsFacebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Twitter">
            <BsWhatsapp className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <BsInstagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <BsGithub className="h-5 w-5" href="https://github.com/ReinaldoMarcanoJS/Boinca.git" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
