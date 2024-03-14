import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/slider-2.jpg';

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">О нас</h4>
              <h2 className="section__title">Добро пожаловать в наш сервис</h2>
              <p className="section__description">
                Мы оказываем услуги по техническому обслуживанию мобильной техники для отдыха. Наши
                услуги включают в себя ремонт, техническое обслуживание и производство "домов на
                колёсах". Наша клиентура состоит из людей, которые ценят свое время и высоко ценят
                свой транспорт.Частое использование коммерческого транспорта может ускорить износ,
                что со временем приведет к ухудшению состояния кузова транспорта. Наша команда
                экспертов может удовлетворить любые потребности в ремонте вашего кемпера.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
