import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import GoogleReviews from "../components/google-reviews";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { TbHeartHandshake } from "react-icons/tb";
import { BiBadgeCheck } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { Button } from "@mantine/core";
import Stars from "components/google-reviews/stars";

const key = process.env.GOOGLE_MAPS_API_KEY;

export async function getServerSideProps() {
  const res = await fetch(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLUT4pj4dNxgRUd-TCWtgybA&key=" +
      key
  );
  const data = await res.text();
  return {
    props: { data },
  };
}

const IndexPage = ({ data }: { data: React.ReactNode }) => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{
              backgroundImage:
                " linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.1)), url(/images/featured-1.jpg)",
            }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>3 Day safari Serengeti</h3>
              <a href="#" className="btn btn--rounded">
                More details
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.1)), url(/images/featured-2.jpg)",
            }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>5 Day safari for $999</h3>
              <a href="#" className="btn btn--rounded">
                More details
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.1)), url(/images/featured-3.jpg)",
            }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Kilimanjaro 5-6 days</h3>
              <a href="#" className="btn btn--rounded">
                More details
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <div className="shop-data_icons">
                <TbHeartHandshake className="shop-data_icon" />
              </div>
              <div className="data-item__content">
                <h4>Trustworthy</h4>
                <p>
                  Topy tours has organized over 200+ adventures. Our core values
                  is to provide our customers the adventures they choose as best
                  as possible. Thats why our team contacts you prior to your
                  trip to make sure all is good before any payment is made.
                </p>
              </div>
            </li>
            <li>
              <div className="shop-data_icons">
                <BsStopwatch className="shop-data_icon" />
              </div>
              <div className="data-item__content">
                <h4>Fast response</h4>
                <p>
                  After making an enquiry, our team will contact you within 24h
                  to make sure everyting is good and send some addition info. If
                  all is well you will receive payment link trough email or
                  whatsapp.
                </p>
              </div>
            </li>

            <li>
              <div className="shop-data_icons">
                <BiBadgeCheck className="shop-data_icon" />
              </div>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>
                  At Topy Tours we only employ experienced guides to make sure
                  you have the best experience on one of out many trips.
                </p>
              </div>
            </li>

            <li>
              <div className="shop-data_icons">
                <FaTripadvisor className="shop-data_icon" />
              </div>
              <div className="data-item__content">
                <h4>Great reviews</h4>
                <p>
                  Not sure yet? Listen to our happy customers. Topy tours has
                  been reviewed over 50 times! Most of our reviews are
                  overwhelmingly positive.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <GoogleReviews data={data} />
      <div className="container">
        <div className="tripadvisor-wrapper">
            <img src="/images/trip.jpg" />
            <button onClick={()=>{location.href = "https://www.tripadvisor.com/Attraction_Review-g297913-d20931486-Reviews-TOPY_TOURS-Arusha_Arusha_Region.html"}}className="tripAdvisorButton">
              <div className="tripAdvisorLogo"><FaTripadvisor/></div>
              <div className="button-head">
              <h3>5.0</h3>
              <Stars className="starLogo" rating={5}/>
              </div>
              <p>Read our 45 reviews</p>
            </button>
            </div>
      </div>
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
