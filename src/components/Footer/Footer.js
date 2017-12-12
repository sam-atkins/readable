import React from 'react';
import { FooterText, FooterWrapper } from './Footer.styles';

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      Built with{' '}
      <span role="img" aria-label="thinking face">
        🤔
      </span>{' '}
      &&{' '}
      <span role="img" aria-label="angry face">
        😡
      </span>{' '}
      &&{' '}
      <span role="img" aria-label="why didn't I think of that earlier face">
        🙄
      </span>{' '}
      &&{' '}
      <span role="img" aria-label="heart">
        ♥
      </span>{' '}
      by <a href="https://www.samatkins.me">Sam</a>. View source code on{' '}
      <a href="https://github.com/cubiio/readable">Github</a>.
    </FooterText>
  </FooterWrapper>
);

export default Footer;
