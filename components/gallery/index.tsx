import React from "react";
import Image from "next/image";
import group from "../../public/images/topygroup.jpeg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <h2 className="head-text">Gallery</h2>
        <div className="galleryGrid">
          <div className="a">
            <Image
              layout="fill"
              objectFit="cover"
              alt={"safari fun"}
              referrerPolicy="no-referrer"
              src={
                "https://lh3.googleusercontent.com/p/AF1QipOOuP9sSyvBY-c1pgJGWOUdN9PuQh_UIeRj55YG=w768-h768-n-o-v1"
              }
              className="a"
            />
          </div>
          <div className="b">
            <Image
              layout="fill"
              objectFit="cover"
              alt={"safari fun2"}
              referrerPolicy="no-referrer"
              src={
                "https://lh3.googleusercontent.com/p/AF1QipO0b9l-rjIsBspCKBkSMjcMhKeO_sCaVBo90LEv=w768-h768-n-o-v1"
              }
              className="b"
            />
          </div>
          <div className="c">
            <Image
              layout="fill"
              objectFit="cover"
              alt={"safari fun3"}
              referrerPolicy="no-referrer"
              src={
                "https://media-cdn.tripadvisor.com/media/photo-w/24/c5/61/b3/topy-tours.jpg"
              }
              className="c"
            />
          </div>
          <div className="d">
            <Image
              layout="fill"
              objectFit="cover"
              alt={"safari fun4"}
              referrerPolicy="no-referrer"
              src={group}
              className="d"
            />
          </div>
          <div className="e">
            <Image
              layout="fill"
              objectFit="cover"
              alt={"safari fun5"}
              referrerPolicy="no-referrer"
              src={
                "https://lh3.googleusercontent.com/p/AF1QipOCnyl0LYFE1H1NXHGPXKH05DAdTb62kbIasqB0=w768-h768-n-o-v1"
              }
              className="e"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
