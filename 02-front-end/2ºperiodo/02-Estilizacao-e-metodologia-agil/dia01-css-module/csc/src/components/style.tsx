import styled from 'styled-components';

export const Title = styled.h1` 
  border: 2px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};
  margin: 5px auto;
  padding: 10px 20px;
  font-size: 2rem;
  text-align: center;
  `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background-color: #022c16;
  margin-bottom: 3em;
`;
export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;
