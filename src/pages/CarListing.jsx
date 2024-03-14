import React from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem';
import carData from '../assets/data/carData';
import ScrollToTop from './ScrollToTop';

const CarListing = () => {
  ScrollToTop();
  return (
    <Helmet title="Наши работы">
      <CommonSection title="Наши работы" />
      <section>
        <Container>
          <Row>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
