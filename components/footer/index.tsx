import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Topy tours</span></h6>
            <p>As a specialized, Exclusive travel company with tremendeous love and passion for Africa, we believe in our goal to create unrivaled itineraries that take our visitors closer to the unsurpassed natural beauty and extraordinary cultural diversity that Tanzania has to offer.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Blogr</a></li>
              <li><a href="#">Site feedback</a></li>
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