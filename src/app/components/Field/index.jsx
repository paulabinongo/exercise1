import React from "react";

function FormField(props) {
  const {
    type,
    value,
    placeholder,
    position,
    icon,
    iconSize,
    direction,
    size,
    error,
    ...otherProps
  } = props;
  return (
    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input
          className={"input" + (size ? ` is-${size}` : "")}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => otherProps.onChange(e.target.value)}
        />
        <span className={"icon is-left" + (iconSize ? ` is-${iconSize}` : "")}>
          <i className={"fas " + icon}></i>
        </span>
      </div>

      {/* {error && <p className="help is-danger">{error.message}</p>} */}
    </div>
  );
}

export default FormField;
