/**
 *  Header Component
 */

// Dependencies
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import FeaturedProducts from './FeaturedProducts/featuredProducts';
//styles 

// Styles & Images
import "./products.scss";


class Products extends Component  {
    constructor(){
        super();
    }

    componentDidMount() {
        this.props.onAddTodo();
    }

    render(){
        return(
            
            <FeaturedProducts {...this.props.productList}/>
        );
    }
}

 const mapDispatchToProps = dispatch => {
        return {
          onAddTodo: () => {
            dispatch(addToDo());
          }
        };
};   
    
const mapStateToProps = state =>{
    return {
        productList : state.productReducer.productList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
