import { message } from "antd";

export default async function FormApi(values: MyFormValues, actions: any) {
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
