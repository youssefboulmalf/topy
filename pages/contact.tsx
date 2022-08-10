import Footer from "../components/footer";
import React from "react";
import Layout from "../layouts/Main";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Textarea } from "@mantine/core";
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
  return (
    <Layout>
      <section className="about-page">
        <div className="container">
          <h4 className="head">Contact topy tours</h4>
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
                  onClick={() =>
                    form.setValues({
                      name: "random",
                      email: `random@test.com`,
                    } as FormValues)
                  }
                  className='btn--rounded'
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
