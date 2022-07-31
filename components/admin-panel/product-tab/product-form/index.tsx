import React from "react";
import {
  TextInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code,
} from "@mantine/core";
import { Products } from "types";
import { useForm } from "@mantine/form";
import { BsTrashFill } from "react-icons/bs";

type Prop = {
  item: Products;
};

const ProductForm = ({ item }: Prop) => {
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
      locations: item.locations
    },
  });

  const locationsFields = item.locations.map((location: any, index) => (
    <Group key={location.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getInputProps(`locations.${index}`)}
      />
      <Switch
        label="Active"
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

  const imagesFields = item.images.map((images: any, index) => (
    <Group key={images.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getInputProps(`images.${index}`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("images", index)}
      >
        <BsTrashFill size={16} />
      </ActionIcon>
    </Group>
  ));

  const descriptionFields = item.description.map((descriptions: any, index) => (
    <Group key={descriptions.key} mt="xs">
      <label>name</label>
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getInputProps(`description.${index}.name`)}
      />
            <label>text</label>
            <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getInputProps(`description.${index}.text`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("description", index)}
      >
        <BsTrashFill size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <>
      <div>
        <TextInput label="Id" placeholder="Id" {...form.getInputProps("id")} />
      </div>
      <div>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
      </div>
      <div>
        <TextInput
          label="Price"
          placeholder="Price"
          {...form.getInputProps("price")}
        />
      </div>
      <div>
        <TextInput
          label="Discount"
          placeholder="Discount"
          {...form.getInputProps("discount")}
        />
      </div>
      <div>
        <TextInput
          label="Category"
          placeholder="Category"
          {...form.getInputProps("category")}
        />
      </div>
      <div>
        <TextInput
          label="CurrentPrice"
          placeholder="CurrentPrice"
          {...form.getInputProps("currentPrice")}
        />
      </div>
      <div>
        <label>locations</label>
        {locationsFields}
        <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('locations', '')
          }
        >
          Add locations
        </Button>
      </Group>
      </div>
      <div>
        <label>images</label>
        {imagesFields}
        <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('images', 'somt')
          }
        >
          Add images
        </Button>
      </Group>
      </div>
      <div>
        <TextInput
          mt="md"
          label="Small description"
          placeholder="Small Description"
          {...form.getInputProps("smallDescription")}
        />
      </div>
      <div>
        <label>description</label>
        {descriptionFields}
        <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('description', { name: '', text: ''})
          }
        >
          Add description
        </Button>
      </Group>
      </div>
      <div>
        <TextInput
          mt="md"
          label="Duration"
          placeholder="Duration"
          {...form.getInputProps("duration")}
        />
      </div>
    </>
  );
};

export default ProductForm;
