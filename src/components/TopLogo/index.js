import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import * as styled from './styled';

export default function TopLogo() {
  return (
    <styled.Div>
      <div className="logo">
        <Link className="link" to="/">
          <h2>MateusCarvalho</h2>
        </Link>
      </div>
      <div className="social_media">
        <a href="https://www.facebook.com/mateus.souza.10485">
          <FaFacebook size={25} />
        </a>

        <a href="https://www.instagram.com/i_gottaplan/">
          <FaInstagram size={25} />
        </a>

        <a href="https://www.youtube.com/channel/UCPrBCK8vKEr-096C7XPQrkQ">
          <FaYoutube size={25} />
        </a>
        <a href="https://www.linkedin.com/in/mateus-souza-carvalho-365b60153/">
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/mrdurden-hub">
          <FaGithub size={25} />
        </a>
      </div>
    </styled.Div>
  );
}
