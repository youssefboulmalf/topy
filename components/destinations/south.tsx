import React from "react";
import { Card, Image, Text, Button } from "@mantine/core";



const South = () =>{
    return (
        <div className="north">
        <div className="card-wrapper">
          <Card
            shadow="sm"
            p="lg"
            component="a"
            href="/destinations/ruaha"
            radius="md"  style={{height: '500px'}}
          >
            <Card.Section>
              <Image
                src={"/images/destinations/ruaha.jpg"}
                height={"200px"}
                alt="Norway"
              />
            </Card.Section>
            <Text size="xl" align="center" style={{ marginTop: "10px" }}>
              Ruaha
            </Text>
            <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Ruaha is now Tanzania's largest national park and offers excellent wildlife viewing. It is particularly good for spotting predators, including very large prides of lion and the endangered wild dog. It also has outstanding wilderness appeal, with limited exclusive, luxury camps available.
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
            href="/destinations/mahale"
            radius="md"  style={{height: '500px'}}
          >
            <Card.Section>
              <Image
                src={"/images/destinations/mahale.jpg"}
                height={"200px"}
                alt="Norway"
              />
            </Card.Section>
            <Text size="xl" align="center" style={{ marginTop: "10px" }}>
              Mahale mountains
            </Text>
            <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Remote, magical Mahale has steep, lush forests, lakeside beaches and Africa's best chimpanzee safaris.
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
            href="/destinations/selous"
            radius="md"  style={{height: '500px'}}
          >
            <Card.Section>
              <Image
                src={"/images/destinations/selous.jpg"}
                height={"200px"}
                alt="Norway"
              />
            </Card.Section>
            <Text size="xl" align="center" style={{ marginTop: "10px" }}>
              Selous game reserve
            </Text>
            <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Africa’s largest and oldest game reserve is one of its most scenic wildlife destinations; the Selous is utterly beautiful. The beauty of the park is matched by the quality of a safari here; boating, walking and fly camping compliment standard game driving in thriving wildlife areas.
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
            href="/destinations/katavi"
            radius="md"  style={{height: '500px'}}
          >
            <Card.Section>
              <Image
                src={"/images/destinations/katavi.jpg"}
                height={"200px"}
                alt="Norway"
              />
            </Card.Section>
            <Text size="xl" align="center" style={{ marginTop: "10px" }}>
              Katavi
            </Text>
            <Text size="sm" style={{ marginTop: "10px" }} color="dimmed">
            Katavi National Park is raw, remote and little known. The immense concentration of game, especially as the seasonal lakes disappear, will astound even hardened safari-goers.
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

export default South