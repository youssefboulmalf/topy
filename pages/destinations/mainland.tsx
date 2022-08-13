import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const mainland = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/mainland.jpg"}
          >
            <div className="head">
              <h2 className='bigText'>Mainland Coast</h2>
              <h2>
                Hidden secret, far from the crowds Pangani, the perfect place by
                the Indian Ocean if you’re looking for some peace and quiet. A
                paradise for deep-sea fishermen and snorkelers, due to its
                location at the mouth of the Pangani river.
              </h2>
            </div>
          </BackgroundImage>
          <span>
            Zanzibar often takes the limelight for its beautiful beach retreats
            on the Indian Ocean; however there are some real hidden gems on the
            mainland coast of Tanzania and also the adjacent islands of Pemba
            and Mafia. Zanzibar’s beautiful beaches really attract the crowds
            but the mainland coast offers a much quieter and more remote
            setting.
          </span>
          <p>
            The mainland Tanzanian coast has a few spots that are well worth
            visiting, the beaches south from Tanga offer soft white sands and
            some good dive and snorkel locations. A 15-minute flight south of
            Dar es Salaam is one of the best beach hideaways in Tanzania and one
            of our absolute top favourite properties, Ras Kutani. This is
            barefoot luxury at its very best, a beautiful spot to really relax
            and recharge.
            <br />
            <br />
            The islands of Pemba and Mafia just off the coast of Tanzania are
            less well-known than Zanzibar but offer some fantastic unspoilt
            reefs for diving and snorkelling – although their beaches are
            arguably not as good as Zanzibar’s. Much more remote and less
            visited than the experience you get from Zanzibar holidays, these
            are real tropical islands with thick undergrowth and great reefs and
            sand spits making these islands ideal for diving and snorkelling
            away from the crowds.
          </p>{" "}
          <h3>Avoiding Zanzibar – Which islands off Tanzania to visit</h3>{" "}
          <p>
            Beyond the main island of Zanzibar main island, Pemba Island is just
            a 30-minute flight north, and Mafia Island is 45 minutes south. Both
            primarily diving locations, their beaches do not compare to
            Zanzibar’s, but these are fine options for keen divers who wish to
            avoid the crowds and enjoy thriving coral reefs.
            <br />
            <br />
            One particular gem deserves a mention here: just 15 minutes south of
            Dar, Ras Kutani never fails to impress. With just 15 rooms including
            4 beautiful suites, Ras Kutani sits on a beautiful beach, with an
            idyllic beach-shack-chic vibe. Anywhere similar on Zanzibar would
            cost at least twice as much! This is a wonderful place to kick back
            and relax for a few days at the start or end of your Tanzania
            holiday, and is completely perfect for Tanzania honeymoons. Not
            ideal however for those who like to be on the go with activities
            from dawn till dusk…
            <br />
            <br />
            Also Fanjove is the new star – a private island for the cost of a
            normal Zanzibar lodge.
          </p>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default mainland;
