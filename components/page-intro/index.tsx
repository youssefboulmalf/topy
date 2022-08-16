import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay ,EffectFade, Navigation } from 'swiper';
import { BsStopwatch } from 'react-icons/bs';
import { FaTripadvisor, FaArrowLeft } from 'react-icons/fa';
import { BiBadgeCheck } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import slide1 from '../../public/images/slide-2.jpg'
import slide2 from '../../public/images/slide-1.jpg'
import Image from "next/image";


SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className="page-intro">
      {domLoaded && (
      <Swiper navigation effect="fade" modules={[Autoplay]} autoplay={{delay: 4000}} className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide">
            <Image priority={true} className='page-intro__slide-image'placeholder="blur" layout='fill' objectFit={"cover"} src={slide1}/>
            <div className="container">
              <div className="page-intro__slide__content">
                <h1>The beginning of your tanzanian adventure!</h1>
                <Link href={'/products'}><a href="#" className="btn-shop"><FaArrowLeft className='page-intro_Arrow'/>Shop now</a></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide">
          <Image priority={true} className='page-intro__slide-image'placeholder="blur" layout='fill' objectFit={"cover"} src={slide2}/>
            <div className="container">
              <div className="page-intro__slide__content">
                <h1>Experience the beauty of tanzanian nature</h1>
                <Link href={'/products'}><a href="products" className="btn-shop"><FaArrowLeft className='page-intro_Arrow'/>Book now</a></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>)}

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <div className='page-intro_icons'>
                <BsStopwatch className='page-intro_icon' />
              </div>
              <div className="data-item__content">
                <h4>Fast response</h4>
                <p>Contact within 24h</p>
              </div>
            </li>

            <li>
            <div className='page-intro_icons'>
                <FaTripadvisor className='page-intro_icon' />
              </div>
              <div className="data-item__content">
                <h4>Great reviews</h4>
                <p>50+ five star reviews on Tripadvisor and Google</p>
              </div>
            </li>

            <li>
            <div className='page-intro_icons'>
                <BiBadgeCheck className='page-intro_icon' />
              </div>
              <div className="data-item__content">
                <h4>Quality guaranteed</h4>
                <p>We only employ experienced guides</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro