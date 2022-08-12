import Footer from "../components/footer";
import React from "react";
import Layout from "../layouts/Main";
import { useForm } from "@mantine/form";
import { TextInput, Textarea } from "@mantine/core";
import { postData } from "../utils/services";
interface FormValues {
  name: string;
  email: string;
  text: string;
}
const ContactPage = () => {
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const sendMail = () => {
    const { name, email, text } = form.values;
    const mailData = {
      name: name,
      email: email,
      message: text,
      type: "contact",
    };
    postData("/api/sendMail",mailData).then(()=>console.log('send'));
  };
  return (
    <Layout>
      <section className="about-page">
        <div className="container">
          <h4 className="head">Contact Topy tours</h4>
          <div className="block">
            <div className="form-div">
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
              <TextInput
                mt="md"
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
              <Textarea
                placeholder="Your comment"
                label="Your comment"
                size="md"
                required
                minRows={5}
                maxRows={5}
                {...form.getInputProps("text")}
              />
              <button
                onClick={() => {
                  sendMail();
                }}
                className="btn--rounded"
              >
                Submit
              </button>
            </div>
            <div>
              <p>
                Need help?
                <br />
                <br />
                Address Centre Inn, Arusha
                <br />
                <br />
                Tanzania, East Africa.
                <br />
                <br />
                Phone: (255) 764-133-604 Email: info@topytours.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
