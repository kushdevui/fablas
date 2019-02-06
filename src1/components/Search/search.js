/**
 * Search Component
 */

// Dependencies
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody , Row, Col , TabContent, TabPane, Nav, NavItem, Button , FormGroup  , Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { RenderField } from "../FormFields/formfields";

import "react-datepicker/dist/react-datepicker.css";
import "./search.scss";

class Search extends Component {
    constructor(){
        super();
        this.state = {
            activeTab : "1",
            startDateDate:new Date(),
            modal: false
        };
        this.toggleTab = this.toggleTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleChange(date){
        this.setState({
            startDate:date
        });
    }

    toggleTab(tab){
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab:tab
            });
        }
    }
    handleModal(){
        this.setState({
            modal:!this.state.modal
        });
    }
    render(){
        const crossStyle ={
            position: "absolute", top: "15px", right: "15px" 
        };
        return(
                <div className="search-component">
                    <Modal isOpen={this.state.modal} toggle={this.handleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>
                            <button className="close" style={crossStyle} onClick={this.handleModal}>&times;</button>
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col xs={12} className="radio text-center">
                                    <Field
                                        name = "search_dog_boarding"
                                        type = "radio"
                                        id = "search_dog_boarding"
                                        value="Dog Boarding"
                                        component = { RenderField }
                                    />
                                    <Label className="w-100" for = "search_dog_boarding">
                                        Dog Boarding
                                    </Label>
                                </Col>
                                <Col xs={12} className="radio text-center">
                                    <Field
                                        name = "search_dog_boarding"
                                        type = "radio"
                                        id = "search_house_sitting"
                                        value="House Sitting"
                                        component = { RenderField }
                                    />
                                    <Label className="w-100" for="search_house_sitting">
                                        House Sitting
                                    </Label>
                                </Col>
                                <Col xs={12} className="radio text-center">
                                    <Field
                                        name = "search_dog_boarding"
                                        type = "radio"
                                        id = "search_drop_in_visit"
                                        value="Drop In Visit"
                                        component = { RenderField }
                                    />
                                    <Label className="w-100" for = "search_drop_in_visit">
                                        Drop In Visit
                                    </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="d-flex inputtext">
                                    <FormGroup className="w-100">
                                        <Field
                                            name = "dog_location"
                                            type = "text"
                                            label = "Dog Boarding Near"
                                            id = "dog_location"
                                            value=" Dog Boarding Near"
                                            component = { RenderField }
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="text-center">
                                    <p>My Dog Size</p>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup className="d-flex radio text-center"> 
                                        <Field
                                            name = "dog_size"
                                            type = "radio"
                                            id = "dog_size_small"
                                            value="Small"
                                            component = { RenderField }
                                        />
                                        {/* <Label className="w-100" check for = "dog_size_small">
                                            Small
                                        </Label> */}
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup className="d-flex radio text-center"> 
                                        <Field
                                            name = "dog_size"
                                            type = "radio"
                                            id = "dog_size_medium"
                                            value="Medium"
                                            component = { RenderField }
                                        />
                                        <Label className="w-100" check for = "dog_size_medium">
                                            Medium
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup className="d-flex radio text-center"> 
                                        <Field
                                            name = "dog_size"
                                            type = "radio"
                                            id = "dog_size_large"
                                            value="Large"
                                            component = { RenderField }
                                        />
                                        <Label className="w-100" check for = "dog_size_large">
                                            Large
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col xs={6}>
                                    <FormGroup className="d-flex radio text-center"> 
                                        <Field
                                            name = "dog_size"
                                            type = "radio"
                                            id = "dog_size_giant"
                                            value="Giant"
                                            component = { RenderField }
                                        />
                                        <Label className="w-100" check for = "dog_size_giant">
                                            Medium
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button className="btn btn-danger w-100">Search</Button>
                                </Col>
                            </Row>
                        </ModalBody>
                    </Modal>
                    <Row>
                        <Col lg={12} className="mt-2">
                                <h2 className="d-none d-md-block">Love & care, when you’re not there</h2>
                                <Nav tabs className="col-xs-12">
                                    <NavItem className="col-xs-6">
                                        {/* <NavLink onClick={()=>{this.toggleTab("1");}}>
                                            When You're Away
                                        </NavLink> */}
                                    </NavItem>
                                    <NavItem className="col-xs-6">
                                        {/* <NavLink onClick={()=>{this.toggleTab('2')}}>
                                            When You're At Work
                                        </NavLink> */}
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <FormGroup>
                                                <div className="radio col-12">
                                                    <Field
                                                        name = "search_dog_boarding"
                                                        type = "radio"
                                                        id = "search_dog_boarding"
                                                        value="Dog Boarding"
                                                        component = { RenderField }
                                                    />
                                                    <Label for = "search_dog_boarding">
                                                        Dog Boarding
                                                    </Label>
                                                </div>
                                                <div className="radio col-12">
                                                    <Field
                                                        name = "search_dog_boarding"
                                                        type = "radio"
                                                        id = "search_house_sitting"
                                                        value="House Sitting"
                                                        component = { RenderField }
                                                    />
                                                    <Label for="search_house_sitting">
                                                        House Sitting
                                                    </Label>
                                                </div>
                                                <div className="radio col-12">
                                                    <Field
                                                        name = "search_dog_boarding"
                                                        type = "radio"
                                                        id = "search_drop_in_visit"
                                                        value="Drop In Visit"
                                                        component = { RenderField }
                                                    />
                                                    <Label for = "search_drop_in_visit">
                                                        Drop In Visit
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                        </Row>
                                        <Row>
                                            <FormGroup className="d-flex inputtext col-12">
                                                <Field
                                                    name = "dog_location"
                                                    type = "text"
                                                    label = "Dog Boarding Near"
                                                    id = "dog_location"
                                                    value=" Dog Boarding Near"
                                                    component = { RenderField }
                                                />
                                            </FormGroup>
                                        </Row>
                                        <Row>
                                            <FormGroup className="inputtext col-6">
                                                
                                                    <Field
                                                        name = "dog_pickup"
                                                        type = "text"
                                                        label = "Pickup"
                                                        id = "pickup"
                                                        value="Pickup"
                                                        component = { RenderField }
                                                    />
                                            </FormGroup>
                                            <FormGroup className="inputtext col-6">
                                                
                                                    <Field
                                                        name = "dog_drop"
                                                        type = "text"
                                                        label = "Drop"
                                                        id = "drop"
                                                        value="Drop"
                                                        component = { RenderField }
                                                    />
                                            </FormGroup>
                                        </Row>
                                        <Row>
                                            <Col lg={12} className="radio">
                                                <p>
                                                    My Dog Size
                                                </p>
                                            </Col>
                                            <Col xs={12}>
                                                <FormGroup>
                                                    <div className="radio col-6">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_small"
                                                            value="Small"
                                                            component = { RenderField }
                                                        />
                                                        <Label  for = "dog_size_small">
                                                            Small
                                                        </Label>
                                                    </div>
                                                    <div className="radio col-6">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_medium"
                                                            value="Medium"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_medium">
                                                            Medium
                                                        </Label>
                                                    </div>
                                                    <div className="radio col-6">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_large"
                                                            value="Large"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_large">
                                                            Large
                                                        </Label>
                                                    </div>
                                                    <div className="radio col-6">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_giant"
                                                            value="Giant"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_giant">
                                                            Giant
                                                        </Label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col lg={10}>
                                                <FormGroup>
                                                    <div className="radio">
                                                        <Field
                                                            name = "search_dog_day_care"
                                                            type = "radio"
                                                            id = "search_dog_walking"
                                                            value="Dog Day Care"
                                                            component = { RenderField }
                                                        />
                                                        <Label for = "search_dog_day_care">
                                                            Dog Day Care
                                                        </Label>
                                                    </div>
                                                    <div className="radio">
                                                        <Field
                                                            name = "search_dog_walking"
                                                            type = "radio"
                                                            id = "search_dog_walking"
                                                            value="Dog Walking"
                                                            component = { RenderField }
                                                        />
                                                        <Label for="search_dog_walking">
                                                            Dog Walking
                                                        </Label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <FormGroup className="d-flex inputtext col-12">
                                                <div >
                                                    <Field
                                                        name = "dog_location"
                                                        type = "text"
                                                        label = "Dog Boarding Near"
                                                        id = "dog_location"
                                                        value=" Dog Boarding Near"
                                                        component = { RenderField }
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Row>
                                        <Row>
                                            <Col lg={4}>
                                                <FormGroup>
                                                    <div className="d-flex inputtext">
                                                        <Field
                                                            name = "dog_pickup"
                                                            type = "text"
                                                            label = "Pickup"
                                                            id = "pickup"
                                                            value="Pickup"
                                                            component = { RenderField }
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col lg={4}>
                                                <FormGroup>
                                                    <div className="d-flex inputtext">
                                                        <Field
                                                            name = "dog_drop"
                                                            type = "text"
                                                            label = "Drop"
                                                            id = "drop"
                                                            value="Drop"
                                                            component = { RenderField }
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} className="radio">
                                                <p>
                                                    My Dog Size
                                                </p>
                                            </Col>
                                            <Col lg={10}>
                                                <FormGroup>
                                                    <div className="radio">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_small"
                                                            value="Small"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_small">
                                                            Small
                                                        </Label>
                                                    </div>
                                                    <div className="radio">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_medium"
                                                            value="Medium"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_medium">
                                                            Medium
                                                        </Label>
                                                    </div>
                                                    <div className="radio">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_large"
                                                            value="Large"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_large">
                                                            Large
                                                        </Label>
                                                    </div>
                                                    <div className="radio">
                                                        <Field
                                                            name = "dog_size"
                                                            type = "radio"
                                                            id = "dog_size_giant"
                                                            value="Giant"
                                                            component = { RenderField }
                                                        />
                                                        <Label check for = "dog_size_giant">
                                                            Giant
                                                        </Label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                        </Col>
                    </Row>
                </div>
        );
    }
}
// Exporting the Search Component
export default reduxForm({
    form : "searchForm"
})(Search);  



