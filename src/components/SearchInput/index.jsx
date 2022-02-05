import style from './Search.module.css'
import Search from "../../assets/search2.svg";
import PropTypes from "prop-types";
const SearchInput=(props)=>{
    
  
    return <div>
          <div className={style.container}>
        <input
          type="text"
          id="box"
          data-testid='search'
          value={props.search}
          placeholder="Search Templates"
          onChange={props.handleSearch}
          className={style.search_box}
        />
        <img className={style.search_icon} alt="search" src={Search} />
      </div>
    </div>
}

export default SearchInput; 
SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};