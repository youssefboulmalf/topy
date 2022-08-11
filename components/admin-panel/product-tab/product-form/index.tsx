import React, { useState } from "react";
import {
  TextInput,
  Group,
  ActionIcon,
  Button,
  NumberInput,
  Textarea,
  Select,
  MultiSelect,
  LoadingOverlay,
} from "@mantine/core";
import { Products } from "types";
import { useForm } from "@mantine/form";
import { BsTrashFill, BsFillCloudUploadFill } from "react-icons/bs";
import { postData, postImages } from "utils/services";
import { closeAllModals } from "@mantine/modals";
import { FileInput } from "@mantine/core";
import Locations from "../../../../utils/data/products-locations";
import productsCategories from "utils/data/products-types";
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
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: any) => {
    setLoading(true);
    const currentPrice =
      form.values.price - (form.values.price / 100) * form.values.discount;

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
              currentPrice: currentPrice,
              imgPath: data.imageArray,
            });
          });
        });
      } else {
        postImages("/api/uploadImage/", data).then((r) => {
          r.json().then((data) => {
            postData("/api/updateProduct", {
              values: values,
              currentPrice: currentPrice,
              imgPath: data.imageArray,
            });
          });
        });
      }
    } else {
      if (index == 9999) {
        postData("/api/createNewProduct", {
          values: values,
          currentPrice: currentPrice,
        });
      } else {
        postData("/api/updateProduct", {
          values: values,
          currentPrice: currentPrice,
        });
      }
    }
    setLoading(false);
    closeAllModals();
    // location.reload()
  };

  const onDelete = (image: string, index: number) => {
    const imageArray = form.getInputProps("images");
    setLoading(true);
    postData("/api/deleteImage", {
      url: image,
      imageArray: imageArray,
      index: index,
    }).then((r) => {
      r.json().then((newImageArray) => {
        console.log(newImageArray);
        // form.setFieldValue("images", newImageArray);
      });
      setLoading(false);
    });
  };

  const imagesFields =
    form.values.images && form.values.images.length > 0
      ? form.values.images.map((image: any, index) => (
          <Group key={`images${index}`} mt="xs">
            <img
              src={image}
              referrerPolicy="no-referrer"
              style={{ width: "70px", height: "70px" }}
            />
            <ActionIcon color="red" onClick={() => onDelete(image, index)}>
              <BsTrashFill size={16} />
            </ActionIcon>
          </Group>
        ))
      : null;

  console.log(form.values.images);

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
    <div className="product-form-root">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <label>images</label>
      <div className="image-fields">{imagesFields}</div>
      <FileInput
        placeholder="Choose images"
        label="Product images"
        multiple
        value={imgValue}
        onChange={setImgValue}
        accept="image/png,image/jpeg"
        icon={<BsFillCloudUploadFill size={14} />}
      />
      <form onSubmit={form.onSubmit(onSubmit)} className="productForm">
        <section>
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
              required
              placeholder="Name"
              {...form.getInputProps("name")}
            />
          </div>
          <div className="form-fields">
            <NumberInput
              label="Price"
              required
              placeholder="Price"
              {...form.getInputProps("price")}
            />
          </div>
          <div className="form-fields">
            <NumberInput
              label="Discount"
              placeholder="Discount"
              required
              {...form.getInputProps("discount")}
            />
          </div>
        </section>
        <section>
          <div className="form-fields">
            <label>locations</label>
            <Select
              data={productsCategories}
              style={{ maxWidth: "240px" }}
              label="Pick the category"
              searchable
              clearable
              required
              {...form.getInputProps("category")}
            />
          </div>
          <div className="form-fields">
            <NumberInput
              label="CurrentPrice"
              placeholder="CurrentPrice"
              required
              disabled
              value={
                form.values.price -
                (form.values.price / 100) * form.values.discount
              }
            />
          </div>
          <div className="form-fields">
            <label>locations</label>
            <MultiSelect
              data={Locations}
              style={{ maxWidth: "240px" }}
              label="Pick the locations"
              searchable
              clearable
              required
              {...form.getInputProps("locations")}
            />
          </div>
          <div className="form-fields">
            <Textarea
              mt="md"
              autosize
              minRows={5}
              maxRows={5}
              required={true}
              label="Small description"
              placeholder="Small Description"
              {...form.getInputProps("smallDescription")}
            />
          </div>
        </section>
        <section>
          <div className="form-fields">
            <label>description</label>
            <div style={{ maxHeight: "50vh", overflowY: "scroll" }}>
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
          </div>
          <div className="form-fields">
            <NumberInput
              mt="md"
              label="Duration"
              required={true}
              placeholder="Duration"
              {...form.getInputProps("duration")}
            />
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </section>
      </form>
    </div>
  );
};

export default ProductForm;
