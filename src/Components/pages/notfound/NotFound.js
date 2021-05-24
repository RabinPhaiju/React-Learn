import { Link } from "react-router-dom";
import { Button } from "../../UI";
import styled from "styled-components/macro";
import notfound from "./404.gif";

const NotButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

const NotText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  h1,
  h4,
  div {
    padding: 4px;
  }
`;

const NotFound = () => {
  return (
    <NotButton>
      <img src={notfound} alt='Not Found' />
      <NotText>
        <h1>Look like you're lost.</h1>
        <h4>The page you are looking for does not exist.</h4>
        <div style={{ width: "100px" }}>
          <Link to='/React-learn/'>
            <Button type='secondary'>Home</Button>
          </Link>
        </div>
      </NotText>
    </NotButton>
  );
};

export default NotFound;
