import styled from "styled-components";

// const Button = styled.button`
//   background: ${(props) => (props.$disabled ? "dark-grey" : "white")};
//   padding: 0.25rem 1rem;
//   border: 2px solid red;
//   border-radius: 3px;
// `;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export default Button;
