import styled from 'styled-components';
// import PageWrapper from '../../styles/pagewrapper';

// export const CategoryViewWrapper = styled(PageWrapper)``;

export const CategoryViewWrapper = styled.div`
  /* grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 2; */
  justify-self: stretch;
  display: subgrid;
`;

// export const PostGridWrapper = styled.div`
//   /* justify-self: stretch; */
//   grid-column-start: 1;
//   grid-column-end: 2;
//   display: subgrid;
// `;

export const CategoryPostWrapper = styled.div``;

export const CategoryContent = styled.div`
  margin-left: 1rem;
`;

export const CategoryHeader = styled.h2`
  grid-column-start: 1;
  grid-row-start: 1;
  text-decoration: underline;
`;
