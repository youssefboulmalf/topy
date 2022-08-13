import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const pemba = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/pemba.jpg"}
          >
              <div className="head">
                <h2 className='bigText'>Pemba Island</h2>
                <h2>
                Pemba Island is one of the lesser known islands of the Zanzibar Archipelago, but a popular honeymoon destination. This pristine green island is truly one of the most beautiful places on the planet. If you are looking for peace, rest and a romantic atmosphere, this is the place to be. A tranquil hideaway and one of the best dive sites in the world.
                </h2>
              </div>
          </BackgroundImage>
          <span>
          Still classed as part of the Zanzibar Archipelago, 40km north of the main island of Zanzibar (Unguja), Pemba Island is slightly smaller and much more rural than the more popular Zanzibar holidays on the main island.  While Zanzibar is relatively flat, Pemba’s hills and escarpments are green and picturesque; coloured by the rich greens of ten types of mangoes and many hundreds of clove trees that have traditionally supported the fortunes of this island of spice.
          </span>
          <p>
          Although Pemba is surrounded by a fine coral reef and pristine seas, its shores are also flanked with dense mangrove forests, and the best beaches take a bit of hunting out and getting to. Generally, however, the beaches here are nowhere near as good as Zanzibar’s.  Pemba has remained virtually unknown to the hordes of beach-bound tourists, with just a couple of luxury lodges, and the island is mainly visited by those who come to dive and snorkel its coral reefs and channels.<br/><br/>

The office here has always been slightly split about what we really think of Pemba. Yes Pemba’s off-shore islands have great beaches, and the diving and snorkeling are unquestionably superb, but Pemba’s beaches are poor in comparison to Zanzibar’s –  so are the lodges really worth the money here when you don’t have a good beach on your doorstep?  On balance our opinion is – only if you want to make your Tanzania safari holiday an underwater one. Otherwise, no!
          </p>{" "}
          <h3>Flights to Pemba Island</h3>{" "}
          <p>
          It could not be easier. There are two flights a day to Pemba from Zanzibar (both 30 minutes) – one at 8am and another at 3pm. Pemba being just off the shores to the North of Zanzibar makes it very accessible (only an hour from Dar es Salaam) and easy to spend a few nights on. It is worth spending a night or two in Stone Town on Zanzibar and experiencing the mixture of Arab, African and European culture before hopping over to Pemba.
          </p>{" "}
          <h3>Pemba Island – Activities</h3>{" "}
          <p>
          Pemba Island is one of the top diving and snorkelling locations off the coast of Tanzania with the entire island surrounded by coral reef, which act as world class dive sites, the marine life you could discover is phenomenal. Between the island and mainland Tanzania the Pemba Channel shelves off to depths of more than 2,000m, and Pemba is famous for seriously large sea fish, which include barracuda, tuna, shark, and even whales.  This is a glorious African playground for experienced divers. This is a glorious playground for experienced divers.  Visibility is generally very good and there are some spectacular pinnacles. Currents are strong at Pemba so it’s not ideal for first time divers. If you don’t fancy spending all your time underwater, sunset cruises aboard dhow boats are available and are extremely popular.
          </p>
          <h3>Pemba Island – When to go</h3>{" "}
          <p>
          Pemba is best visited during the dry season from July through to late October.  This makes is perfect to add onto the end of an East Africa safari. There are a few showers in November time but generally Pemba is still great all the way through until March.  April and May should be avoided as it is the heavy rains and the lodges actually close during this period.
          </p>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default pemba;
