import Logo from '../../assets/icons/logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Topy tours</span></h6>
            <p>As a specialized, Exclusive travel company with tremendeous love and passion for Africa, we believe in our goal to create unrivaled itineraries that take our visitors closer to the unsurpassed natural beauty and extraordinary cultural diversity that Tanzania has to offer.</p>
            <ul className="site-footer__social-networks">
              <Link href="https://www.facebook.com/topytours"><a ><i className="icon-facebook"></i></a></Link>
              <Link href="https://www.instagram.com/topy_tours/"><a><i className="icon-instagram"></i></a></Link>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Information</li>
              <li><Link href="about">About Us</Link></li>
              <li><Link href="contact">Contact Us</Link></li>
            </ul>
            <ul>
            <li>Extra</li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">topytours@gmail.com</a></li>
              <li><a href="#">telphone: +255 131 138 138</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY Topy tours - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer