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
import credentials from '../../components/Footer/credentials.png';
import Navbar from 'react-bootstrap/Navbar';
// import './Footer.css';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <div className="Row footer-main py-2">
          <div className="col-md-10 pl-md-0">
            <div className="d-flex align-items-center flex-wrap flex-md-nowrap">
              <div className="domino-hotline d-flex justify-content-center justify-content-md-start flex-grow-1 text-center">
                <LinkContainer to="/">
                  <Navbar.Brand>
                    <div className="pr-4 py-4 d-none d-md-block">
                      <img
                        src={logo}
                        width="auto"
                        height="auto"
                        className="d-inline-block align-top py-2"
                        alt="React Bootstrap logo"
                      />
                    </div>
                  </Navbar.Brand>
                </LinkContainer>
                <div className="hotline-wrapper border-left border-armchair-darker border-left-none border-md-left-solid pl-md-4 py-md-4">
                  <p className="nomal font-italic mb-2">
                    <i className="icon-phone"></i>
                    Hotline Đặt Hàng
                  </p>
                  <p className="text-decoration-none comp-hotline">1900 6099</p>
                </div>
              </div>
              <div className="alias-menu-link flex-grow-1 d-none d-lg-block">
                <div className="d-flex justify-content-start justify-content-lg-center">
                  <div className="nav-groups d-flex align-items-start">
                    <ul className="nav flex-column nomal mx-2">
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                    </ul>
                    <ul className="nav flex-column nomal mx-2">
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                    </ul>
                    <ul className="nav flex-column nomal mx-2">
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                      <li className="nav-item">
                        <LinkContainer to="/">
                          <Navbar.Brand>
                            <div className="nav-link text-grey-light px-1 px-md-2">
                              Cam kết
                            </div>
                          </Navbar.Brand>
                        </LinkContainer>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 pr-md-0 credentials d-none d-md-block">
            <div className="d-flex py-4">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <div className="pr-4 py-4 d-none d-md-block">
                    <img
                      src={credentials}
                      width="auto"
                      height="auto"
                      className="d-inline-block align-top py-2"
                      alt="React Bootstrap logo"
                    />
                  </div>
                </Navbar.Brand>
              </LinkContainer>
            </div>
          </div>
        </div>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
