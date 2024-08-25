import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export const WhatsappIcon = () => {
  return (
    <Link
      href="https://wa.me/message/GNCLRMSDVKFOH1"
      target="_blank"
      className="btn-wsp flex justify-center items-center animate-pulse hover:animate-none hover:scale-105"
    >
      <BsWhatsapp color="" width={150} height={150} className="" />
    </Link>
  );
};
