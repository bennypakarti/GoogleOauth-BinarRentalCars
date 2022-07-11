import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsGearFill, BsCalendarFill, BsFillPersonFill } from 'react-icons/bs';
import { getListCars } from '../../actions/carsAction';

function ListCars() {
  const { listCarsResult, listCarsLoading, listCarsError } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // get action list cars
    console.log('1. use effect component did mount');
    dispatch(getListCars());
  }, [dispatch]);

  return (
    <div className="container mb-3 py-3">
      <div className="row p-3">
        {listCarsResult ? (
          listCarsResult.map((car) => (
            <div className="card col-lg-3 col-sm-6 p-2 mb-05 my-3 mx-5">
              <img className="card-img-top" src={car.image} alt={car.plate} style={{ height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title" key={car.id}>
                  {car.manufacture}
                  {' '}
                  /
                  {' '}
                  {car.type}
                </h5>
                <p className="card-text">
                  <b>
                    Rp.
                    {car.rentPerDay}
                    {' '}
                    /hari
                  </b>
                </p>
                <p className="description" style={{ height: '6rem' }}>{car.description}</p>
                <p className="card-text">
                  <BsFillPersonFill />
                  {' '}
                  {car.capacity}
                  {' '}
                  Orang
                </p>
                <p className="card-text">
                  <BsGearFill />
                  {' '}
                  {car.transmission}
                </p>
                <p className="card-text">
                  <BsCalendarFill />
                  {' '}
                  {car.year}
                </p>
                <button className="btn btn-car btn-success" style={{ width: '280px' }} id="submit">Pilih Mobil</button>
              </div>
            </div>

          ))
        ) : listCarsLoading ? (
          <p>Loading . . . </p>
        ) : (
          <p>{listCarsError || 'Data Kosong'}</p>
        )}
      </div>
    </div>
  );
}

export default ListCars;
