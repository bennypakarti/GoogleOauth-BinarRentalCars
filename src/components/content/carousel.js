import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../../assets/img/objects/photo.png';
import pic2 from '../../assets/img/objects/photo2.png';
import pic3 from '../../assets/img/objects/photo3.png';
import rate1 from '../../assets/img/icons/Rate.png';

const carousel = () => (
  <OwlCarousel
    className="owl-carousel owl-theme"
    loop
    center
    nav
    navText={["<img className='button-carousel' id='left-button' src='./img/icons/Left_button_hover.png'/>",
      "<img className='button-carousel' id='right-button' src='./img/icons/Right_button_hover.png'/>"]}
    dots={false}
    autoplay
    autoplayTimeout={5000}
    smartSpeed={2000}
    responsive={{
      600: {
        items: 2,
      },
    }}
  >
    <div className="item">
      <div className="row">
        <div className="col-3">
          <div className="photo">
            <img src={pic1} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="rate">
            <img src={rate1} alt="" />
          </div>
          <div className="comment">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod”
            </p>
            <p className="fw-bold">
              Alex Sans 32, Jakarta
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="row">
        <div className="col-3">
          <div className="photo">
            <img src={pic2} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="rate">
            <img src={rate1} alt="" />
          </div>
          <div className="comment">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod”
            </p>
            <p className="fw-bold">
              John Dee 32, Bromo
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="row">
        <div className="col-3">
          <div className="photo">
            <img src={pic3} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="rate">
            <img src={rate1} alt="" />
          </div>
          <div className="comment">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod”
            </p>
            <p className="fw-bold">
              Sabrina Dee 22, Bali
            </p>
          </div>
        </div>
      </div>
    </div>
  </OwlCarousel>
);

export default carousel;
