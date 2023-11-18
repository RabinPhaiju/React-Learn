import styled, { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { Button } from "../UI";

const theme = {
  linkColor: "#007791",
  linkColorLight: "#8ed1dc",
  fontColor: "#505763",
  fontColorDark: "#29303b",
  fontColorLight: "#d1d3dc",
  cardBorder: "solid 1px #dcdacb",
  cardShadow: "0 0 1px 1px rgba(20, 23, 28, 0.1), 0 3px 1px 0 rgba(20, 23, 28, 0.1)",
  btnPrimaryColor: "#ec5252",
};
// Global style component applied to globally
// we are using global style and theme provider as this is supposed as App.js
const GlobalStyle = createGlobalStyle`
   :root{
      font-size:98.5%;
   }
   *,*::after,*::before{
      box-sizing:border-box;
      padding : 0px;
      margin:0px;
   }
   body{
       font-family: 'Varela Round', sans-serif;
      color: #505763;
      line-height: 1.1;
   }
   h4{
      font-size:22px;
      font-weight:500;
   }
   Link,a{
      text-decoration:none;
   }
   Link:hover{
      cursor:pointer;
   }
      li {
   list-style-type: none;
}

`;
const MainDiv = styled.div`
  margin: auto;
  width: 90%;
  padding: 4px;
  background-color: black;
  > div {
    padding: 4px;
    background-color: red;
  }
  ${Button}:first-child {
    margin: 12px;
  }
  ${Button} {
    margin: 4px 2px;
  }
`;
const Itag = styled.i`
  color: brown;
  background-color: black;
  padding: 8px;
`;

// override or copy other style as class
const IItag = styled(Itag)`
  color: green;
`;

const StyleComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainDiv>
          <div>
            <Button type='primary'>Primary</Button>
            <Button type='secondary'>Secondary</Button>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Itag>i tag</Itag>
            <IItag>i tag</IItag>
          </div>
        </MainDiv>
      </ThemeProvider>
    </div>
  );
};

export default StyleComponent;

// some of the styled are
// .div
// .i
// .input
// .main
// .header
// .nav
// .menu
// .span
// .img
