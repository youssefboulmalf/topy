import React from "react";
import { Card, Image, Text, Button } from "@mantine/core";


const Beaches = () =>{
    return (
        <div className="north">
              <div className="card-wrapper">
                <Card
                  shadow="sm"
                  p="lg"
                  component="a"
                  href="/destinations/zanzibar"
                  radius="md"  style={{height: '500px'}}
                >
                  <Card.Section>
                    <Image
                      src={"/images/destinations/zanzibar.jpg"}
                      height={"200px"}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Text size="xl" align="center" style={{ marginTop: "10px" }}>
                    Zanzibar
                  </Text>
                  <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
                  Known as the Spice Island, the beautiful island of Zanzibar on Africa’s east coast is bursting with culture and history, seemingly at odds with its idyllic geography of white-sand beaches with palms swaying lazily in the sea breeze. Together this makes Zanzibar a fabulous place to explore as well as a dream to relax and unwind.
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
                  href="/destinations/pemba"
                  radius="md"  style={{height: '500px'}}
                >
                  <Card.Section>
                    <Image
                      src={"/images/destinations/pemba.jpg"}
                      height={"200px"}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Text size="xl" align="center" style={{ marginTop: "10px" }}>
                    pemba
                  </Text>
                  <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
                  Pemba Island is one of the lesser known islands of the Zanzibar Archipelago, but a popular honeymoon destination. This pristine green island is truly one of the most beautiful places on the planet. If you are looking for peace, rest and a romantic atmosphere, this is the place to be. A tranquil hideaway and one of the best dive sites in the world.
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
                  href="/destinations/mafia"
                  radius="md"  style={{height: '500px'}}
                >
                  <Card.Section>
                    <Image
                      src={"/images/destinations/mafia.jpg"}
                      height={"200px"}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Text size="xl" align="center" style={{ marginTop: "10px" }}>
                    Mafia
                  </Text>
                  <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
                  Mafia's secluded sandbars, migrating whale sharks, nesting turtles and laid-back vibe make this island simply magic.
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
                  href="/destinations/mainland"
                  radius="md"  style={{height: '500px'}}
                >
                  <Card.Section>
                    <Image
                      src={"/images/destinations/mainland.jpg"}
                      height={"200px"}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Text size="xl" align="center" style={{ marginTop: "10px" }}>
                    Mainland coast
                  </Text>
                  <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
                  Hidden secret, far from the crowds Pangani, the perfect place by the Indian Ocean if you’re looking for some peace and quiet. A paradise for deep-sea fishermen and snorkelers, due to its location at the mouth of the Pangani river.
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
    )
}

export default Beaches