import React from "react";
import PropTypes from "prop-types";

const ColorList = ({ colorName, counter, increment }) => {
  return (
    <li onClick={increment}>
      {colorName}
      {counter === 0 ? null : `(${counter})`}
    </li>
  );
};

ColorList.propTypes = {
  colorName: PropTypes.string,
  counter: PropTypes.number,
  increment: PropTypes.func
};

export default ColorList;
