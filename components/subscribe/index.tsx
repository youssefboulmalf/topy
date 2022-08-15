
import Image from "next/image";
import imageFile from '../../public/images/subscribe.jpg'


const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
        <Image className='page-intro__slide-image'placeholder="blur" layout='fill' objectFit={'cover'} src={imageFile}/>
          <h4>Subscribe to our newsletter and receive exclusive offers</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--mud">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe