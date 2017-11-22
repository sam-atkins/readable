import styled from 'styled-components';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(200px, auto);
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export default PageWrapper;
