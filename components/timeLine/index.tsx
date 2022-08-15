import React from "react";
import Link from "next/link";
import imageFile from '../../public/images/killa.jpg'
import Image from "next/image";

const TimeLine = () => {
  return (
    <div className="TimeLine">
      <div className="container">
        <div className="boxes">
          <Link href={"/destinations"}>
            <a className="box">
              <div className="overlay">More destinations</div>
              <Image placeholder="blur" layout='fill' object-fit={"cover"} alt={"destination image"}  src={imageFile} />
            </a>
          </Link>
          <div className="box">
            <h2 className='bigText'>Beautiful destinations</h2>
            <p>
              When it comes to exploring exotic places, the choices are
              numerous. Whether you like peaceful destinations, vibrant
              landscapes or wildlife sanctuary we have offers for you.
            </p>
            <Link href={'/destinations'}>Click here to read all about them.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
