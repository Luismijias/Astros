import React from 'react';
import { Layout, Row, Col } from 'antd';
import { PhoneOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { FaHome, FaPhone, FaEnvelope, FaYoutube, FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { RiOpenSourceFill } from 'react-icons/ri';
import Configuration from '../../components/Configuration';
import {
  Route,
  Link
} from "react-router-dom";

import './index.less';

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer>
      <Row className="ant-layout-footer__wrapper" align="middle" gutter={[0, 10]}>
        <Col xs={24} lg={8}>
          <Link to={`/pt/`} className='logo' onClick={() => handleMenuClick('/')}>
            <img alt="logo" src="/images/logo.png" />
          </Link>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
          <Row className="footer__address">
            <Col><HomeOutlined /></Col>
            <Col>&nbsp;</Col>
            <Col>
              <address><Configuration parameter="footer-address" multilines/></address>
            </Col>
          </Row>
          <Row className="footer__phone">
            <Col>
              <p><PhoneOutlined /> <Configuration parameter="footer-phone"/></p>
            </Col>
          </Row>
          <Row className="footer__mail">
            <Col>
              <p><MailOutlined /> <Configuration parameter="footer-email"/></p>
            </Col>
          </Row>
          <p className="footer__social-links">
            <a href="https://github.com/Luismijias" className="share-icons">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@Luis_Carlos_Nogueira" className="share-icons">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/luis_mijias" className="share-icons">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/luis-carlos-nogueira-mijias-b27175213/" className="share-icons">
              <FaLinkedin />
            </a>
            <a href="https://discord.gg/ktVyf8Sshf" className="share-icons">
              <FaDiscord />
            </a>
            <a href="https://www.facebook.com/mijias" className="share-icons">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/luis_mijias/" className="share-icons">
              <FaInstagram />
            </a>
          </p>
        </Col>
      </Row>
    </Footer>
  );
}

export default BaseFooter;
