import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import GoogleReviews from "../components/google-reviews";
import ProductsFeatured from "../components/products-featured";
import Gallery from "components/gallery";
import BlogIntro from "components/blog-intro";
import Footer from "../components/footer";
import TimeLine from "../components/timeLine";
import Subscribe from "../components/subscribe";
import { TbHeartHandshake } from "react-icons/tb";
import { BiBadgeCheck } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import Link from "next/link";
import { GetServerSideProps } from "next";
import Image from "next/image";
import image1 from "../public/images/featured-1.jpg";
import image2 from "../public/images/featured-2.jpg";
import image3 from "../public/images/featured-3.jpg";

const key = process.env.GOOGLE_MAPS_API_KEY;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=16000, stale-while-revalidate=18000"
  );
  const result = await fetch(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLUT4pj4dNxgRUd-TCWtgybA&key=" +
      key
  );
  const data = await result.text();
  return {
    props: { data },
  };
};

const IndexPage = ({ data }: { data: React.ReactNode }) => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article className="featured-item featured-item-large">
            <Image
              placeholder="blur"
              layout="fill"
              objectFit={"cover"}
              alt={"destination image"}
              src={image1}
            />
            <div className="featured-item__content">
              <h3>3 Day safari Serengeti</h3>
              <Link href={"/product/product_687a33e6842939060cc6"}>
                <a className="btn btn--rounded">More details</a>
              </Link>
            </div>
          </article>

          <article className="featured-item featured-item-small-first">
            <Image
              placeholder="blur"
              layout="fill"
              objectFit={"cover"}
              alt={"destination image"}
              src={image2}
            />
            <div className="featured-item__content">
              <h3>5 Day safari for $999</h3>
              <Link href={"/product/product_2bd07cff98b782e0dc8b"}>
                <a className="btn btn--rounded">More details</a>
              </Link>
            </div>
          </article>

          <article className="featured-item featured-item-small">
            <Image
              placeholder="blur"
              layout="fill"
              objectFit={"cover"}
              alt={"destination image"}
              src={image3}
            />
            <div className="featured-item__content">
              <h3>Kilimanjaro 5-6 days</h3>
              <Link href={"/product/product_04a1ae02df416f4eb623"}>
                <a className="btn btn--rounded">More details</a>
              </Link>
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
                  to make sure everything is good and send some addition info.
                  If all is well you will receive payment link trough email or
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
                  At Topy tours we only employ experienced guides to make sure
                  you have the best experience on one of our many trips.
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
      <Gallery />
      <TimeLine />
      <BlogIntro />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
