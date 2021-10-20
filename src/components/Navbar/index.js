import React from 'react';
import { Link } from 'react-router-dom';

import * as styled from './styled';

export default function Navbar() {
  return (
    <styled.Navbar>
      <Link className="link" to="/">
        Início
      </Link>
      <Link className="link" to="/about">
        Sobre mim
      </Link>
      <Link className="link" to="/contato">
        Contato
      </Link>
    </styled.Navbar>
  );
}
