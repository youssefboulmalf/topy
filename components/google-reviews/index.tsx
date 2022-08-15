import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import Stars from './stars'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { FaTripadvisor } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';






let slidesPerView = 1;
let centeredSlides = true;
let spaceBetween = 65;
let navigation = true 
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 2;
    spaceBetween = 65;
    centeredSlides = true;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 3;
    spaceBetween = 65;
    centeredSlides = true;
  }
}

type Review = {
  author_name: string
  author_url: string
  language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}
export default function GoogleReviews({ data }: { data: any }) {

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);


  const dataObject = JSON.parse(data)

  const { rating, reviews } = dataObject.result;
  return (
    <div className='container'>
    <div className='greviews'>
      <h2 className='head-big'>
        What our customers say
      </h2>
      <div className='greviews-box'>
        <div className='greviews-box__head'>
          <div className='greviews-box__head-intro'>
            <div className='greviews-box__head-intro-text'>
              <FcGoogle className='googleLogo' />
              <h3>Rating</h3>
            </div>
            <div className='greviews-box__head-intro-text'>
              <h3>{rating}.0</h3>
              <Stars rating={rating} className='starLogo' />
              <p>({reviews.length}) reviews</p>
            </div>
          </div>
          <button className='greviews-box__head-button' onClick={()=>window.location.replace("https://www.google.com/search?q=topy+tours&sxsrf=ALiCzsbAejZ-eSit0BY8rJQMTkeTohZfzw%3A1658668777332&ei=6UbdYozzE8m6kgWBlabwAQ&oq=topy+tours&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzILCC4QxwEQrwEQywEyBQgAEMsBOg0ILhDHARCvARCwAxANOgcIABCwAxANOgkIABAeELADEA1KBAhBGAFKBAhGGABQowFYowFgoAxoAXAAeACAAWKIAWKSAQExmAEAoAEByAEKwAEB&sclient=gws-wiz")}>Write a review</button>
        </div>
        <div className='greviews-box__body'>
        {domLoaded && (
          <Swiper
            spaceBetween={spaceBetween}
            loop={true}
            centeredSlides={centeredSlides}
            watchOverflow={true}
            slidesPerView={slidesPerView}
            navigation={navigation}
            className="swiper-wrapper">

            {reviews.map((review: Review, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className='review-box'>
                    <div className='review-box__intro'>
                      <Image placeholder="blur" blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tsq2HgAGmQJO71KAngAAAABJRU5ErkJggg==' layout='fixed' height={45} width={45} alt={"avatar"} className='review-box__avatar' referrerPolicy="no-referrer" src={review.profile_photo_url} />
                      <div className='review-box__info'>
                        <a className='review-name' href={review.author_url}>
                          {review.author_name}
                        </a>
                        <div className='review-box__rating'>
                          <Stars rating={review.rating} className="starLogos" />
                          <p>{review.relative_time_description}</p>
                        </div>
                      </div>
                    </div>
                    <div className='review-box__text'>
                      {review.text}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
            }
          </Swiper>)}
        </div>
      </div>
    <div className="tripadvisor-wrapper">
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
    </div>
  );
}