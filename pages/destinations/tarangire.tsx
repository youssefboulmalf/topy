import { BackgroundImage } from "@mantine/core";
import Footer from "components/footer";
import ProductsFeatured from "components/products-featured";
import React from "react";
import Layout from "../../layouts/Main";

const tarangire = () => {
  return (
    <Layout>
      <div className="destinationArticle">
        <div className="container">
          <BackgroundImage
            className="banner"
            src={"/images/destinations/tarangire.jpg"}
          >
              <div className="head">
                <h2 className='bigText'>Tarangire</h2>
                <h2>
                  Tarangire National Park has some of the highest population
                  density of elephants as compared to anywhere in Tanzania, and
                  its sparse vegetation, strewn with baobab and acacia trees,
                  makes it a beautiful and distinctive location to visit.
                </h2>
              </div>
          </BackgroundImage>
          <span>
            Located slightly off the main safari route, Tarangire National Park
            is a lovely, quiet park in Northern Tanzania. It is most famous for
            its elephant migration, birding and authentic safari atmosphere. The
            majority of travellers to the region either miss out Tarangire
            altogether or venture into the park for a matter of hours – leaving
            swathes of Tarangire virtually untouched!
          </span>
          <p>
            With a game viewing area that is roughly ten times the size of
            nearby Manyara NP and a concentration of game that is exceptional
            from July through to October, this seasonal Tanzania safari park is
            a little gem on the Northern safari circuit, especially if you love
            elephants!<br/><br/>Tarangire is the surprise package on the Northern
            circuit. Often overshadowed by the Serengeti and the Ngorongoro
            Crater, Tarangire has huge concentrations of animals in the peak
            months and a fraction of the visitor numbers of any of the other
            Northern parks. From July through to October safaris here are
            superb, and the atmosphere and habitats are completely different
            from other parks. Tarangire is surprisingly large, giving visitors
            the quietest game viewing environment of all the parks in the
            region. The South of Tarangire is especially quiet, and lodges such
            as Swala and Oliver’s Camp are the perfect place to explore this
            remote area, and to really get away from any other travellers.
            Overall, a superb little park that offers great value compared to
            its neighbours and a seriously good option for getting away from it
            all.
          </p>{" "}
          <h3>Tarangire National Park safari – The Wildlife</h3>{" "}
          <p>
            During the dry months the concentration of animals around the
            Tarangire river is almost as diverse and reliable as in the
            Ngorongoro Crater. However, the ecosystem here is balanced by a
            localised migration pattern that is followed by the majority of game
            that resides in and around the park. As a result, Tarangire is
            superb in season but questionable the rest of the year. Elephants
            are the main attraction, with up to 3,000 in the park during the
            peak months. Peak season also sees good numbers of wildebeest and
            zebra as well as giraffe, buffalo, Thompson’s gazelle, greater and
            lesser kudu, eland, leopard and cheetah. The real prizes in the park
            are dwarf mongoose, oryx and generuk – but viewings are very rare.
            Tarangire is one of Tanzania’s finest birding destinations.
          </p>{" "}
          <h3>Tarangire National Park – Activities</h3>{" "}
          <p>
            Tarangire safaris are the main activity, however, staying outside
            the park makes walking and night safari a possibility. There are no
            boat safaris on the rivers here but Oliver’s Camp offers adventurous
            fly camping trips and very good walking safaris. Both Oliver’s Camp
            and Swala have recently started night safaris within the park
            itself. Ask us for more information as the regulations here seem to
            change every year!
          </p>
          <h3>Are night drives allowed in Tarangire?</h3>{" "}
          <p>
            Night drives are allowed in Tarangire. Some lodges don’t offer it
            though due to not having set it up with TANAPA. Also, if your
            particular lodge is outside the National Park then it will not offer
            night drives. It is worth checking whether the lodge you are looking
            at offers it or not before booking if this is something on your
            hitlist!
          </p>{" "}
          <h3>Tarangire – When to go</h3>
          <p>
            The game viewing from July though to October is exceptional but for
            the remainder of the year the majority of game migrates out of the
            park, onto the floor of the Rift Valley and to the grazing grounds
            of the Masai steppe. As a result, we would advise visitors not to
            expect high concentrations of game in the off season months, but
            would still recommend travelling here to those who want to avoid the
            crowds.
          </p>
          <h3>Tarangire Safari Lodges – Accommodation</h3>
          <p>
            There are many lodges that surround the border of Tarangire but we
            have always believed that staying in the park itself is the right
            choice.<br/> <br/> Swala and Oliver’s Camp are the top end choices in the park.
            One of our absolute favourite authentic options though is Kuro,
            which is exceptionally well ran and with gorgeous interior design –
            it is a fabulous camp, and everyone who goes simply raves about it.
            Tarangire Treetops is located outside the park but its beautiful
            rooms are raised up into ancient baobab trees, making it, without
            any doubt, one of Tanzania’s most unique properties. The best value
            options are by far Kichuguu; a fabulous tented camp inside the park,
            and outside the park Maramboi which is exceptionally priced but a
            slightly bigger option. We prefer Kichuguu for it’s location inside
            the park. It is also far more intimate and cosy than Maramboi, which
            in comparison offers a more hotel-like stay. Tarangire Sopa is a
            bigger hotel and we would recommend going for a more authentic ad
            classic safari option to make your stay special.
          </p>
          <h3>Best time to visit Tarangire National Park</h3>
          <p>
            The best time to visit Tarangire is probably in the dry season from
            June – October, where the game viewing is at it’s best. Tsatse flies
            tend to be pretty bad from December to March so although this is a
            good time to go to the Serengeti for the wildebeest calving,
            Tarangire is best avoided at this time.
          </p>
          <h3>Best time to visit Tarangire National Parkn</h3>
          <p>
            For more information on Tanzania, the best thing to do is to give us
            a ring for an impartial chat. If you are undecided as to where to
            visit, please do just drop us an email or give us a call!
          </p>
        </div>
      </div>
      <ProductsFeatured/>
      <Footer/>
    </Layout>
  );
};

export default tarangire;
