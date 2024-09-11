import { message } from "antd";
import emailjs from "@emailjs/browser";
import { Ref, RefObject } from "react";

type props = {
    actions: any, 
    form: RefObject<HTMLFormElement>
}

export const formhandle = ({actions, form} : props) => {
  emailjs
  .sendForm(
    "service_paoz125",
    "template_nxofspx",
    form.current!,
    {
      publicKey: "Xkko0Kfz-kKcRYM4S",
    }
  )
   .then(
    message.open({
      type: "success",
      content: "Correo enviado correctamente",
    })
    ),
    (error : Error) => {
        message.open({
          type: "error",
          content: "Oh! algo ha salido mal",
        });
      console.error("Error al enviar el formulario", error);
      return
    }
    actions.resetForm();

  
};
