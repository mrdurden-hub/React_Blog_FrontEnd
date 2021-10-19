import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import * as styled from './styled';

export default function Footer() {
  return (
    <styled.FooterPage>
      <div className="footer_info">
        <h4>Produzido por Mateus Carvalho</h4>
        <small>
          <p>© Copyright | Mateus Carvalho </p>
        </small>
        <p />
      </div>
      <div className="social_media">
        <a href="https://www.facebook.com/mateus.souza.10485">
          <FaFacebook size={25} color="white" />
        </a>

        <a href="https://www.instagram.com/i_gottaplan/">
          <FaInstagram size={25} color="white" />
        </a>

        <a href="https://www.youtube.com/channel/UCPrBCK8vKEr-096C7XPQrkQ">
          <FaYoutube size={25} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/mateus-souza-carvalho-365b60153/">
          <FaLinkedin size={25} color="white" />
        </a>
        <a href="https://github.com/mrdurden-hub">
          <FaGithub size={25} color="white" />
        </a>
      </div>
    </styled.FooterPage>
  );
}
