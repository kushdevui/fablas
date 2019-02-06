import React from "react";
import {FormGroup , Input , Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

/**
 * Render Input Fields here
 * 
 * @param {*} param0 
 */

export const RenderField = ({
    input,
    type,
    id,
    label,
    meta: { touched, error, warning},
    icon
}) => {
   
    switch(type) {
         
        case "password" : return (
            <FormGroup>
                <div className = "d-flex input-fields-container">
                    <Input {...input} invalid = {touched && Object.keys(error).length} valid = {!Object.keys(error).length} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
                    <Label for = {id} className = "form-icons">
                        <FontAwesomeIcon icon = {icon}/>
                    </Label>
                </div>
                {<div className = "errors-warnings-section">
                    {touched && error.isEmpty && <div className = "input-field-error-msg">{error.isEmpty}</div>}
                    {warning && <div className = { ((warning.isWeak && "weak-password") || (warning.isFair && "fair-password") || (warning.isStrong && "strong-password")) }>{warning.isWeak || warning.isFair || warning.isStrong}</div>}
                    {error.isSmall &&<div className = "input-field-error-msg">{error.isSmall}</div>}
                    {error.isInvalid && <div className = "input-field-error-msg">{error.isInvalid}</div>}
                </div>}
            </FormGroup>
        );
        case "radio" : return(
            <Input  {...input} type = {type} id = {id}></Input>
        );
        case "text" : return(
            <Input  {...input} bsSize = "lg" type = {type} id = {id} name = {id} placeholder = {label}></Input>
        );
        case "datePicker" : return(
            <DatePicker {...input }
            selected={this.state.startDate}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        );
        default: return (
            <div></div>
            // <FormGroup>
            //     <div className = "d-flex input-fields-container">
            //         <Input className = "rounded-0" {...input} invalid = {touched && error} valid = {!error} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
            //         <Label for = {id} className = "form-icons">
            //             <FontAwesomeIcon icon = {icon} />
            //         </Label>
            //     </div>
            //     { touched && error && <div className = "input-field-error-msg">{error}</div>}
                
            // </FormGroup>
        );
    }
};
