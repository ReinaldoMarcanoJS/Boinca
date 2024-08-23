"use client";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { ActionResult } from "next/dist/server/app-render/types";

interface MyFormValues {
  names: string;
  company: string;
  email: string;
  numberphone: string;
  message: string;
}

const formSchema = Yup.object().shape({
  names: Yup.string()
    .min(2,)
    .max(30)
    .required(),
  company: Yup.string()
    .min(2,)
    .max(20)
    .required(),
  email: Yup.string().email().required(),
  numberphone: Yup.string()
    .min(11)
    .max(13)
    .required(),
  message: Yup.string()
    .min(2,)
    .max(200)
    .required(),
});

export default function Section6() {

  const initialValues: MyFormValues = {
    names: "",
    company: "",
    email: "",
    message: "",
    numberphone: "",
  };

  const handleSubmit = async (values: MyFormValues, actions: any) => {
      const response = await fetch("https://formspree.io/f/mldrnojo", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        message.open({
          type: "error",
          content: "Oh! algo ha salido mal",
        });
      }
      console.log("form complete");

      actions.resetForm();
      message.open({
        type: "success",
        content: "Correo electronico enviado ",
      });
  }

  return (
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
            Si tienes alguna pregunta o necesitas más información sobre nuestros
            servicios, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>
        <Formik
          validationSchema={formSchema}
          initialValues={initialValues}
          onSubmit={( values , actions) => handleSubmit(values,actions)}
        >
          {({ errors }) => (
            <Form className="flex flex-col gap-3 text-gray-900/80 font-medium text-base lg:text-lg">
              <div className="flex gap-3 w-full  ">
                <Field
                  className={
                    errors.names
                      ? "w-full flex-1 p-2 rounded-md border border-red-500"
                      : "w-full flex-1 p-2 rounded-md border"
                  }
                  id="names"
                  name="names"
                  placeholder="Nombres"
                />
                <Field
                  className={
                    errors.company
                      ? "w-full flex-1 p-2 rounded-md border border-red-500"
                      : "w-full flex-1 p-2 rounded-md border"
                  }
                  id="company"
                  name="company"
                  placeholder="Empresa"
                />
              </div>
              <div className="flex gap-3 w-full ">
                <Field
                  className={
                    errors.numberphone
                      ? "w-full flex-1 p-2 rounded-md border border-red-500"
                      : "w-full flex-1 p-2 rounded-md border"
                  }
                  id="numberphone"
                  name="numberphone"
                  placeholder="Telefono"
                />
                <Field
                  className={
                    errors.email
                      ? "w-full flex-1 p-2 rounded-md border border-red-500"
                      : "w-full flex-1 p-2 rounded-md border"
                  }
                  id="email"
                  name="email"
                  placeholder="Correo Electrónico"
                />
              </div>
              <Field
                className={
                  errors.message
                    ? "w-full rounded-md  p-2 h-[100px] border border-red-500"
                    : "w-full rounded-md  p-2 h-[100px]"
                }
                id="message"
                name="message"
                placeholder="Mensaje"
                as={"textarea"}
              />

              <Button type="submit">Enviar</Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
