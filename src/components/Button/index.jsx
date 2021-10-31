import P from 'prop-types';
import * as styled from './styled';

export const Button = ({ children }) => (
  <styled.Button>
    {children}
  </styled.Button>
);
Button.propTypes = {
  children: P.node.isRequired,
};
