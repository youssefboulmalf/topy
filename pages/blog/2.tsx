import { BackgroundImage } from "@mantine/core";
import React from "react";
import Footer from "../../components/footer";
import ProductsFeatured from "../../components/products-featured";
import Layout from "../../layouts/Main";

const blog = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage className="banner" src={"/images/blogs/entiquette.jpg"}>
            <div className="head">
              <h2 className='bigText'>On Safari Vehicle Etiquette</h2>
              <h2>
              Most of your time on safari will be spent in the back of a safari vehicle which you will likely share with a number of other keen ‘safari goers’. So, it is worth keeping a few basic rules of vehicle etiquette on safari in mind.
              </h2>
            </div>
          </BackgroundImage>
          <span>
          Most of your time on safari will be spent in the back of a safari vehicle which you will likely share with a number of other keen ‘safari-goers’. So, it is worth keeping a few basic rules of vehicle etiquette on safari in mind:
          </span>
          <h3>1. Be ready on time</h3>
          <p>
          Following proper vehicle etiquette on safari is important. So, always try to be ready to board your vehicle at the agreed time, having been to the toilet and with everything you will need for the day (cameras, binoculars, sunblock etc).
          </p>{" "}
          <h3>2. Be considerate (and courteous)</h3>{" "}
          <p>
          Be prepared to indulge the interests of others in your group.  They will hopefully do likewise for you. And don’t always rush for the ‘best’ seat. Be considerate of others. Remember to practice good vehicle etiquette on safari.
          </p>{" "}
          <h3>3. Talk in moderation</h3>{" "}
          <p>
          Try to avoid talking incessantly during game drives, as this can be very disruptive to the other guests and even off-putting for the guide!
          </p>
          <h3>4. No sudden movements</h3>{" "}
          <p>
          Avoid standing up or making any sudden movements when close to animals. This will likely startle them and they will either run off or take offence! You should also be careful not to ‘rock’ the vehicle (shuffling in your seat or unnecessary movements) when the other occupants are attempting to get that perfect photograph.
          </p>{" "}
          <h3>5. Be patient</h3>{" "}
          <p>
          There is no script on safari and it may be that you need to wait by a waterhole or stop to scan the horizon to find something of interest. Be patient (and vigilant) – the next great sighting is likely just around the corner.
          </p>{" "}
          <h3>6. Do not hog the guide</h3>{" "}
          <p>
          By all means take the opportunity to learn from your guide by asking questions…but be careful not to hog his/her attention at the expense of the other guests.
          </p>{" "}
          <h3>7. Be prepared</h3>{" "}
          <p>
          Do try to be self-sufficient in terms of binoculars, storage cards, warm clothing, sunblock, bottled water etc.
          </p>{" "}
          <h3>8. Talk quietly (rather than whisper)</h3>{" "}
          <p>
          This is important not only so that the other participants can enjoy the outdoor experience, but also so as not to disturb the wildlife. Do not whistle or bang on the vehicle to attract an animal’s attention. This is very poor form!
          </p>{" "}
          <h3>9. Advice for smokers</h3>{" "}
          <p>
          Don’t automatically assume that because you are in the great outdoors that your smoking habit will not bother the other passengers. Try to be considerate and request a ‘smoke’ break/stop – perhaps while the others are taking their ‘comfort’ break. And please DO NOT leave your cigarette ends stomped into the dirt. Put them in your pocket and dispose of them when you get back to camp.
          </p>{" "}
          <h3>10. Advice for families</h3>{" "}
          <p>
          If you are a family with small children, be aware that others in the vehicle may not think that little Johnny’s antics are very conducive to an enjoyable safari! Where possible, it is always advisable to arrange, or at least request, the sole use of a safari vehicle if you have a family with young children.
          </p>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default blog;
