import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { BsStopwatch } from 'react-icons/bs';
import { FaTripadvisor, FaArrowLeft } from 'react-icons/fa';
import { BiBadgeCheck } from 'react-icons/bi';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Your journey begins</h2>
                <a href="#" className="btn-shop"><FaArrowLeft className='page-intro_Arrow'/>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Make your house into a home</h2>
                <a href="products" className="btn-shop"><FaArrowLeft className='page-intro_Arrow'/>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

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