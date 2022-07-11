import React from 'react';
import img from '../../assets/img/objects/img_service.png';
import check from '../../assets/img/icons/check.png';

const service = () => (
  <div className="container-service" id="service">
    <div className="row">
      <div className="col">
        <img src={img} style={{ width: 404 }} alt="" />
      </div>
      <div className="col">
        <h2>Best Car Rental for any kind of trip in Jawa Timur!</h2>
        <p>
          Sewa mobil di Jawa Timur bersama Binar Car Rental jaminan harga lebih murah
          dibandingkan yang lain, kondisi
          mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
        </p>
        <p>
          <img src={check} className="pe-2" />
          {' '}
          Sewa Mobil Dengan Supir di Bali 12 Jam
        </p>
        <p>
          <img src={check} className="pe-2" />
          {' '}
          Sewa Mobil Lepas Kunci di Bali 24 Jam
        </p>
        <p>
          <img src={check} className="pe-2" />
          {' '}
          Sewa Mobil Jangka Panjang Bulanan
        </p>
        <p>
          <img src={check} className="pe-2" />
          {' '}
          Gratis Antar - Jemput Mobil di Bandara
        </p>
        <p>
          <img src={check} className="pe-2" />
          {' '}
          Layanan Airport Transfer / Drop In
        </p>
      </div>
    </div>
  </div>
);

export default service;
