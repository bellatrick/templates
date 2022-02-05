// ** Third party imports
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { SentimentVeryDissatisfied } from "@material-ui/icons";
// ** Custom Components
import Card from "../Card/index.jsx";
// ** assets
import loader from "../../assets/balls.gif";
// ** Relative imports
import style from "./TemplateCard.module.css";


const TemplateCard = (props) => {
  if (props.filter.data?.length < 1) {
    return (
      <p className={style.empty}>
        <SentimentVeryDissatisfied className={style.icon} /> Sorry, No results
        found
      </p>
    );
  } else
    return (
      <div className={style.wrapper}>
        {props.filter.data ? (
          props.filter?.data
            .slice(props.pagination.start, props.pagination.end)
            .map((card, i) => (
              <Card key={i} name={card.name} description={card.description} />
            ))
        ) : (
          <div className={style.loader}>
            <img src={loader} alt="spinner" />
          </div>
        )}
      </div>
    );
};
const mapStateToProps = (state) => {
  return {
    filter: state.filter.value,
    pagination: state.pagination.value,
  };
};
export default connect(mapStateToProps)(TemplateCard);
TemplateCard.propTypes = {
  filter: PropTypes.object.isRequired,
 
}