import styled from 'styled-components';

const Card = styled.div`
  background-color: lightgray;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: darkblue;
  }

  p {
    font-size: 16px;
    color: black;
  }
`;
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;

    &:hover {
      background-color: darkblue;
    }
`;

export function ABC() {
  return (
    <Card>
      <h2>Título do Card</h2>
      <p>Conteúdo do Card</p>
      <Button>Clique em mim!</Button>
    </Card>
  );
}