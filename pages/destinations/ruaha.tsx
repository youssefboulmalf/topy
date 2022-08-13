import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const ruaha = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/ruaha.jpg"}
          >
              <div className="head">
                <h2 className='bigText'>Ruaha National Park</h2>
                <h2>
                Ruaha is now Tanzania's largest national park and offers excellent wildlife viewing. It is particularly good for spotting predators, including very large prides of lion and the endangered wild dog. Elephants and a big variety of antelope species are another big draw to the park. It also has outstanding wilderness appeal, with limited exclusive, luxury camps available.
                </h2>
              </div>
          </BackgroundImage>
          <span>
          Located at the heart of Tanzania, Ruaha is the ‘other park’ on the Southern circuit.  Ruaha’s relative inaccessibility means it gets far fewer tourists than the Selous and less than any comparable park in the Northern circuit.  The rewards of travelling this far are a wild landscape with baobab studded hills and rocky escarpments, with superb wildlife; Ruaha safaris have reliably exciting predator concentrations, it is home to 10% of the world’s lion population, contains one of four cheetah populations in East Africa and has the third largest wild dog population in the world. This is accompanied by huge elephant and buffalo herds and a cross-over of game from southern and Eastern Africa. 

          </span>
          <p>
          Tanzania’s largest National Park, Ruaha is a wilder and more remote park than its southern neighbour Selous Game Reserve and ultimately has the better wildlife, albeit without boating safaris.  We love this park! Safaris here are some of the best you will find in the country and are superb value for money. It is a wild and authentic environment that remains relatively untouched.<br/><br/>

One of Tanzania’s best-kept (and more affordable) secrets, Ruaha is a particularly good complement and contrast to the Selous, although it would be a great addition to any Tanzania safari.  The lion viewing around the Mwagusi area is especially rewarding and general predator concentrations across the park are better than many of the other parks in the country.  Overall it is an absolutely excellent safari destination.
          </p>{" "}
          <h3>Where is Ruaha National Park in Tanzania?</h3>{" "}
          <p>
          Ruaha is a big and wild park to the West of the Selous Game Reserve, and South of The Serengeti. It is a really amazing destination with it’s unbelievable wildlife, but also it’s geographical location means it is a longer and more costly flight which keeps the volume of visitors low; all adding to it’s raw and uncommercial feel. There is a new flight connecting the Serengeti and Ruaha, but you can also get flights from Dar es Salaam and The Selous.
          </p>{" "}
          <h3>Ruaha National Park – The Game</h3>{" "}
          <p>
          Ruaha has all the predators on show, with very good lion, leopard and cheetah as well as wild dog and hyena. Buffalo and elephant herds are found throughout the park but it is the park’s crazy combinations of species from east and southern Africa that excites wildlife and birdwatching enthusiasts.  It is not uncommon to see sable antelope, Grant’s gazelle, greater kudu and lesser kudu in the same area as east Africa’s common species such as zebra, defassa waterbuck, impala and giraffe.  Put in the hours and travel across the park to find sable, roan, hartebeest and over 500 species of bird!
          </p>
          <h3>Ruaha Safari – The Activities</h3>{" "}
          <p>
          The main activity is a Ruaha Safari daytime game drive.  Night safaris are not permitted.  Due to the high numbers of elephant in Ruaha some camps have chosen not to operate walking safaris.  Those that do (Kwihala, Jongomero and Kigelia) have some superb guides and can offer amazing walking safaris.  Jongomero is the only camp to operate fly camping trips with adventurous nights spent out under the stars.
          </p>{" "}
          <h3>Ruaha Safari – When to go</h3>
          <p>
          Like the Selous, Ruaha is a classic dry season park.  Game gets progressively better towards the end of the dry season as the water holes and rivers dry up and the game concentrates around water.  Like the Selous, travelling to Ruaha out of season will virtually guarantee that you see no other people whilst on safari and there are pockets in the park where the game concentrations are good at any time of the year.  The birding from December through to March is exceptional.
          </p>
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default ruaha;
