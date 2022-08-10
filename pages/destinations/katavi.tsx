import { BackgroundImage, Center } from "@mantine/core";
import React from "react";
import Layout from "../../layouts/Main";

const katavi = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/katavi.jpg"}
          >
            <div className="head">
              <h1>Katavi National Park</h1>
              <h2>
              Katavi National Park is raw, remote and little known. The immense concentration of game, especially as the seasonal lakes disappear, will astound even hardened safari-goers.
              </h2>
            </div>
          </BackgroundImage>
          <span>
          Located in the far west of the Tanzania, Katavi is a park for the safari enthusiast.  Often combined with nearby Mahale, Katavi receives very few travellers due to its relative inaccessibility and consequent high cost of flights.  Travellers who spend the time and money to get here, however, are richly rewarded – Katavi is nothing short of magical.
          </span>
          <p>
          This park is truly wild with few camps and very few visitors.  Katavi is one of the few places left in Africa today where you genuinely feel that you could have slipped back a thousand years.  Many safari connoisseurs would argue that this is the quintessential Tanzania safari park; we certainly believe it to be the country’s best kept secret.  Combine this park with Mahale, specifically at Nomad Tanzania’s Greystoke, and there is a good argument that this is the finest week to be had in Africa!<br/><br/>
The volume of game in Katavi is outstanding, with some researchers believing that the concentrations are even higher than in Ngorongoro. Huge herds of buffalo and vast lion prides duel daily, whilst hippos and crocodiles gather in pods and nests not found anywhere else in Africa.     The cost of getting here is undeniably high, however this has protected the park from the crowds that have affected other areas and once you get here, lodge prices are reasonable and the majority of the camps of a very high standard.   
          </p>{" "}
          <h3>Katavi – The Wildlife</h3>{" "}
          <p>
          We can’t think of anywhere else that showcases buffalo and lion duels quite so well as Katavi; game drives here can be seriously explosive! Katavi is equally famous for its enormous crocodile and hippo populations – the huge hippo pool can see 600 hippo at its peak and nowhere else in Africa do crocodiles hibernate in dens as they do here.  The wildlife in Katavi hasn’t read the species behavioural rule book!   Sizeable elephant herds and good numbers of zebra, giraffe, topi, leopard, waterbuck, hyena and very occasionally wild dog make this a park to compete with the finest safari experiences in the world.
          </p>{" "}
          <h3>Katavi – The Activities</h3>{" "}
          <p>
          The main activity in Katavi is daytime game driving; night safari is not permitted.  Some of the camps offer walking safaris and Nomad Tanzania’s Chada Camp operates exceptional short fly camping trips with nights spent out under the stars.
          </p>
          <h3>Katavi – When to go</h3>{" "}
          <p>
          Like the Selous Game Reserve and Ruaha National Park, Katavi is a classic dry season park with the game viewing getting progressively better towards the end of the year. As the water holes and rivers dry up, game moves down from the surrounding hills and congregates around the remaining river system – now the viewing gets seriously good.   July to October is absolutely peak season for Katavi but more and more travellers are trying Katavi out of season, if only to have the park completely to themselves!
          </p>{" "}
          <h3>Katavi – Where to stay</h3>
          <p>
          Nomad Tanzania’s Chada is the most famous, and our favourite, camp in the park.  With only six classic safari tents, it epitomises the essence of a remote safari camp, and the guiding and overall standards are what we have come to expect from a company as good as Nomad. Foxes Katavi Wildlife Camp has probably the best location in the park; although larger and not quite as well-tuned as Nomad, it has come up in recent years, and is a more economical option than Chada.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default katavi;
