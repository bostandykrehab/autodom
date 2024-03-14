import React, { useRef } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header">
      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Auto
                      <br /> Dom
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Казахстан</h4>
                  <h6>Алматинская обл., Жалпаксай</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Пн-Сб</h4>
                  <h6>08:00 - 21:00</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className=" d-flex align-items-center justify-content-end ">
              <button className="header__btn btn ">
                <Link
                  to="https://wa.clck.bar/77057000882"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ri-phone-line"></i> Обратная связь
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <button className="reserve__btn mobile">
              <Link to="https://wa.clck.bar/77057000882" target="_blank" rel="noopener noreferrer">
                <i className="ri-phone-line"></i> Обратная связь
              </Link>
            </button>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                    }
                    key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
