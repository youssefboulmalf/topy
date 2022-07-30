import React from "react";
import { Form } from "react-final-form";
import FileField from "../file-field";

const ProductForm = () => {
  return (
    <Form onSubmit={(v) => console.log(v.file)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FileField name="file" props={undefined} />
          <button type="submit">submit</button>
        </form>
      )}
    </Form>
  );
};

export default ProductForm;
