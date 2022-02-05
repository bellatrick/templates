
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import PropTypes from 'prop-types'
import { useQuery } from "react-query";
// ** Custom components
import Dropdown from "../Dropdown";
// ** Assets and Styles
import style from "./Header.module.css";
import Info from "../../assets/info2.svg";
import SearchInput from '../SearchInput'

// ** Utilities
import { filterAction, paginationAction } from "../../store";
import { getTemplates } from "../../Api";
import {roundUpOverQuarter} from '../../utils'
const Header = (props) => {
  const dispatch = useDispatch();
  const { data, isError } = useQuery("templates", getTemplates);

  useEffect(() => {
    if (data) {
      dispatch(filterAction.getData({ data, isError }));
    }
  }, [data, dispatch, isError]);

  useEffect(() => {
   
    if (props.filter.data) {
      let totalPages = props.filter.data.length / 15;
     
    
      dispatch(paginationAction.handlePagination(roundUpOverQuarter(totalPages)));
    }
  }, [props.filter.data, dispatch]);
  const handleChange = (e, actionFunction) => {
    dispatch(actionFunction(e.target.value));
   
  };
  const handleSearch=(e)=>{
    dispatch(filterAction.search(e.target.value))
    dispatch(paginationAction.handleReset())
  }
  const category = ["All", "Health", "E-commerce", "Education"];
  const date = ["Default", "Ascending", "Descending"];
  const order = ["Default", "Ascending", "Descending"];
  return (
    <div className={style.wrapper}>
    <SearchInput handleSearch={handleSearch} search={props.filter.search}/>
      <div className={style.dropdownContainer}>
        <p  className={style.sort}>Sort By:</p>
        <Dropdown
          label={"Category"}
          options={category}
          onChange={handleChange}
          action={filterAction.addCategory}
          value={props.filter.category}
        />
        <Dropdown
          label={"Order"}
          options={order}
          onChange={handleChange}
          action={filterAction.addOrder}
          value={props.filter.order}
        />
        <Dropdown
          label={"Date"}
          options={date}
          onChange={handleChange}
          action={filterAction.addDate}
          value={props.filter.date}
        />
      </div>
      <div className={style.banner}>
        <p>
          {" "}
          <img alt="info" src={Info} />
          <span>
            Tada! Get started with a free Template. Can't find what you are
            looking for? Search from 1000+ available Templates
          </span>
        </p>
      </div>
      {!props.filter.data || props.filter.data.length < 1 ? (
        ""
      ) : (
        <div className={style.subHeader}>
          <p className={style.head}>
            {props.filter.category.split(" ")[0]} Templates
          </p>
          <p>{props.filter.data.length} Templates</p>
        </div>
      )}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    filter: state.filter.value,
  };
};
export default connect(mapStateToProps)(Header);

// ** PropTypes
Header.propTypes = {
  filter: PropTypes.object.isRequired,
 
}