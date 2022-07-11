import React from 'react';
import car from '../../assets/img/objects/img_car.png';

const jumbotron = () => (
  <div className="row-jumbotron">
    <div className="col-jumbotron">
      <h1 className="title">Sewa & Rental Mobil Terbaik di kawasan Jawa Timur</h1>
      <p>
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
        untuk sewa mobil selama 24 jam.
      </p>
      <a href="/cars">
        <button className="btn btn-success" type="button">
          Sewa Sekarang
        </button>
      </a>
    </div>
    <div className="col">
      <img className="img-jumbotron" src={car} alt="" />
    </div>
  </div>
);

export default jumbotron;
