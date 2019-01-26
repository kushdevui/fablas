/* Product Parent Component */

import React, {Component} from 'react';
import FeaturedProducts from './FeaturedProducts/featuredProducts';
//styles 
import "./products.scss";

const Products = (WrappedComponents) =>{
    class HOC extends Component{
        constructor(){
            super();
        }
        render(){
            return(
                <div>
                    <WrappedComponents
                        {...this.props}
                        secretToLife={42}
                    />
                </div>
            )
        }
    }
    return  HOC;;
}


export default Products;

