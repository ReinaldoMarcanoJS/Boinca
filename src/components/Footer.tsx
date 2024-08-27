import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-white p-4 md:py-8 w-full">
      <div className="container flex flex-col items-center gap-3">
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" aria-label="Twitter">
            <BsWhatsapp className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <BsInstagram className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; 2024 Boinca Servicios. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
