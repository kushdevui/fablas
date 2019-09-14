import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faArrowRight, faArrowDown, faLessThanEqual  } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import { connect } from 'react-redux';

  import {selectedProductSubCategory} from '../../redux/actions/getProductAction';


class SideNav extends Component{

    constructor(props){
        super(props);
        this.handleSelectedProductFlow = this.handleSelectedProductFlow.bind(this);

    }
    handleSelectedProductFlow(subCat,subCatName){
        this.props.selectedProductSubCategory(subCat,subCatName)
    }

   render(){
       return(
           <div>
                <h6 className="mb-4 side-nav-title">PRODUCT CATEGORIES</h6>
                <ul className="col-lg-9">
                    {this.props.productList.map((item)=>{
                        return(<li  className="category-item pb-3" onClick={this.props.toggleAnimation}>
                            {item.categoryName}
                            <span className="float-right" > 
                                <FontAwesomeIcon icon={faArrowDown } style={{color:'black'}} size="sm" />
                            </span>
                            <ul className="submenu pl-1">
                                {item.subCategory.map(subcat=>{
                                    return(<li onClick={()=>this.handleSelectedProductFlow(subcat.id,subcat.name)} class="second-menu-item pt-2">
                                        <Link  to={`/Products/${subcat.name}`} >- {subcat.name}</Link> 
                                    </li>)
                                })}
                            </ul>
                        </li>)
                    })}
                </ul>
           </div>
       )
   }

}

const mapDispatchToProps = dispatch => {
    return {
      selectedProductSubCategory : (subCat,subCatName) => {
          dispatch(selectedProductSubCategory(subCat,subCatName));
      }    
    };
};  


export default connect(null,mapDispatchToProps)(SideNav);