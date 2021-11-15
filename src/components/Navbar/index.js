import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@styled-icons/material-outlined/Close';
import { Menu } from '@styled-icons/material-outlined/Menu';
import { Container } from '../../styles/GlobalStyles';

import * as styled from './styled';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  function navHandleClick() {
    setVisible(false);
  }

  return (
    <styled.Navbar visible={visible}>
      <Container>
        <styled.Button onClick={handleClick}>
          {visible ? <Close size={25} /> : <Menu size={25} />}
        </styled.Button>

        <div className="menuLinks">
          <Link onClick={() => navHandleClick()} className="link" to="/">
            Início
          </Link>
          <Link onClick={() => navHandleClick()} className="link" to="/about">
            Sobre mim
          </Link>
          <Link onClick={() => navHandleClick()} className="link" to="/contact">
            Contato
          </Link>
        </div>
      </Container>
    </styled.Navbar>
  );
}
