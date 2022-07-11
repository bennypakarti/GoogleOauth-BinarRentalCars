import React from 'react';
import img1 from '../assets/img/icons/icon_facebook.png';
import img2 from '../assets/img/icons/icon_instagram.png';
import img3 from '../assets/img/icons/icon_twitter.png';
import img4 from '../assets/img/icons/icon_mail.png';
import img5 from '../assets/img/icons/icon_twitch.png';
import img6 from '../assets/img/objects/logo.png';

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container py-3">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                </li>
                <li>
                  <p>binarcarrental@gmail.com</p>
                </li>
                <li>
                  <p>081-233-334-808</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled ml-3">
                <li>
                  <a href="#service" className=" text-dark">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#whyus" className=" text-dark">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className=" text-dark">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#faq" className=" text-dark">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="text-center">Connect with us</p>
              <ul className="list-unstyled d-flex justify-content-center">
                <li><a href="#"><img className="icon-sosmed" src={img1} alt="" /></a></li>
                <li><a href="#"><img className="icon-sosmed" src={img2} alt="" /></a></li>
                <li><a href="#"><img className="icon-sosmed" src={img3} alt="" /></a></li>
                <li><a href="#"><img className="icon-sosmed" src={img4} alt="" /></a></li>
                <li><a href="#"><img className="icon-sosmed" src={img5} alt="" /></a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="text-center">Copyright Binar 2022</p>
              <img src={img6} alt="" className="mx-auto d-block" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
