import Style from "./Dropdown.module.css";
import PropTypes from 'prop-types'

const Dropdown = ({ label, options, onChange, action, value }) => {
  return (
    <div>
      <div className="container">
        <form>
          <div className={Style.select_wrapper}>
            <p className={Style.label}>{label}</p>
            <select
             data-testid="select"
              className={Style.select}
              onChange={(e) => onChange(e, action)}
              value={value}
            >
              {options.map((option, i) => (
                <option data-testid="select-option" key={i} value={`${option} ${label}`}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Dropdown;

// proptypes
Dropdown.propTypes = {
  labels: PropTypes.string,
  option:PropTypes.array,
  onChange:PropTypes.func,
  action:PropTypes.func,
  value:PropTypes.string
}