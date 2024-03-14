import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/car-item.css';

const CarItem = (props) => {
  const { imgUrl, carName } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img d-flex justify-content-center">
          <img src={imgUrl[0]} alt="" className="m-auto" />
        </div>
        <div className="car__item-content mt-4 d-flex align-items-center flex-column">
          <h4 className="section__title text-center">{carName}</h4>
          <Link
            className=" w-50 car__item-btn car__btn-rent car__brn-link"
            to={`/results/${carName}`}>
            Подробнее
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
