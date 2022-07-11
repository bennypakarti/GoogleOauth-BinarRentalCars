import React from 'react';
import Jumbotron from './content/jumbotron';
import Service from './content/service';
import WhyUs from './content/whyus';
import GetStart from './content/getstart';
import FAQ from './content/faq';
import Carousel from './content/carousel';
import Testi from './content/testimonial';

const main = () => (
  <div>
    <div className="container-header">
      <Jumbotron />
    </div>
    <Service />
    <WhyUs />
    <Testi />
    <Carousel />
    <GetStart />
    <FAQ />
  </div>

);

export default main;
