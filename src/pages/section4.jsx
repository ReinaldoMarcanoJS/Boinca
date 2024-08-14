"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { object, string, InferType } from "yup";

let userSchema = object({
  name: string().required(),
  email: string().email(),
  mensaje: string().required().min(10),
});

// parse and assert validity

export default function Section4() {
  const [message, setMesagge] = useState("");
  const handleSubmit = async (event) => {
    if (event.target) {
      event.preventDefault();
      const data = new FormData(event.target);
      const response = await fetch(event.target.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
    
    const result = await response.json();
    if (!response.ok) {
      setMesagge(result.error.map((error) => error.message).join(", "));
      return false;
    }
  }
  setMesagge("Tu correo se ha enviado satisfactioriamente")
  };
  return (
    <>
      <section
        id="contact"
        className="bg-cyan-800/5 w-full py-6 md:py-24 lg:py-32 "
      >
        <div className=" container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Contáctanos
            </h2>
            <p className="mb-3 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Si tienes alguna pregunta o necesitas más información sobre
              nuestros servicios, no dudes en ponerte en contacto con nosotros.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form
              action="https://formspree.io/f/mdknzqdg"
              method="post"
              onSubmit={handleSubmit}
              className="flex flex-col gap-2"
            >
              <div className="flex ">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="max-w-lg flex-1 m-2"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  className="max-w-lg flex-1  ml-2"
                />
              </div>
              <Textarea
                name="mensaje"
                placeholder="Mensaje"
                className="max-w-lg w-full"
              />
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
