import style from "./Card.module.css";
import PropTypes from "prop-types";
const Card = ({ name, description }) => {
  return (
    <div>
      <div className={style.card}>
        <div className={style.cardbody}>
          <p className={style.head}>{name}</p>
          <p className={style.paragraph}>{description}</p>
        </div>
        <p className={style.action}>
          <span>Use Template</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
