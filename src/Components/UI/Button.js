import styled, { css } from "styled-components/macro";

const handleButtonType = (type) => {
  switch (type) {
    case "primary":
      return css`
        background-color: ${(p) => p.theme.btnPrimaryColor};
        color: white;
      `;
    case "secondary":
      return css`
        background-color: #0f7c90;
        color: white;
      `;
    default:
      return css`
        background-color: white;
        color: #29303b;
        border: 1px solid #686f7a !important;
      `;
  }
};
const Button = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 3px;
  border: ${(p) => p.theme.cardBorder};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  white-space: nowrap;
  ${(p) => handleButtonType(p.type)}

  ${(p) =>
    p.large
      ? css`
          font-size: 2rem;
          padding: 10px 15px;
        `
      : css`
          font-size: 14px;
          padding: 10px 15px;
        `}
   &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  &:disabled {
    cursor: no-drop;
    filter: brightness(0.7);
  }
`;

export { Button }; // named export
