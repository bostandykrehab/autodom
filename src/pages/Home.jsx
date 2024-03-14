import React from 'react';

import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';
import ServicesList from '../components/UI/ServicesList';
import ScrollToTop from './ScrollToTop';

const Home = () => {
  ScrollToTop();

  return (
    <Helmet title="Главная">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Наши услуги</h6>
              <h2 className="section__title">Мы предоставляем:</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
