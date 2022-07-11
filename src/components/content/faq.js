import React from 'react';

const getstart = () => (
  <div className="container-main" id="faq">
    <div className="row">
      <div className="col-sm-5">
        <h2>Frequently Asked Question</h2>
        <p className="faq-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className="col-sm-7">
        <div className="accordion">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Apa saja syarat yang dibutuhkan?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem accusantium enim est praesentium!
                  Quisquam corrupti ducimus eveniet qui quas tenetur et eaque iusto mollitia deleniti facilis, optio
                  quibusdam quia modi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion pt-3">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Berapa hari minimal sewa mobil lepas kunci?
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia distinctio eveniet, rerum hic
                  sequi sit. Quia, voluptatum! Assumenda dolores atque saepe laborum possimus quasi eveniet reiciendis
                  vel quaerat. Laborum, voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion pt-3">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum porro delectus odio repellat
                  eius autem, neque culpa reiciendis consequuntur cupiditate inventore unde sed qui dignissimos
                  officia
                  laborum impedit quas amet?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion pt-3">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Apakah Ada biaya antar-jemput?
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sit sunt modi nisi alias
                  nobis doloribus aut ipsa, ducimus atque est dicta blanditiis! Vel, quo voluptatem iusto aperiam
                  repellendus ipsam!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion pt-3">
          <div className=" accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                Bagaimana jika terjadi kecelakaan
              </button>
            </h3>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quo error explicabo. Modi ad
                  sint debitis, assumenda soluta maxime deserunt esse earum autem enim, repellat iste, nulla optio
                  obcaecati amet!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default getstart;
