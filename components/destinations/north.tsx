import React from "react";
import { Card, Image, Text, Button } from "@mantine/core";

const North = () => {
  return (
    <div className="north">
      <div className="card-wrapper">
        <Card
          shadow="sm"
          p="lg"
          component='a'
          href="/destinations/serengeti"
          radius="md"
          style={{ height: "500px" }}
        >
          <Card.Section>
            <Image
              src={"/images/destinations/serengeti.jpg"}
              height={"200px"}
              alt="Norway"
            />
          </Card.Section>
          <Text size="xl" align="center" style={{ marginTop: "10px" }}>
            Serengeti
          </Text>
          <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            At 14,763 square kilometres in size, the Serengeti is arguably the
            finest national park in Africa and offers a wealth of wildlife
            viewing opportunities. Pretty much every large animal in East Africa
            can be regularly seen in the national park or wider ecosystem.
          </Text>
          <Button
            variant="light"
            className="card-button"
            fullWidth
            mt="xs"
            radius="md"
          >
            Read more
          </Button>
        </Card>
      </div>
      <div className="card-wrapper">
        <Card
          shadow="sm"
          p="lg"
          component="a"
          href="/destinations/ngorongoro"
          radius="md"
          style={{ height: "500px" }}
        >
          <Card.Section>
            <Image
              src={"/images/destinations/ngorongoro.jpg"}
              height={"200px"}
              alt="Norway"
            />
          </Card.Section>
          <Text size="xl" align="center" style={{ marginTop: "10px" }}>
            Ngorongoro
          </Text>
          <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            At Ngorongoro everything bubbles closer, tighter, and louder. Peer
            inside this primordial caldera and what you see is a petri dish
            density of wildlife, more predator-prey interactions per capita than
            almost anywhere on the planet.
          </Text>
          <Button
            variant="light"
            className="card-button"
            fullWidth
            mt="md"
            radius="md"
          >
            Read more
          </Button>
        </Card>
      </div>
      <div className="card-wrapper">
        <Card
          shadow="sm"
          p="lg"
          component="a"
          href="/destinations/manyara"
          radius="md"
          style={{ height: "500px" }}
        >
          <Card.Section>
            <Image
              src={"/images/destinations/manyara.jpg"}
              height={"200px"}
              alt="Norway"
            />
          </Card.Section>
          <Text size="xl" align="center" style={{ marginTop: "10px" }}>
            Lake Manyara
          </Text>
          <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Lake Manyara National Park is worth a stop in its own right. Its
            ground water forests, bush plains, baobab strewn cliffs, and
            algae-streaked hot springs offer incredible ecological variety in a
            small area, rich in wildlife and incredible numbers of birds.
          </Text>
          <Button
            variant="light"
            className="card-button"
            fullWidth
            mt="md"
            radius="md"
          >
            Read more
          </Button>
        </Card>
      </div>
      <div className="card-wrapper">
        <Card
          shadow="sm"
          p="lg"
          component="a"
          href="/destinations/tarangire"
          radius="md"
          style={{ height: "500px" }}
        >
          <Card.Section>
            <Image
              src={"/images/destinations/tarangire.jpg"}
              height={"200px"}
              alt="Norway"
            />
          </Card.Section>
          <Text size="xl" align="center" style={{ marginTop: "10px" }}>
            Tarangire
          </Text>
          <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Tarangire National Park has some of the highest population density
            of elephants as compared to anywhere in Tanzania, and its sparse
            vegetation, strewn with baobab and acacia trees, makes it a
            beautiful and distinctive location to visit.
          </Text>
          <Button
            variant="light"
            className="card-button"
            fullWidth
            mt="md"
            radius="md"
          >
            Read more
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default North;
