import React, { useState } from "react";
import {
  TextInput,
  Group,
  ActionIcon,
  Button,
  NumberInput,
  Textarea,
  Image,
} from "@mantine/core";
import { Products } from "types";
import { useForm } from "@mantine/form";
import { BsTrashFill, BsFillCloudUploadFill } from "react-icons/bs";
import { postData, postImages } from "utils/services";
import { closeAllModals } from "@mantine/modals";
import { FileInput } from "@mantine/core";

type Prop = {
  item: Products;
  index: number;
};

const ProductForm = ({ item, index }: Prop) => {
  const form = useForm({
    initialValues: {
      name: item.name,
      id: item.id,
      price: item.price,
      discount: item.discount,
      category: item.category,
      currentPrice: item.currentPrice,
      images: item.images,
      smallDescription: item.smallDescription,
      description: item.description,
      duration: item.duration,
      locations: item.locations,
    },
  });

  const [imgValue, setImgValue] = useState<File[]>([]);

  const onSubmit = (values: any) => {
    if (imgValue.length > 0) {
      let data = new FormData();

      data.append("id", `${values.id}`);

      imgValue.forEach(function (image) {
        data.append("file", image);
      });

      if (index == 9999) {
        postImages("/api/uploadImage/", data).then((r) => {
          r.json().then((data) => {
            postData("/api/createNewProduct", {
              values: values,
              imgPath: data.imageArray,
            });
          });
        });
        closeAllModals();
      } else {
        console.log("update");
        postImages("/api/uploadImage/", data).then((r) => {
          r.json().then((data) => {
            postData("/api/updateProduct", {
              values: values,
              imgPath: data.imageArray,
            });
          });
        });
        closeAllModals();
      }
    } else {
      if (index == 9999) {
        // postData("/api/createNewProduct", { values: values });
        // closeAllModals();
      } else {
        // console.log("update");
        // postData("/api/updateProduct", { values: values });
        // closeAllModals();
        console.log("no imagex  ");
      }
    }
  };

  const locationsFields = form.values.locations.map((_location: any, index) => (
    <Group key={`location${index}`} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getInputProps(`locations.${index}`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("locations", index)}
      >
        <BsTrashFill size={16} />
      </ActionIcon>
    </Group>
  ));

  const imagesFields = form.values.images.map((image: any, index) => (
    <Group key={`images${index}`} mt="xs">
      <Image src={image} width={"70px"} height={"70px"} />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("images", index)}
      >
        <BsTrashFill size={16} />
      </ActionIcon>
    </Group>
  ));

  const descriptionFields = form.values.description.map(
    (_descriptions: any, index) => (
      <Group key={`descriptions${index}`} mt="xs">
        <label>Day {index}</label>
        <TextInput
          placeholder="John Doe"
          required
          sx={{ width: "150px" }}
          {...form.getInputProps(`description.${index}.name`)}
        />
        <label>text</label>
        <Textarea
          autosize
          minRows={5}
          maxRows={5}
          size="md"
          required
          {...form.getInputProps(`description.${index}.text`)}
        />
        <ActionIcon
          color="red"
          onClick={() => form.removeListItem("description", index)}
        >
          <BsTrashFill size={16} />
        </ActionIcon>
      </Group>
    )
  );

  return (
    <>
      <div className="form-fields">
        <label>images</label>
        {imagesFields}
        <FileInput
          placeholder="Choose images"
          label="Product images"
          multiple
          value={imgValue}
          onChange={setImgValue}
          accept="image/png,image/jpeg"
          icon={<BsFillCloudUploadFill size={14} />}
        />
      </div>
      <form className="productForm" onSubmit={form.onSubmit(onSubmit)}>
        <div className="form-fields">
          <TextInput
            disabled={true}
            label="Id"
            placeholder="Id"
            {...form.getInputProps("id")}
          />
        </div>
        <div className="form-fields">
          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
        </div>
        <div className="form-fields">
          <NumberInput
            label="Price"
            placeholder="Price"
            {...form.getInputProps("price")}
          />
        </div>
        <div className="form-fields">
          <NumberInput
            label="Discount"
            placeholder="Discount"
            {...form.getInputProps("discount")}
          />
        </div>
        <div className="form-fields">
          <TextInput
            label="Category"
            placeholder="Category"
            {...form.getInputProps("category")}
          />
        </div>
        <div className="form-fields">
          <NumberInput
            label="CurrentPrice"
            placeholder="CurrentPrice"
            {...form.getInputProps("currentPrice")}
          />
        </div>
        <div className="form-fields">
          <label>locations</label>
          {locationsFields}
          <Group position="center" mt="md">
            <Button onClick={() => form.insertListItem("locations", "")}>
              Add locations
            </Button>
          </Group>
        </div>
        <div className="form-fields">
          <Textarea
            mt="md"
            autosize
            minRows={5}
            maxRows={5}
            label="Small description"
            placeholder="Small Description"
            {...form.getInputProps("smallDescription")}
          />
        </div>
        <div className="form-fields">
          <label>description</label>
          {descriptionFields}
          <Group position="center" mt="md">
            <Button
              onClick={() => {
                form.insertListItem("description", { name: "", text: "" });
              }}
            >
              Add description
            </Button>
          </Group>
        </div>
        <div className="form-fields">
          <NumberInput
            mt="md"
            label="Duration"
            placeholder="Duration"
            {...form.getInputProps("duration")}
          />
        </div>
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  );
};

export default ProductForm;
