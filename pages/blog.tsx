import Link from "next/link";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import Footer from "../components/footer";
import Layout from '../layouts/Main';
import Image from "next/image";
import image1 from "../public/images/blogs/tanzania.jpg"
import image2 from "../public/images/blogs/entiquette.jpg"
import image3 from "../public/images/blogs/cloths.jpg"
import image4 from "../public/images/blogs/best.jpg"
import image5 from "../public/images/blogs/safari.jpg"
import image6 from "../public/images/blogs/zanzibar.jpg"
import image7 from "../public/images/blogs/wish.jpg"
import image8 from "../public/images/blogs/usefull.jpg"

const BlogPage = () => {

  return (
    <Layout>
    <div className="blog-page">
      <div className="container">
        <h2 className="big">Blog posts</h2>
        <div  className='blogs'>
        <Link href={"/blog/1"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"tanzania"} src={image1} />
              <h2>10 Reasons Why You Should Visit Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/2"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"safari"} src={image2} />
              <h2>On safari vehcile etiquette</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                02-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/3"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"safari cloths"} src={image3} />
              <h2>What to wear on your tanzania safari</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                20-07-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/4"}>
            <a className="blog-wrapper">
              <Image  width={180} height={120} alt={"best safari"} src={image4} />
              <h2>Best time to visit tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                11-06-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/5"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"safari help"} src={image5} />
              <h2>10 safari do's and dont's</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-04-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/6"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"zanzibar"} src={image6} />
              <h2>Top 10 Unmissable Things to Do in Zanzibar, Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                24-02-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/7"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"safari"} src={image7} />
              <h2>10 Things I Wish I’d Known Before My Tanzania Safari </h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                18-01-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/8"}>
            <a className="blog-wrapper">
              <Image width={180} height={120} alt={"useful safari tips"} src={image8} />
              <h2>Tanzania Travel Tips & Useful info </h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                12-08-2021
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </Layout>
  );
};

export default BlogPage;
