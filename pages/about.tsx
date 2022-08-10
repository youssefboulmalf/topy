import { Image, Text } from "@mantine/core";
import Footer from "components/footer";
import React from "react";
import Layout from "../layouts/Main";


const AboutPage = () => {
  return (
    <Layout>
    <section className="about-page">
      <div className="container">
        <h4 className="head">About topy tours</h4>
        <div className="block">
            <Image className="image" src={'https://media-cdn.tripadvisor.com/media/photo-w/24/c5/61/b3/topy-tours.jpg'}/>
        <Text className="text">
          TOPY TOURS is a creative destination management and safari tour
          operator company in Tanzania. We are a comprehensive and forward
          thinking tour operator with a vision of creating everlasting memories.<br/>
          <br/>
          As a specialized, Exclusive travel company with tremendeous love and
          passion for Africa, we believe in our goal to create unrivaled
          itineraries that take our visitors closer to the unsurpassed natural
          beauty and extraordinary cultural diversity that Tanzania has to
          offer. <br/><br/>
        We are also represented on SafariBookings.com. <br/> <br/> Our emphasis is
          to furnish the electric traveller with memorable experiences of
          untamed natural beauty and wildlife – breathtaking moments of meeting
          the majestic mount Kilimanjaro, enchanted sunsets over the serengeti
          plains all the way through the unbroken caldera, the Ngorongoro
          crater. Meet the hospitable indigineous communities with their diverse
          cultures, traditions and smiles.
        </Text>
        </div>
      </div>
      </section>
      <Footer/>
    </Layout>
  );
};

export default AboutPage;
