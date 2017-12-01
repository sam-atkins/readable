import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      Built with{' '}
      <span role="img" aria-label="thinking face">
        🤔
      </span>{' '}&&{' '}
      <span role="img" aria-label="angry face">
        😡
      </span>{' '}&&{' '}
      <span role="img" aria-label="why didn't I think of that earlier face">
        🙄
      </span> && ♥ by <a href="https://www.samatkins.me">Sam</a>. View source
      code on <a href="https://github.com/cubiio/readable">Github</a>.
    </FooterText>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  grid-column: col 2 / span 1;
  grid-row-start: 3;
  grid-row-end: 4;
  align-self: end;
  margin-bottom: 1rem;
`;

const FooterText = styled.div`
  font-size: 0.8em;
`;

export default Footer;
