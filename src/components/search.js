import React from 'react';

const search = () => (
  <section className="container mb-5" id="carimobil">
    <div className="card container shadow">
      <div className="d-flex flex-column flex-md-row bd-highlight">
        <div className="p-3 flex-fill bd-highlight">
          <label htmlFor="form_driver" className="form-label">Tipe Driver</label>
          <select className="form-select" id="form_driver">
            <option selected hidden>Pilih Tipe Driver</option>
            <option>Dengan Sopir</option>
            <option>Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>
        <div className="p-3 flex-fill bd-highlight">
          <label htmlFor="form_date" className="form-label">Tanggal</label>
          <input type="date" className="form-control" id="form_date" placeholder="Pilih Tanggal" />
        </div>
        <div className="p-3 flex-fill bd-highlight">
          <label htmlFor="form_time" className="form-label">Waktu Jemput/Ambil</label>
          <input type="time" className="form-control" id="form_time" placeholder="Pilih Waktu" />
        </div>
        <div className="p-3 flex-fill bd-highlight">
          <label htmlFor="form_pass" className="form-label">Jumlah Penumpang (Opsional)</label>
          <input type="number" className="form-control" id="form_pass" placeholder="Jumlah Penumpang" />
        </div>
        <div className="p-3 flex-fill bd-highlight" style={{ margin: 'auto', textAlign: 'center' }}>
          <div className="d-grid gap-2 mx-auto">
            <button className="btn btn-sm btn-success" type="button" id="load-btn">Cari Mobil</button>
            <button className="btn btn-sm btn-outline-primary" type="button" id="clear-btn">
              Reset
              <i className="fa-solid fa-rotate-left" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default search;
