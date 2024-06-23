import propTypes from "prop-types";
import { useState } from "react";

const TextInput = ({
  name,
  label,
  handleChange = () => {},
  password = false,
  inputProps = {},
}) => {
  const [value, setValue] = useState(inputProps.value ? inputProps.value : "");

  return (
    <div className="text-input">
      <label htmlFor={name}>{label}</label>
      <input
        {...inputProps}
        id={name}
        name={name}
        value={value}
        type={password ? "password" : "text"}
        onChange={(e) => {
          handleChange(e);
          setValue(e.target.value);
        }}
      ></input>
    </div>
  );
};

TextInput.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  handleChange: propTypes.func,
  password: propTypes.bool,
  inputProps: propTypes.object,
};

export { TextInput };
