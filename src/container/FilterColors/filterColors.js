import React from "react";
import "./filter-colors.scss";

const FilterColors = () =>{
    return(
        <span>
            <div className="color-container">
                <input type="checkbox"/>
                <span className="checkmark blue"></span>
            </div>
        </span>
    )
}

export default FilterColors;