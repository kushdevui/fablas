/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React from "react";
import PropTypes from "prop-types";

import { Form , FormGroup , Input , Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMobile, faKey } from "@fortawesome/free-solid-svg-icons";
import { validate , warn } from "../../global/libs/signUpFormValidations";
import { RenderField } from "../FormFields/formfields";

// Styles & Images
import "./sign_up_form.scss";


/**
 * 
 * @param {Store variables} props 
 */
const SignUpForm = (props) => {
    const { handleSubmit } = props; 
    return (
    <Form onSubmit = {handleSubmit} className = "mt-5 sign-up-form">
        <Field 
            name = "signup_first_name"
            type = "text"
            id = "signup_first_name"
            label = "First Name"
            component = { RenderField }
            icon = {faUser}
        />
    
        <Field 
            name = "signup_last_name"
            type = "text"
            id = "signup_last_name"
            label = "Last Name"
            component = { RenderField }
            icon = {faUser}
        />
    
        <Field 
            name = "signup_email"
            type = "email"
            id = "signup_email"
            label = "Email Address"
            component = { RenderField }
            icon = {faEnvelope}
        />
    
        <Field 
            name = "signup_phone"
            type = "text"
            id = "signup_phone"
            label = "Phone Number"
            component = { RenderField }
            icon = {faMobile}
        />

        <Field
            name = "signup_password"
            type = "password"
            id = "signup_password"
            label = "Create a Password"
            component = { RenderField }
            icon = {faKey}
        />
    </Form>
    );
};

// Prop validations for fields
RenderField.propTypes = {
    input: PropTypes.object,
    type : PropTypes.string,
    id : PropTypes.string,
    label : PropTypes.string,
    meta : PropTypes.object,
    icon : PropTypes.object
};

// Prop validations for Sign Up form
SignUpForm.propTypes = {
    handleSubmit : PropTypes.func
};

// Making the Sign up form as Redux Form
export default reduxForm({
    form : "signUpForm",
    validate,
    warn
})(SignUpForm);