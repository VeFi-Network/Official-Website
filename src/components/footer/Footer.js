import { Container } from "@material-ui/core";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StyledFooter } from "./Footer.styled";
import footer_logo from "../../assets/images/footer_logo.png";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="footer">
          <div className="footer__item">
            <ul>
              <li>
                <img src={footer_logo} alt="" />
              </li>
              <li>
                <p>&copy; 2021 VEFI Technologies All Rights Reserved</p>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>Company</h2>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/about-us#team">Our Team</Link>
              </li>
              <li>
                <Link to="/">Investor Relations</Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>Product</h2>
              <li>
                <Link to="/products">Wallet</Link>
              </li>
              <li>
                <Link to="/products">Exchange</Link>
              </li>
              <li>
                <Link to="/products">Smart Chain</Link>
              </li>
              <li>
                <Link to="/products">Network</Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>Support</h2>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <div className="footer__item legal">
            <ul>
              <h2>Legal</h2>
              <li>
                <Link to="/about-us">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about-us">Terms &amp; Conditions</Link>
              </li>
              <h2>Community</h2>
              <li>
                <a href="https://t.me/vefi_official" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>Contact</h2>
              <li>
                <a href="mailto:info@vefinetwork.org">info@vefinetwork.org</a>
              </li>
              <li>
                <a href="mailto:marketing@vefinetwork.org">marketing@vefinetwork.org</a>
              </li>
              <li>
                <a href="mailto:support@vefinetwork.org">support@vefinetwork.org</a>
              </li>
              <li>
                <a href="https://facebook.com/vefi.official">
                  <AiFillFacebook className="social_icon" />
                </a>
                <a href="https://instagram.com/vefi.official">
                  <AiFillInstagram className="social_icon" />
                </a>
                <a href="/">
                  <AiFillTwitterCircle className="social_icon" />
                </a>
                <a href="/">
                  <AiOutlineLinkedin className="social_icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>USA</h2>
              <li>
                <p>
                  12109 Bethel De Frisco <br />
                  TX 75033 USA
                </p>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <h2>Nigeria</h2>
              <li>
                <p>
                  No 5, Sylva Okon street, <br />
                  off Badore road, Ajah
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
