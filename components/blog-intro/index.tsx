import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useRef } from "react";
import { useViewportSize } from '@mantine/hooks';


const BlogIntro = () => {
  const myRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);

  const { width } = useViewportSize();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _observer) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const style = myElementIsVisible && width > 700 ? "blogs blogs-animation" : "blogs";
  const styleTwo = myElementIsVisible && width > 700  ? "blogs blogs-animation-slower" : "blogs";

  return (
    <div className="blog-intro">
      <div className="container">
        <h2 className="big">Blog posts</h2>
        <div  ref={myRef} className={style}>
          <Link href={"/blog/1"}>
            <a className="blog-wrapper">
              <img alt={"tanzania"} src={"/images/blogs/tanzania.jpg"} />
              <h2>10 Reasons Why You Should Visit Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/2"}>
            <a className="blog-wrapper">
              <img alt={"safari"} src={"/images/blogs/entiquette.jpg"} />
              <h2>On safari vehcile etiquette</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                02-08-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/3"}>
            <a className="blog-wrapper">
              <img alt={"safari cloths"} src={"/images/blogs/cloths.jpg"} />
              <h2>What to wear on your tanzania safari</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                20-07-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/4"}>
            <a className="blog-wrapper">
              <img alt={"best safari"} src={"/images/blogs/best.jpg"} />
              <h2>Best time to visit tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                11-06-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/5"}>
            <a className="blog-wrapper">
              <img alt={"safari help"} src={"/images/blogs/safari.jpg"} />
              <h2>10 safari do's and dont's</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                09-04-2022
              </div>
            </a>
          </Link>
          </div>
          <div className={styleTwo}>
          <Link href={"/blog/6"}>
            <a className="blog-wrapper">
              <img alt={"zanzibar"} src={"/images/blogs/zanzibar.jpg"} />
              <h2>Top 10 Unmissable Things to Do in Zanzibar, Tanzania</h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                24-02-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/7"}>
            <a className="blog-wrapper">
              <img alt={"safari"} src={"/images/blogs/wish.jpg"} />
              <h2>10 Things I Wish I’d Known Before My Tanzania Safari </h2>
              <div className="date">
                <AiTwotoneCalendar fontSize={16} />
                18-01-2022
              </div>
            </a>
          </Link>
          <Link href={"/blog/8"}>
            <a className="blog-wrapper">
              <img alt={"useful safari tips"} src={"/images/blogs/usefull.jpg"} />
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
  );
};

export default BlogIntro;
