import React from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import { Container, Row, Col } from 'reactstrap';

import driveImg from '../assets/all-images/drive.jpg';
import '../styles/about.css';
import ScrollToTop from './ScrollToTop';

const About = () => {
  ScrollToTop();
  return (
    <Helmet title="О нас">
      <CommonSection title="О нас" />
      <AboutSection />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">Ремонт и сервисное обслуживание автодомов</h2>
                <div className="d-flex">
                  <div className="about__section-item d-flex flex-column">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Ремонт электропроводки
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Ремонт и установка пневмоподвески
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Ремонт и перешивка салона и сидений
                    </p>
                  </div>

                  <div className="about__section-item d-flex flex-column">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Ремонт водопровода и сантехники
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Ремонт мебели
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Изготовление деталей из алюминия и
                      стеклопластика
                    </p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Нужна помощь?</h6>
                    <h4>+77057000882</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
