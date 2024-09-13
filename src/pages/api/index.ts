import { message } from "antd";
import emailjs from "@emailjs/browser";
import { RefObject } from "react";

type props = {
  actions: any;
  form: RefObject<HTMLFormElement>;
};

export const formhandle = ({ actions, form }: props) => {
  emailjs
    .sendForm("service_j4tya15", "template_uwb82mo", form.current!, {
      publicKey: "-thb_WDdZqhn6d1i3",
    })
    .then(
      message.open({
        type: "success",
        content: "Correo enviado correctamente",
      })
    ),
    (error: Error) => {
      message.open({
        type: "error",
        content: "Oh! algo ha salido mal",
      });
      console.error("Error al enviar el formulario", error);
      return;
    };
  actions.resetForm();
};
