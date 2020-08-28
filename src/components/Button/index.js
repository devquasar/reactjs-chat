import "./Button.scss";

import { Button as BaseButton } from "antd";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const Button = (props) => (
  <BaseButton
    {...props}
    className={classNames("button", props.className, {
      "button--large": props.size === "large",
    })}
  />
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
