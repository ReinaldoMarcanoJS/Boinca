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
    "service_t36xmrb",
    "template_4m8c77m",
    form.current!,
    {
      publicKey: "hZOJqTlRDArHHH6H3",
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
