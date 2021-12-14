import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import P from 'prop-types';

export const Code = ({ content }) => (
  <SyntaxHighlighter language="javascript" style={darcula}>
    {content}
  </SyntaxHighlighter>
);

Code.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: P.object.isRequired,
};
