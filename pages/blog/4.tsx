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
          <BackgroundImage className="banner" src={"/images/blogs/safari.jpg"}>
            <div className="head">
              <h1>10 Safari Do’s and Don’ts</h1>
              <h2>
                Embarking on your first safari can be thrilling and yet
                overwhelming at the same time. No need to worry, we have put
                together some guidelines on what to do and not to do for you
                here:
              </h2>
            </div>
          </BackgroundImage>
          <span>
            Both vehicles are full of travelers like you, and both are out for
            their morning game drive. But there’s one major difference between
            them.
            <br />
            <br />
            You see the vehicle in front? That one is full of people who exude
            proper safari etiquette. They are responsible wildlife lovers whose
            actions represent a favorable approach to safari. The second Land
            Cruiser? Well, that one is full of folks whose behaviors prove less
            appropriate for safari.
            <br />
            <br />
            Look: the road forks ahead and each vehicle chooses a road. Let’s
            follow them separately to better understand what to do and what not
            to do on safari, shall we?
          </span>
          <h3>Do's</h3>
          <p>
            1. DO Be Courteous of Volume
            <br />
            <br />
            A man in the backseat asks the driver: “Are acacia trees negatively
            affected when giraffes graze their upper canopy?” (Answer: acacias
            actually depend on large grazing herbivores – View Source). He
            doesn’t yell or take up all the driver’s attention. Instead, he lets
            others have the opportunity to ask questions. Being patient and
            punctual is important on safari, as time and space is both shared
            and limited.
            <br />
            <br />
            <br />
            <br />
            2. DO Wear Natural Colors
            <br />
            <br />
            Approaching the first vehicle we notice that everyone is wearing
            natural colored clothing—khaki, olive, brown. Wild animals can
            respond adversely to bright colors like reds and blacks, while bugs
            love blue. Also, having a scarf or jacket nearby is highly
            recommended, as all-day game drives can run the gamut of weather.
            <br />
            <br />
            <br />
            <br />
            3. DO Learn Swahili Greetings
            <br />
            <br />
            A woman in the Land Cruiser spots movement in the bush, and she
            politely asks the driver to slow down, thanking him in Swahili,
            “Asanti sana.” Tanzanians appreciate when you try their language
            out. A little bit goes a long way. Here are some essential phrases
            to try.
            <br />
            <br />
            <br />
            <br />
            4. DO Pack Light
            <br />
            <br />
            As the first vehicle stops to watch four cheetahs perch on a rock
            outcropping, peer in the back of the vehicle. Note that everyone’s
            luggage is compact and durable. Packing only the essentials for your
            safari, in durable bags, helps getting in and out of the vehicle,
            while making room for others.
            <br />
            <br />
            <br />
            <br />
            5. DO Tip your Guides
            <br />
            <br />
            In each bag, you’ll find some US dollars, meant to tip each guide
            after the safari is over. This is an industry-wide expectation. Easy
            Travel’s professional drivers will be with you nonstop throughout
            the journey, answering questions, giving cultural context, and
            providing one of the most memorable trips of your life. So tips are
            encouraged.
          </p>{" "}
          <h3>Dont's</h3>{" "}
          <p>
            Now that we’ve seen what some good safari etiquette looks like,
            let’s check in on the second Land Cruiser and see what we might
            avoid while searching for that pride of lions.
            <br />
            <br />
            <br />
            <br />
            6. DON’T Get Out of the Vehicle
            <br />
            <br />
            As we pull up, someone is outside the second Land Cruiser, taking
            photos of an elephant in the distance. This is major safety concern
            and is not advisable until your experienced driver can find a safe
            place to do so. Easy Travel guides have decades of experience and
            will ensure that each passenger is safe and secure at all times.
            <br />
            <br />
            <br />
            <br />
            7. DON’T Be Obnoxious
            <br />
            <br />
            Inside the second vehicle, everyone talks loudly over each other. Be
            aware of others in your safari group. Make sure that your voice is
            considerate and not overbearing for you or the wildlife. (Note: many
            animals are extremely sensitive to sound. Did you know that
            elephants can hear storms from as far as 150 miles away? They can
            even hear through their feet!
            <br />
            <br />
            <br />
            <br />
            8. DON’T Be on your iPhone
            <br />
            <br />
            A young man sits in the front of the vehicle and flips through text
            messages, just as a Bateleur eagle flies overhead with its six-foot
            wingspan. Missed opportunity! Each safari offers but three to four
            days of game drives, and, believe me: they will go fast. So turn off
            your devices and turn on your focus towards wildlife.
            <br />
            <br />
            <br />
            <br />
            9. DON’T Stop for Everything that Moves
            <br />
            <br />
            This Land Cruiser starts and stops every mile because each traveler
            asks the driver to stop whenever they see a gazelle. Gazelles,
            though majestic, are everywhere, and your driver wants to show you
            all of what Tanzania has to offer.
            <br />
            <br />
            Easy Travel guides know all the nooks and crannies of Tanzania and
            they are excited to show you them off. And this takes time.
            <br />
            <br />
            <br />
            <br />
            10. DON’T Choose Inexperienced Safari Operators
            <br />
            <br />
            Be sure and choose a safari provider that knows what they’re doing.
            Locally-owned and operated, with state-of-the-art, customized Land
            Cruisers and over 25 years of safari experience, Easy Travel knows
            the most exciting regions of each park and reserve in the country.
            So choose wisely, travel responsibly, and be ready for a
            life-changing experience.
            <br />
            <br />
            <br />
            <br />
            Bottom Line?
            <br />
            <br />
            Safari is all about celebrating the wild places. It’s about honoring
            the wonderful creatures that live there. So tread lightly, express
            genuine interest in Tanzanian culture, and choose an outfitter
            that’s both experienced and responsible. With these in mind, you’re
            bound to have a life-changing experience.
          </p>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default blog;
