import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const selous = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/selous.jpg"}
          >
            <div className="head">
              <h1>Selous Game Reserve</h1>
              <h2>
                Africa’s largest and oldest game reserve is one of its most
                scenic wildlife destinations; the Selous is utterly beautiful.
                The beauty of the park is matched by the quality of a safari
                here; boating, walking and fly camping compliment standard game
                driving in thriving wildlife areas.
              </h2>
            </div>
          </BackgroundImage>
          <span>
            Located in southern Tanzania and far from the madding crowds, the
            Selous Game Reserve is Africa’s largest game reserve and one of our
            favourite wildlife viewing areas. This really is a hidden gem! The
            rivers and lakes of the Selous are the lifeblood of a park that
            hosts some fabulous game, including elephant, wild dog, buffalo,
            hippo, crocodile and fantastic prides of lion.
          </span>
          <p>
            As you may have gathered, we are huge fans of Selous safaris. The
            reality is that this park is so vast it is impossible to count its
            game and that is exactly what we love about it; Selous is untouched
            African wilderness and yet still easily accessible from Dar and
            Zanzibar.
            <br />
            <br /> Not only a wonderful place for the seasoned safari
            enthusiast, the Selous also offers an amazing introduction to
            unspoilt Africa. Home to some of Africa’s best walking, boat safaris
            and fly camping trips, the Selous has the greatest diversity of
            safari activities of all the Tanzanian safari parks. The boating
            safaris in particular really set this reserve apart from other
            Tanzanian parks. The fact that the Selous is so much quieter (in
            visitor terms) than the majority of the rest of the country just
            adds to its attraction.
          </p>{" "}
          <h3>Selous Game Reserve Accommodation</h3>{" "}
          <p>
            The Selous is home to three of the finest camps in Tanzania, a
            couple of which would stake their claim as the best in all of
            Africa. Beho Beho and Sand Rivers are exceptional lodges that offer
            all the activities for which the Selous is famous, and host some
            excellent guiding teams. Siwandu (formerly Selous Safari Camp) is a
            fabulous tented camp in arguably the best game area of the park at a
            price that makes it one of the best value camps in Africa. Close by
            to Siwandu is the no-frills Lake Manze, a great little adventurous
            camp which has a reputation for being on an elephant highway. A
            little further away, Manze’s sister camp Impala offers a higher
            level of luxury at a still-affordable price. Other camps in the park
            include Rufiji River Camp, Speak to us for more information.
          </p>{" "}
          <h3>Selous Game Reserve Safari Prices</h3>{" "}
          <p>
            The cost of a Selous Safari can vary from camp to camp. Generally
            prices start from $400 per person per night and go all the way up to
            $1,500 per person per night. The best thing top do though is to call
            us up, let us know your budget and we can see what deals we can get
            you, and find a camp which perfectly suits your style and budget.
          </p>
          <h3>Selous Game Reserve – The Wildlife</h3>{" "}
          <p>
            The wildlife in the Selous is particularly interesting as it
            attracts both east and southern African wildlife, both resident and
            migratory, and over 440 known species of birds, which make it a ket
            destination on a Southern Tanzania safari. Lion are particularly
            strong here and there are large numbers of leopard. The park is home
            to over 50% of the remaining endangered African wild dog, and also
            hosts very good populations of buffalo, giraffe, eland, hyena,
            sable, hippo, crocodile, kudu, baboon, wildebeest, zebra, impala,
            hartebeest, colobus and vervet monkeys along with over 450 species
            of bird.
          </p>{" "}
          <h3>Selous Safari Tours – The Activities</h3>
          <p>
            Standard daytime game drives are just the beginning. The Selous also
            offers some of the finest boating safaris in Africa, along with some
            of the very best walking operations on the continent, including in
            particular at Siwandu, Beho Beho and Sand Rivers Selous. There are
            also a number of operators here who run fly camping trips,
            comprising lengthy walking safaris and mobile camping under the
            stars – very adventurous and a romantic idea for a Tanzania
            Honeymoon but not for the faint-hearted!
          </p>
          <h3>Selous Game Reserve – When to go</h3>
          <p>
            Selous is a classic dry season park, with the game getting
            progressively better the later in the season you travel. July to
            October is the best time of year for the greatest overall
            concentrations of game, but do not underestimate this park at any
            other time; game viewing is very good in various areas throughout
            the year. During January and February you do need to choose your
            camp very carefully as the game migrates away to more fertile
            feeding grounds. Birding at this time of year is absolutely world
            class.{" "}
          </p>
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default selous;
