import styled from "styled-components";

export const Container = styled.div `
  grid-area: 'SL';
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  padding: 11px 0px;

  max-width: 100vh;
  height: 100vh;

  /* O sair pra fora do componete na 'vertical' sera adicionado o scroll */
  overflow-y: scroll;

  /* Customiza o scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div `
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;
`;
