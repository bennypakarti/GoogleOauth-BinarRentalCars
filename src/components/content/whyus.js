import React from 'react';
import complete from '../../assets/img/icons/icon_complete.png';
import price from '../../assets/img/icons/icon_price.png';
import hours from '../../assets/img/icons/icon_24hrs.png';
import profesional from '../../assets/img/icons/icon_professional.png';

const service = () => (
  <section id="whyus">
    <div className="container container-main">
      <h2>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      div.ro
      <div className="row justify-content-between py-5 px-3">
        <div className="card" style={{ width: 240 }}>
          <div className="card-body py-4">
            <img src={complete} alt="" />
            <h3>Mobil Lengkap</h3>
            <p className="card-text ">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
        </div>
        <div className="card" style={{ width: 240 }}>
          <div className="card-body py-4">
            <img src={price} alt="" />
            <h3>Harga Murah</h3>
            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
        </div>
        <div className="card" style={{ width: 240 }}>
          <div className="card-body py-4">
            <img src={hours} alt="" />
            <h3>Layanan 24 Jam</h3>
            <p className="card-text">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
            </p>
          </div>
        </div>
        <div className="card" style={{ width: 240 }}>
          <div className="card-body py-4">
            <img src={profesional} alt="" />
            <h3>Sopir Profesional</h3>
            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default service;
