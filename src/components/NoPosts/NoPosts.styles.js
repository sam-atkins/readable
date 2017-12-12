import styled from 'styled-components';
import PageWrapper from '../../styles/pagewrapper';
import { POST_META } from '../../styles/colours';

export const StyledWrapper = styled(PageWrapper)``;

export const NoPostsWrapper = styled.div`
  text-align: center;
`;

export const NoPostsText = styled.p`
  color: ${POST_META};
`;
