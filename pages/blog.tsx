import Link from "next/link";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import Footer from "../components/footer";
import Layout from '../layouts/Main';

const BlogPage = () => {

  return (
    <Layout>
    <div className="blog-page">
      <div className="container">
        <h1>Blog posts</h1>
        <div  className='blogs'>
          <Link href={"/blog/1"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/tanzania.jpg"} />
              <h2>10 Reasons Why You Should Visit Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/2"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/entiquette.jpg"} />
              <h2>On safari vehcile etiquette</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                02-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/3"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/cloths.jpg"} />
              <h2>What to wear on your tanzania safari</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                20-07-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/6"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/best.jpg"} />
              <h2>Best time to visit tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                11-06-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/4"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/safari.jpg"} />
              <h2>10 safari do's and dont's</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-04-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/5"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/zanzibar.jpg"} />
              <h2>Top 10 Unmissable Things to Do in Zanzibar, Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                24-02-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/8"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/wish.jpg"} />
              <h2>10 Things I Wish I’d Known Before My Tanzania Safari </h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                18-01-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/7"}>
            <a className="blog-wrapper">
              <img src={"/images/blogs/usefull.jpg"} />
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
