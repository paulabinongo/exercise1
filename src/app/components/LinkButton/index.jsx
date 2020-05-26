import React from "react";

function LinkButton(props) {
  const {
    color,
    light,
    size,
    rounded,
    inverted,
    outlined,
    fullwidth,
    href,
    ...otherProps
  } = props;
  return (
    <a
      href={href}
      className={
        "button" +
        (color ? ` is-${color}` : "") +
        (light ? ` is-${light}` : "") +
        (size ? ` is-${size}` : "") +
        (rounded ? ` is-${rounded}` : "") +
        (inverted ? ` is-${inverted}` : "") +
        (outlined ? ` is-${outlined}` : "") +
        (fullwidth ? ` is-${fullwidth}` : "")
      }
      {...otherProps}
    >
      {props.children}
    </a>
  );
}

export default LinkButton;
