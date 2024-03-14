import React, { useRef, useState } from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import ScrollToTop from './ScrollToTop';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';

const socialLinks = [
  {
    url: '#',
    icon: 'ri-facebook-line',
  },
  {
    url: '#',
    icon: 'ri-instagram-line',
  },
  {
    url: '#',
    icon: 'ri-linkedin-line',
  },
  {
    url: '#',
    icon: 'ri-twitter-line',
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q45kfa2', 'template_d8v38fh', form.current, {
        publicKey: 'w9Hd43DRSkDdFZKu-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Сообщение успешно отправлено!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Произошла ошибка, повторите позднее!');
        },
      );
  };

  ScrollToTop();

  return (
    <Helmet title="Контакты">
      <CommonSection title="Контакты" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Свяжитесь с нами!</h6>

              <form ref={form} onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input placeholder="Ваше имя" type="text" name="from_name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="user_email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Сообщение" type="textarea" name="message" id="exampleText" />
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Отправить сообщение
                </button>
              </form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Наше расположение</h6>
                <p className="section__description mb-0">
                  Алматинская обл., Жалпаксай, Турсынбека 30
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Телефон:</h6>
                  <p className="section__description mb-0">+77057000882</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">bjstandik@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
