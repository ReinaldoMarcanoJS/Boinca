"use client";

import { Button } from "@/components/ui/button";
import FormApi from "@/pages/api";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



const formSchema = Yup.object().shape({
  names: Yup.string().min(2).max(30).required(),
  company: Yup.string().min(2).max(20).required(),
  email: Yup.string().email().required(),
  numberphone: Yup.string().min(11).max(13).required(),
  message: Yup.string().min(2).max(200).required(),
});




export default function FormContact() {
  const initialValues: MyFormValues = {
    names: "",
    company: "",
    email: "",
    message: "",
    numberphone: "",
  };

 
  return (
    <Formik
      validationSchema={formSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => FormApi(values, actions)}
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
  );
}
