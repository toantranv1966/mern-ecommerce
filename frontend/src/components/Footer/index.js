import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SocialLogo11,
  Hotline,
} from './FooterElements';
import { LinkContainer } from 'react-router-bootstrap';
import '../../App.css';
import logo from '../../components/Header/logobp.png';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="auto"
                  height="auto"
                  className="d-inline-block align-top py-2"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </LinkContainer>
            {/* <SocialLogo to="/">BonPas Bakery</SocialLogo> */}
            <Hotline>Hotline Đặt hàng</Hotline>
            <SocialLogo11 to="/">
              Vinh Phat IT Co., Ltd All rights reserved
            </SocialLogo11>
            <SocialIcons>
              <SocialIconLink
                href="https://facebook.com/toan.truong.5494"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/briandesignz"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
