
import style from "./Pagination.module.css";
import Arrow from "../../assets/arrow.svg";

import { paginationAction } from "../../store";
import { useDispatch, connect } from "react-redux";
import PropTypes from 'prop-types'
const Pagination = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={style.wrapper}>
      {props.filter.data && props.filter.data.length >= 1 ? (
        <>
          <p
            className={style.prev}
            onClick={() => dispatch(paginationAction.handlePrev())}
          >
            Previous
          </p>
          <p className={style.pageNum}>
            <input  className={style.page} value={props.pagination.pageNumber} onChange={(e)=>dispatch(paginationAction.handleChangeInput(e.target.value))} />{" "}
            of {props.pagination.totalPages}
          </p>
          <p
            className={style.next}
            onClick={() => dispatch(paginationAction.handleNext())}
          >
            Next <img src={Arrow} alt="arrow" />
          </p>
        </>
      ) : (
        ""
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
export default connect(mapStateToProps)(Pagination);
Pagination.propTypes = {
  filter: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
};