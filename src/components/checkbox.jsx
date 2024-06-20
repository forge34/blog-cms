import propTypes from "prop-types";

function Checkbox({ name, label }) {
  return (
    <div className="checkbox">
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name} id={name}></input>
    </div>
  );
}

Checkbox.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
};

export default Checkbox;
