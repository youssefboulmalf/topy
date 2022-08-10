import Link from "next/link";
import React from "react";
import {AiTwotoneCalendar} from 'react-icons/ai'
const BlogIntro = () => {
  return (
    <div className="blog-intro">
      <div className="container">
        <h1>Blog posts</h1>
        <div className="blogs">
            <Link href={'/blog/1'}>
          <a className="blog-wrapper">
            <img src={"/images/killa.jpg"} />
            <h2>10 Reasons Why You Should Visit Tanzania</h2>
            <div className="date"><AiTwotoneCalendar fontSize={16}/>09-08-2022</div>
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default BlogIntro
