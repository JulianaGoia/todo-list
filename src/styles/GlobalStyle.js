import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* background-image: linear-gradient(var(--blue--500), var(--violet-600));
    height: 100vh; */
    background-color: #FDF1E5;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Abril Fatface', cursive;
}

`;

export const Container = styled.div`
  margin: 5% auto;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: var(--red--500);
    font-size: 2.5rem;
  }

  .list {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "1rem"};
  width: 100%;
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "2rem"};
`;

export const Input = styled.input`
  height: 3rem;
  width: 52rem;
  padding: 8px 24px;
  background-color: var(--white);
  border-radius: 8px;
  border: none;
  outline: none;
  color: var(--gray-600);
`;

export const Button = styled.button`
  height: 3rem;
  width: max-content;
  padding: 8px 24px;
  background-color: var(--red--500);
  color: var(--white);
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: max-content;
  background-color: ${(props) => (props.checked ? "#e94c42" : "#ffffff")};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style: none;
  flex-wrap: wrap;

  p {
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "")};
    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  i {
    color: #ffffff;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .task-actions {
    width: initial;
  }

  #icon {
    svg {
      fill: ${(props) => (props.checked ? "#ffffff" : "#e94c42")};
    }
  }
`;
