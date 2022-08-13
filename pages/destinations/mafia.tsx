import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const mafia = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/mafia.jpg"}
          >
            <div className="head">
              <h2 className='bigText'>Mafia Island</h2>
              <h2>
                Mafia's secluded sandbars, migrating whale sharks, nesting
                turtles and laid-back vibe make this island simply magic.
              </h2>
            </div>
          </BackgroundImage>
          <span>
            As an unspoiled, little-visited alternative to other Indian Ocean
            locations around Zanzibar and along the coast, Mafia and its
            surrounding archipelago including Jibondo, Juani and Chole have a
            great deal to offer. However, as with Pemba, Mafia has better diving
            than Zanzibar, but worse beaches.
            <br />
            <br />
            Just a 30-minute flight south of Zanzibar, Mafia is the one island
            off Tanzania’s coast that really encourages visitors to explore its
            offshore islands and sand bars. There are very few hotels here which
            only add to the attraction of Mafia as the beach destination for the
            adventurous traveler.
          </span>
          <p>
            The central main island is where most of Mafia’s accommodation
            options can be found, although the smaller islands are also fun to
            explore, with crumbling historical ruins now inhabited by a variety
            of different animals from monkeys to wild pigs, fruit bats and bush
            babies.
            <br />
            <br />
            Mafia is primarily known for its ocean glory, the Marine Park which
            was created to protect its reefs. The diving, fishing and snorkeling
            here are the best in the entire region, infinitely better than those
            to be found on Zanzibar (although note that the beaches on the main
            island are not nearly as good as Zanzibar’s). When Zanzibar holidays
            do not provide advanced diving, Mafia has plenty to challenge and
            reward the advanced diver – as well as numerous sheltered bays and
            coves that are great for novice to intermediate divers. Snorkeling
            is also magnificent.
            <br />
            <br />
            The atmosphere of all the islands is one of adventure: days are
            spent fishing or exploring exposed sand bars and untouched reefs.
            Perhaps best for those mad keen on making diving the central focus
            of their Tanzania holiday.
          </p>{" "}
          <h3>How to get to Mafia Island</h3>{" "}
          <p>
            It is not too difficult to get to Mafia Island – from Dar es Salaam
            it is a simple 30 minute flight off your international flight in Dar
            es Salaam… Not bad considering it is home to some of the best diving
            in the world!
          </p>{" "}
          <h3>Mafia Island – Where to stay</h3>{" "}
          <p>
            One of the oldest lodges on the island and one of the only ones with
            a swimming pool, laid-back Kinasi has good food and service,
            thoughtfully decorated (though perhaps a little dated) interiors,
            and one of the most experienced dive masters on the island. Its 15
            rooms are made from stone. Next door to Kinasi is Pole Pole (Swahili
            for ‘slowly, slowly’) – even more laid back than Kinasi, with lovely
            bungalows and a wonderful atmosphere. With only seven rooms, this is
            a great place to get away from crowds completely. Across the bay
            from Kinasi and Pole Pole, Chole Mjini is a small tree-house
            eco-lodge on Chole Island, with emphasis is on sustainability and
            eco-credentials. You have to be prepared for the long drop compost
            toilets here… but the character and unique charm of this lodge are
            undeniable. The final two lodges to mention are Mafia Island Lodge
            and Ras Mbisi, however, we would opt for any of the other three
            lodges where possible.
          </p>
          <h3>Other islands in the Mafia Archipelago</h3>{" "}
          <p>
            There are 2 dreamy islands – Thanda Island Lodge – which is only
            hired exclusively but without a doubt one of the best places in the
            whole of the Indian Ocean. For those without limitless cash then the
            flight from Dar to Mafia continues to Songa Songa (about 15 mins)
            which is the closest point to Fanjove island – again a paradisiacal
            island and doesn’t have to be hired exclusively
          </p>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default mafia;
