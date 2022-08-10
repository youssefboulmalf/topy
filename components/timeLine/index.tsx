import React from "react";
import Link from "next/link";

const TimeLine = () => {
  return (
    <div className="TimeLine">
      <div className="container">
        <div className="boxes">
          <Link href={"/destinations"}>
            <a className="box">
              <div className="overlay">More destinations...</div>
              <img src={"/images/killa.jpg"} />
            </a>
          </Link>
          <div className="box">
            <h1>Beautiful destinations</h1>
            <p>
              At topy tours we provide safari's tours and trekking's to the most
              beautiful places tanzania has to offer. Safari's are tanzantia's
              primary touris income. Every year thousands of{""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
