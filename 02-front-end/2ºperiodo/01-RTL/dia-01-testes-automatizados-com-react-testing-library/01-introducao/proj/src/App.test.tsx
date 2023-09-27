// src/App.test.tsx
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import App from './App';
 
test("verifica se o input de email está na tela", () => {
 // acessar
  render(<App />)
  const emailInput = screen.getByLabelText("Email:");
  // agir
  //aferir
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveProperty('type', 'email')
})

test("verifica se existe 2 botões a tela", () => {
  // acessar
    render(<App />);
    const btn = screen.getAllByRole("button");
    // aferir
    expect(btn).toHaveLength(2);
  })

test("verifica se existe um botão a tela", () => {
  // acessar
    render(<App />);
    const btn = screen.getByTestId("send");
    // aferir
    expect(btn).toBeInTheDocument();
  })

  test("verifica se existe um botão a tela reset", () => {
   // acessar
   render(<App />);
   const btn = screen.getByRole("button", { name: 'Voltar'});
   // aferir
   expect(btn).toBeInTheDocument();
    })

  test("Verifica se o campo 'email' e o botao 'enviar' funciona corretamente", async () => {
      // acessar
      render(<App />);
      const inpt = screen.getByLabelText("Email:");
      const btnSend = screen.getByTestId('send');
      const title = screen.getByRole("heading", { name: "Valor:" })

      // agir
      const mail = 'email@email.com';
      await userEvent.type(inpt, mail);
      await userEvent.click(btnSend);


      // aferir
      expect(inpt).toHaveValue('');
      expect(title).toHaveTextContent(`Valor: ${mail}`)
       })
