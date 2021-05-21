import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, text, color, toggleAddButton }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={color} text={text} onclick={toggleAddButton} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tasker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
