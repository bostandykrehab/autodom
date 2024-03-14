import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import '../../styles/footer.css';

const API_KEY = 'b674e4fe-f6d3-479e-89c6-32e1c6d7c977';

const quickLinks = [
  {
    path: '/',
    display: 'Главная',
  },
  {
    path: '/about',
    display: 'О нас',
  },

  {
    path: '/results',
    display: 'Наши работы',
  },
  {
    path: '/contact',
    display: 'Контакты',
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Auto
                    <br />
                    Dom
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Наша служба ремонта кемперов готова помочь. От базового обслуживания до капитального
              ремонта — мы обеспечим вас.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Быстрая навигация</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Наше расположение</h5>
              <p className="office__info">Алматинская обл., Жалпаксай, Турсынбека 30</p>
              <p className="office__info">Телефон: +77057000882</p>
              <p className="office__info">Email: bjstandik@gmail.com</p>
              <p className="office__info">Рабочее время: 08:00 - 21:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12" className="d-flex justify-content-center">
            <div className="mb-4">
              <YMaps query={{ apikey: API_KEY }}>
                <div>
                  <Map defaultState={{ center: [43.232316, 76.680022], zoom: 16 }}>
                    <Placemark geometry={[43.232224, 76.679504]} />
                  </Map>
                </div>
              </YMaps>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Auto Dom {year}, Все права защищены.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
