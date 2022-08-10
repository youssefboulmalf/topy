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
          <BackgroundImage className="banner" src={"/images/blogs/cloths.jpg"}>
            <div className="head">
              <h1>What to Wear on your Tanzania Safari</h1>
              <h2>
                Bringing the right clothing and personal items on your Tanzania
                safari not only keeps you safe and comfortable, but also
                increases your enjoyment of the many adventurous activities
                available during your travels. As a general rule, you should
                pack lightly and make wise choices in what types of clothing you
                bring.
              </h2>
            </div>
          </BackgroundImage>
          <span>
            Planning what to wear and essentials to bring on your upcoming
            safari in Tanzania is not all that complicated. Everything you need
            is most likely in your closet already! Our clothing suggestions
            apply for all seasons on a Tanzania safari while different
            guidelines apply if your route is to the peak of Mt. Kilimanjaro or
            heading down to the famous Zanzibar beach.
          </span>
          <h3>Tanzanian weather</h3>
          <p>
            The best wildlife viewing months in Tanzania are during the Dry
            season from late June to October. The best chance of seeing the
            wildebeest migration in the Serengeti is during June and July and
            the time to see the wildebeest calving is late January to February.
            Tanzania’s main rainy season, or the ‘long rains’, last during about
            March, April, and May.
          </p>{" "}
          <h3>What kinds of clothes are recommended for safari?</h3>{" "}
          <p>
            Casual, comfortable and easy to wash clothes are recommended. The
            goal is to pack lightly as most lodges and camps will launder
            clothes for a small fee. Safaris are informal, and there is no need
            to dress up. Do plan to dress in layers so you can adjust to
            temperature changes as early morning game drives can be quite cold
            depending on the time of year while daytime temperatures can get
            quite warm. Stick to neutral or khaki colors and avoid wearing dark
            blue or black clothes as these colors tend to attract tsetse flies.
            Wide brimmed hats, sunglasses, sunscreen, insect repellent are a
            necessity. After sunset, we recommend that you wear long pants,
            long-sleeved shirts, and socks and spray insect repellent to avoid
            being bitten by mosquitoes.
          </p>{" "}
          <h3>Recommended safari clothing to bring</h3>{" "}
          <ol>
            <li>T-shirts and tank tops</li>
            <li>Long-sleeved shirts (for protection from sunburns)</li>
            <li>Shorts</li>
            <li>Light long pants or convertible long-short pants</li>
            <li>Warm fleece pullover or jacket</li>
            <li>One swimsuit</li>
            <li>Cotton socks and underwear</li>
            <li>Pajamas</li>
            <li>One pair of comfortable walking shoes</li>
            <li>One pair of sandals or flip-flops</li>
            <li>Wide-brimmed hat</li>
            <li>Bandana (for dust)</li>
            <li>
              Heavy sweater, gloves, and toque if traveling in the cold season
              (June – August)
            </li>
          </ol>
          <h3>Clothing for zanzibar</h3>{" "}
          <p>
            Please dress modestly when sightseeing in Stone Town or visiting
            anywhere outside of the beach resorts in Zanzibar. Women should not
            wear sleeveless or revealing tops and short skirts or thigh-high
            shorts (Capri trousers or at least knee-length shorts are fine). Men
            should wear shirts, pants or knee-length shorts.
          </p>{" "}
          <h3>What are some other items to pack?</h3>{" "}
          <p>
            We strongly recommend that you carry-on all important items such as
            prescription medication, camera equipment, essential toiletries
            (please keep in mind many airlines have liquid restrictions) and one
            or two changes of clothes in case of checked luggage delays or loss.
          </p>{" "}
          <h3>6. Do not hog the guide</h3>{" "}
          <p>
            By all means take the opportunity to learn from your guide by asking
            questions…but be careful not to hog his/her attention at the expense
            of the other guests.
          </p>{" "}
          <h3>
            Pack light! here are the top things to bring with you on a safari:
          </h3>{" "}
          <ol>
            <li>Passport</li>
            <li>Plane tickets</li>
            <li>Travel Insurance Policy & Emergency Contact Numbers</li>
            <li>Yellow Fever Vaccination Certificate (if applicable)</li>
            <li>Safari itinerary</li>
            <li>
              U.S. dollars in large and small denominations ($20, $50 & $100
              bills should be issued after 2005)
            </li>
            <li>Credit cards and ATM bank cards</li>
            <li>Sunglasses</li>
            <li>Sunscreen and lip balm</li>
            <li>Small flashlight or headlamp</li>
            <li>Insect/Mosquito repellent</li>
            <li>
              Eye drops and extra contact lenses or spare glasses (if
              applicable)
            </li>
            <li>Anti-bacterial hand sanitizer</li>
            <li>
              Tissue paper and small travel towel (washrooms in Tanzania often
              don’t have toilet paper or paper towels)
            </li>
            <li>
              Camera, extra memory cards, batteries, and charger, if applicable
            </li>
            <li>
              UK plug adapter and transformer/voltage converter, if applicable
            </li>
            <li>Ziplock bags for toiletries, camera equipment, snacks, etc.</li>
            <li>Personal toiletries</li>
            <li>
              Small first aid medical kit including Tylenol or ibuprofen,
              antimalarial pills, cold and allergy medicine, itch medication,
              band-aids, stomach ache remedy, antibiotic cream, diarrhea
              medicine, prescription antibiotic for travelers diarrhea
              (Ciprofloxacin) and any prescription medications.
            </li>
          </ol>{" "}
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default blog;
