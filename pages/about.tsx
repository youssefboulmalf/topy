import { Text } from "@mantine/core";
import Footer from "components/footer";
import React from "react";
import Layout from "../layouts/Main";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      <section className="about-page">
        <div className="container">
          <h4 className="head">About Topy tours</h4>
          <div className="block">
            <Image
              placeholder="blur"
              width={300}
              height={300}
              layout="fixed"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tsq2HgAGmQJO71KAngAAAABJRU5ErkJggg=="
              className="image"
              src={
                "https://media-cdn.tripadvisor.com/media/photo-w/24/c5/61/b3/topy-tours.jpg"
              }
            />
            <Text className="text">
              TOPY TOURS is a creative destination management and safari tour
              operator company in Tanzania. We are a comprehensive and forward
              thinking tour operator with a vision of creating everlasting
              memories.
              <br />
              <br />
              As a specialized, Exclusive travel company with tremendeous love
              and passion for Africa, we believe in our goal to create unrivaled
              itineraries that take our visitors closer to the unsurpassed
              natural beauty and extraordinary cultural diversity that Tanzania
              has to offer. <br />
              <br />
              We are also represented on <a href={'https://www.safaribookings.com/p4651'}>SafariBookings.com</a> <br /> <br /> Our
              emphasis is to furnish the electric traveller with memorable
              experiences of untamed natural beauty and wildlife – breathtaking
              moments of meeting the majestic mount Kilimanjaro, enchanted
              sunsets over the serengeti plains all the way through the unbroken
              caldera, the Ngorongoro crater. Meet the hospitable indigineous
              communities with their diverse cultures, traditions and smiles.
            </Text>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
