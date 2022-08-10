
import { BackgroundImage, Center } from "@mantine/core";
import React from "react";
import Layout from "../../layouts/Main";

const mahale = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/mahale.jpg"}
          >
              <div className="head">
                <h1>Mahale Mountains</h1>
                <h2>
                Remote, magical Mahale has steep, lush forests, lakeside beaches and Africa's best chimpanzee safaris.
                </h2>
              </div>
          </BackgroundImage>
          <span>
          Located in the far west of the country on the shores of Lake Tanganyika and home to the best chimpanzee viewing in Africa, Mahale would stake its claim as one of the most exceptional and unique safari destinations on the continent. 
          </span>
          <p>
          When you have been in the industry for as long as we have, there are only a few places in Africa which we would consider in the running for the very best safaris on the continent.  These would include Schoeman’s Skeleton Coast Safaris, Serra Cafema, Chiawa and Old Mondoro in the Lower Zambezi, Mwaleshi and Kutandala in North Luangwa… and Greystoke Mahale, Tanzania.  This remote National Park also has one of the most beautiful camps anywhere in Africa, and offers a Tanzania safari experience to take your breath away.  Not just a chimpanzee destination, Mahale has an absurdly good beach with gin clear waters; and the park itself has fair claim to be one of the most interesting destinations in Africa.
          </p>{" "}
          <h3>Mahale Mountains National Park – The Wildlife</h3>{" "}
          <p>
          We have never had a client not see the chimps at Mahale.  Depending on the time of year that you travel however, trekking for the chimps can take between one hour and the majority of a strenuous day!  The later you go in the season the easier the viewing gets, as the chimps move down the mountains in search of food.  August to October is the best and easiest time of year to see them. Clearly though, chimps have minds of their own; any estimates for how long the walks take are just that.  What is certain is that you are only permitted one hour with the chimps when you find them.  Chimps are the main attraction, but there are plenty of other smaller primate species to see, birding is very good and the hippos and crocodiles are always close!  Leopard often come and visit but you are lucky to get a sighting.
          </p>{" "}
          <h3>Mahale Mountains – Chimpanzees </h3>{" "}
          <p>
          The main attraction of Mahale is chimpanzee trekking, but Mahale offers so much more as well.  It is a truly beautiful and incredibly remote location. Just being here and taking a stroll on the shoreline of Tanganyika is spectacular.  You can go kayaking, snorkelling or fish out on the lake, spend hours walking through the forest spotting other smaller primates and plenty of birds, or climb through narrow tracks to discover hidden waterfalls.
          </p>
          <h3>Mahale Mountains Tanzania – When to go</h3>{" "}
          <p>
          The best time to visit Mahale is the long dry season from July through to late October.  Chimpanzees can be viewed at other times of the year also, however it may just require a little bit more walking. In the dry season, it is definitely worth combining Greystoke Mahale with Katavi. This is another fantastic National Park located in Western Tanzania that has huge herds of elephants and buffalo which eclipse those seen in Ruaha. The lure of visiting Western Tanzania is the remoteness it can offer and such an isolated African safari is hard to come across anywhere on the continent. Unlike the Selous, the Ngorongoro Crater or the Serengeti, access into Mahale is not as frequent and flights from Arusha and Ruaha to Mahale do not leave every day.
          </p>{" "}
          <h3>Mahale Mountains accommodation</h3>
          <p>
          By the time you’ve spent the considerable time and money it takes to get to Mahale, you might as well stay at the very best –  Nomad’s Greystoke Mahale is world famous for both its location and the barefoot luxury it offers.  The other option which we occasionally sell is the Nkungwe Lodge, just a little further up the coast.  Nkungwe is a more affordable option, and while it lacks the wow factor of Greystoke, it has certainly improved over the last few years.  This is a good second choice if Greystoke is a bit too much of a stretch.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default mahale;
