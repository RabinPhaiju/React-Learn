import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onclick }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn' onClick={onclick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#565428",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
