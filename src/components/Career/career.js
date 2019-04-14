import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import Footer from "../Footer/footer";
import './career.scss';
import Axios from 'axios';

class Career extends Component{
    constructor(props){
        super(props)
        this.state = {
            showTab: "vendor",
            vendor:{
                "fullName":"",
                "businessName":"",
                "businessAddress":"",
                "city":"",
                "country":"",
                "permanentBusinessType":"",
                "website":"",
                "errors":{},
                "msg":""
            },
            distributor:{
                "fullName":"",
                "companyName" :"",
                "companyAddress":"",
                "mobile":"",
                "email": "",
                "city": "",
                "country":"",
                "investmentRange" : "",
                "website":"",
                "aboutYou" : "",
                "errors":{},
                "msg":""
            },
            jobSeeker:{
                "seekerFullName":"",
                "seekerEmail":"",
                "seekerMobile":"",
                "applyingFor":"",
                "message":"",
                "errors":{},
                "msg":""
            },
            errors:{},
            vendorMsg:"",
            jobSeekerMsg:"",
            distributorMsg:""
        }
        this.handleVendorChange = this.handleVendorChange.bind(this);
        this.handleDistributorChange = this.handleDistributorChange.bind(this);
        this.handlejobSeekerChange = this.handlejobSeekerChange.bind(this);
    }

    changeTab = (event) =>{
        //console.log(event.target.dataset.id);
        if(event.target.dataset.id=="vendor"){
            this.setState({
                showTab:"vendor"
            })
        }
        else if(event.target.dataset.id=="distributor"){
            this.setState({
                showTab:"distributor"
            })
        }
        else{
            this.setState({
                showTab:"job"
            })
        }
       
    }
    
    handleVendorChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
           vendor: {
               ...this.state.vendor,
               [name]: value
           }
        })
        //console.log(this.state);
    }

    handleDistributorChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            distributor:{
                ...this.state.distributor,
                [name]:value
            }
        })
    }

    handlejobSeekerChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            jobSeeker:{
                ...this.state.jobSeeker,
                [name]:value
            }
        })
    }
    _validate_distributor(){
        var errors = {}
        if(this.state.distributor.fullName == ""){
            errors.fullName = "Please fill in the required fields";
        }
        if(this.state.distributor.companyName == ""){
            errors.companyName = "Please fill in the required fields";
        }
        if(this.state.distributor.companyAddress == ""){
            errors.companyAddress = "Please fill in the required fields";
        }
        if(this.state.distributor.mobile == ""){
            errors.mobile = "Please fill in the required fields";
        }
        if(this.state.distributor.email == ""){
            errors.email = "Please fill in the required fields";
        }
        if(this.state.distributor.city == ""){
            errors.city = "Please fill in the required fields";
        }
        if(this.state.distributor.country == ""){
            errors.country = "Please fill in the required fields";
        }
        if(this.state.distributor.investmentRange == ""){
            errors.investmentRange = "Please fill in the required fields";
        }
        if(this.state.distributor.website == ""){
            errors.website = "Please fill in the required fields";
        }
        if(this.state.distributor.aboutYou == ""){
            errors.aboutYou = "Please fill in the required fields";
        }
       
        return errors;
    }

    _validate_vendor(){
        var errors = {}
        if(this.state.vendor.fullName == ""){
            errors.fullName = "Please fill in the required fields";
        }
        if(this.state.vendor.businessName == ""){
            errors.businessName = "Please fill in the required fields";
        }
        if(this.state.vendor.businessAddress == ""){
            errors.businessAddress = "Please fill in the required fields";
        }
        if(this.state.vendor.city == ""){
            errors.city = "Please fill in the required fields";
        }
        if(this.state.vendor.country == ""){
            errors.country = "Please fill in the required fields";
        }
        if(this.state.vendor.permanentBusinessType == ""){
            errors.permanentBusinessType = "Please fill in the required fields";
        }
        if(this.state.vendor.website == ""){
            errors.website = "Please fill in the required fields";
        }
        return errors;
    }
    _validate_jobSeeker(){
        var errors = {}
        if(this.state.jobSeeker.seekerFullName == ""){
            errors.seekerFullName = "Please fill in the required fields";
        }
        if(this.state.jobSeeker.seekerEmail == ""){
            errors.seekerEmail = "Please fill in the required fields";
        }
        if(this.state.jobSeeker.seekerMobile == ""){
            errors.seekerMobile = "Please fill in the required fields";
        }
        if(this.state.jobSeeker.applyingFor == ""){
            errors.applyingFor = "Please fill in the required fields";
        }
        if(this.state.jobSeeker.message == ""){
            errors.message = "Please fill in the required fields";
        }
        return errors;
    }

    handleVendorSubmit = (e) => {
      e.preventDefault();
      var errors = this._validate_vendor();
      if(Object.keys(errors).length != 0){
          this.setState({
            errors:errors
          })
      }else{
        Axios.post("https://fablasnode.herokuapp.com/send/vendor",{
        ...this.state.vendor
      })
      .then(res=>{
          if(res.data){
            this.setState({
                vendorMsg:"Thank you for submitting your query.We will get back to you in two business days."
            })
          }
      })
      }
    }

    handleDistributorSubmit = (e) =>{
        e.preventDefault();
        var errors = this._validate_distributor();
        if(Object.keys(errors).length != 0){
            this.setState({
              errors:errors
            })
        }else{
            Axios.post("https://fablasnode.herokuapp.com/send/distributor",{
                ...this.state.distributor
              })
              .then(res=>{
                  if(res.data){
                    this.setState({
                        distributorMsg:"Thank you for submitting your query.We will get back to you in two business days."
                    })
                  }
              })
        }
    }

    handleJobSeekerSubmit = (e) =>{
        e.preventDefault();
        var errors = this._validate_jobSeeker();
        if(Object.keys(errors).length != 0){
            this.setState({
              errors:errors
            })
        }else{
            Axios.post("https://fablasnode.herokuapp.com/send/jobSeeker",{
                ...this.state.jobSeeker
              })
              .then(res=>{
                  if(res.data){
                    this.setState({
                      jobSeekerMsg:"Thank you for submitting your query.We will get back to you in two business days."
                    })
                  }
              })
        }
    }

    render(){
        console.log(this.state);
        const RenderDistributor = this.state.distributorMsg?<p>{this.state.distributorMsg}</p>:<form onSubmit={this.handleDistributorSubmit}><div className="row vendor-form justify-content-center">
                                  
                                    <div className="col-lg-6">
                                        <input type="text" onChange={this.handleDistributorChange} name="fullName"  placeholder="Full Name" className={this.state.errors.fullName?"form-control error":"form-control"}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text"  onChange={this.handleDistributorChange} name="companyName" className={this.state.errors.companyName?"form-control error":"form-control"} placeholder="Company Name"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Company Address" onChange={this.handleDistributorChange} name="companyAddress" className={this.state.errors.companyAddress?"form-control error":"form-control"}></textarea>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className={this.state.errors.mobile?"form-control error":"form-control"} onChange={this.handleDistributorChange} name="mobile" placeholder="Phone"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className={this.state.errors.email?"form-control error":"form-control"} onChange={this.handleDistributorChange} name="email" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className={this.state.errors.city?"form-control error":"form-control"} name="city" onChange={this.handleDistributorChange} placeholder="City"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <select className={this.state.errors.country?"form-control error":"form-control"} name="country" onChange={this.handleDistributorChange} placeholder="Country">
                                        <option value="AX">Aland Islands</option>
	<option value="AL">Albania</option>
	<option value="DZ">Algeria</option>
	<option value="AS">American Samoa</option>
	<option value="AD">Andorra</option>
	<option value="AO">Angola</option>
	<option value="AI">Anguilla</option>
	<option value="AQ">Antarctica</option>
	<option value="AG">Antigua and Barbuda</option>
	<option value="AR">Argentina</option>
	<option value="AM">Armenia</option>
	<option value="AW">Aruba</option>
	<option value="AU">Australia</option>
	<option value="AT">Austria</option>
	<option value="AZ">Azerbaijan</option>
	<option value="BS">Bahamas</option>
	<option value="BH">Bahrain</option>
	<option value="BD">Bangladesh</option>
	<option value="BB">Barbados</option>
	<option value="BY">Belarus</option>
	<option value="BE">Belgium</option>
	<option value="BZ">Belize</option>
	<option value="BJ">Benin</option>
	<option value="BM">Bermuda</option>
	<option value="BT">Bhutan</option>
	<option value="BO">Bolivia, Plurinational State of</option>
	<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
	<option value="BA">Bosnia and Herzegovina</option>
	<option value="BW">Botswana</option>
	<option value="BV">Bouvet Island</option>
	<option value="BR">Brazil</option>
	<option value="IO">British Indian Ocean Territory</option>
	<option value="BN">Brunei Darussalam</option>
	<option value="BG">Bulgaria</option>
	<option value="BF">Burkina Faso</option>
	<option value="BI">Burundi</option>
	<option value="KH">Cambodia</option>
	<option value="CM">Cameroon</option>
	<option value="CA">Canada</option>
	<option value="CV">Cape Verde</option>
	<option value="KY">Cayman Islands</option>
	<option value="CF">Central African Republic</option>
	<option value="TD">Chad</option>
	<option value="CL">Chile</option>
	<option value="CN">China</option>
	<option value="CX">Christmas Island</option>
	<option value="CC">Cocos (Keeling) Islands</option>
	<option value="CO">Colombia</option>
	<option value="KM">Comoros</option>
	<option value="CG">Congo</option>
	<option value="CD">Congo, the Democratic Republic of the</option>
	<option value="CK">Cook Islands</option>
	<option value="CR">Costa Rica</option>
	<option value="CI">Côte d'Ivoire</option>
	<option value="HR">Croatia</option>
	<option value="CU">Cuba</option>
	<option value="CW">Curaçao</option>
	<option value="CY">Cyprus</option>
	<option value="CZ">Czech Republic</option>
	<option value="DK">Denmark</option>
	<option value="DJ">Djibouti</option>
	<option value="DM">Dominica</option>
	<option value="DO">Dominican Republic</option>
	<option value="EC">Ecuador</option>
	<option value="EG">Egypt</option>
	<option value="SV">El Salvador</option>
	<option value="GQ">Equatorial Guinea</option>
	<option value="ER">Eritrea</option>
	<option value="EE">Estonia</option>
	<option value="ET">Ethiopia</option>
	<option value="FK">Falkland Islands (Malvinas)</option>
	<option value="FO">Faroe Islands</option>
	<option value="FJ">Fiji</option>
	<option value="FI">Finland</option>
	<option value="FR">France</option>
	<option value="GF">French Guiana</option>
	<option value="PF">French Polynesia</option>
	<option value="TF">French Southern Territories</option>
	<option value="GA">Gabon</option>
	<option value="GM">Gambia</option>
	<option value="GE">Georgia</option>
	<option value="DE">Germany</option>
	<option value="GH">Ghana</option>
	<option value="GI">Gibraltar</option>
	<option value="GR">Greece</option>
	<option value="GL">Greenland</option>
	<option value="GD">Grenada</option>
	<option value="GP">Guadeloupe</option>
	<option value="GU">Guam</option>
	<option value="GT">Guatemala</option>
	<option value="GG">Guernsey</option>
	<option value="GN">Guinea</option>
	<option value="GW">Guinea-Bissau</option>
	<option value="GY">Guyana</option>
	<option value="HT">Haiti</option>
	<option value="HM">Heard Island and McDonald Islands</option>
	<option value="VA">Holy See (Vatican City State)</option>
	<option value="HN">Honduras</option>
	<option value="HK">Hong Kong</option>
	<option value="HU">Hungary</option>
	<option value="IS">Iceland</option>
	<option value="IN">India</option>
	<option value="ID">Indonesia</option>
	<option value="IR">Iran, Islamic Republic of</option>
	<option value="IQ">Iraq</option>
	<option value="IE">Ireland</option>
	<option value="IM">Isle of Man</option>
	<option value="IL">Israel</option>
	<option value="IT">Italy</option>
	<option value="JM">Jamaica</option>
	<option value="JP">Japan</option>
	<option value="JE">Jersey</option>
	<option value="JO">Jordan</option>
	<option value="KZ">Kazakhstan</option>
	<option value="KE">Kenya</option>
	<option value="KI">Kiribati</option>
	<option value="KP">Korea, Democratic People's Republic of</option>
	<option value="KR">Korea, Republic of</option>
	<option value="KW">Kuwait</option>
	<option value="KG">Kyrgyzstan</option>
	<option value="LA">Lao People's Democratic Republic</option>
	<option value="LV">Latvia</option>
	<option value="LB">Lebanon</option>
	<option value="LS">Lesotho</option>
	<option value="LR">Liberia</option>
	<option value="LY">Libya</option>
	<option value="LI">Liechtenstein</option>
	<option value="LT">Lithuania</option>
	<option value="LU">Luxembourg</option>
	<option value="MO">Macao</option>
	<option value="MK">Macedonia, the former Yugoslav Republic of</option>
	<option value="MG">Madagascar</option>
	<option value="MW">Malawi</option>
	<option value="MY">Malaysia</option>
	<option value="MV">Maldives</option>
	<option value="ML">Mali</option>
	<option value="MT">Malta</option>
	<option value="MH">Marshall Islands</option>
	<option value="MQ">Martinique</option>
	<option value="MR">Mauritania</option>
	<option value="MU">Mauritius</option>
	<option value="YT">Mayotte</option>
	<option value="MX">Mexico</option>
	<option value="FM">Micronesia, Federated States of</option>
	<option value="MD">Moldova, Republic of</option>
	<option value="MC">Monaco</option>
	<option value="MN">Mongolia</option>
	<option value="ME">Montenegro</option>
	<option value="MS">Montserrat</option>
	<option value="MA">Morocco</option>
	<option value="MZ">Mozambique</option>
	<option value="MM">Myanmar</option>
	<option value="NA">Namibia</option>
	<option value="NR">Nauru</option>
	<option value="NP">Nepal</option>
	<option value="NL">Netherlands</option>
	<option value="NC">New Caledonia</option>
	<option value="NZ">New Zealand</option>
	<option value="NI">Nicaragua</option>
	<option value="NE">Niger</option>
	<option value="NG">Nigeria</option>
	<option value="NU">Niue</option>
	<option value="NF">Norfolk Island</option>
	<option value="MP">Northern Mariana Islands</option>
	<option value="NO">Norway</option>
	<option value="OM">Oman</option>
	<option value="PK">Pakistan</option>
	<option value="PW">Palau</option>
	<option value="PS">Palestinian Territory, Occupied</option>
	<option value="PA">Panama</option>
	<option value="PG">Papua New Guinea</option>
	<option value="PY">Paraguay</option>
	<option value="PE">Peru</option>
	<option value="PH">Philippines</option>
	<option value="PN">Pitcairn</option>
	<option value="PL">Poland</option>
	<option value="PT">Portugal</option>
	<option value="PR">Puerto Rico</option>
	<option value="QA">Qatar</option>
	<option value="RE">Réunion</option>
	<option value="RO">Romania</option>
	<option value="RU">Russian Federation</option>
	<option value="RW">Rwanda</option>
	<option value="BL">Saint Barthélemy</option>
	<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
	<option value="KN">Saint Kitts and Nevis</option>
	<option value="LC">Saint Lucia</option>
	<option value="MF">Saint Martin (French part)</option>
	<option value="PM">Saint Pierre and Miquelon</option>
	<option value="VC">Saint Vincent and the Grenadines</option>
	<option value="WS">Samoa</option>
	<option value="SM">San Marino</option>
	<option value="ST">Sao Tome and Principe</option>
	<option value="SA">Saudi Arabia</option>
	<option value="SN">Senegal</option>
	<option value="RS">Serbia</option>
	<option value="SC">Seychelles</option>
	<option value="SL">Sierra Leone</option>
	<option value="SG">Singapore</option>
	<option value="SX">Sint Maarten (Dutch part)</option>
	<option value="SK">Slovakia</option>
	<option value="SI">Slovenia</option>
	<option value="SB">Solomon Islands</option>
	<option value="SO">Somalia</option>
	<option value="ZA">South Africa</option>
	<option value="GS">South Georgia and the South Sandwich Islands</option>
	<option value="SS">South Sudan</option>
	<option value="ES">Spain</option>
	<option value="LK">Sri Lanka</option>
	<option value="SD">Sudan</option>
	<option value="SR">Suriname</option>
	<option value="SJ">Svalbard and Jan Mayen</option>
	<option value="SZ">Swaziland</option>
	<option value="SE">Sweden</option>
	<option value="CH">Switzerland</option>
	<option value="SY">Syrian Arab Republic</option>
	<option value="TW">Taiwan, Province of China</option>
	<option value="TJ">Tajikistan</option>
	<option value="TZ">Tanzania, United Republic of</option>
	<option value="TH">Thailand</option>
	<option value="TL">Timor-Leste</option>
	<option value="TG">Togo</option>
	<option value="TK">Tokelau</option>
	<option value="TO">Tonga</option>
	<option value="TT">Trinidad and Tobago</option>
	<option value="TN">Tunisia</option>
	<option value="TR">Turkey</option>
	<option value="TM">Turkmenistan</option>
	<option value="TC">Turks and Caicos Islands</option>
	<option value="TV">Tuvalu</option>
	<option value="UG">Uganda</option>
	<option value="UA">Ukraine</option>
	<option value="AE">United Arab Emirates</option>
	<option value="GB">United Kingdom</option>
	<option value="US">United States</option>
	<option value="UM">United States Minor Outlying Islands</option>
	<option value="UY">Uruguay</option>
	<option value="UZ">Uzbekistan</option>
	<option value="VU">Vanuatu</option>
	<option value="VE">Venezuela, Bolivarian Republic of</option>
	<option value="VN">Viet Nam</option>
	<option value="VG">Virgin Islands, British</option>
	<option value="VI">Virgin Islands, U.S.</option>
	<option value="WF">Wallis and Futuna</option>
	<option value="EH">Western Sahara</option>
	<option value="YE">Yemen</option>
	<option value="ZM">Zambia</option>
	<option value="ZW">Zimbabwe</option>
                                        </select>
                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className={this.state.errors.investmentRange?"form-control error":"form-control"} onChange={this.handleDistributorChange} name="investmentRange" placeholder="Invetment Range"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className={this.state.errors.website?"form-control error":"form-control"} onChange={this.handleDistributorChange} name="website" placeholder="Website"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Please let us know about you" onChange={this.handleDistributorChange} name="aboutYou" className={this.state.errors.aboutYou?"form-control error":"form-control"}></textarea>
                                    </div>
                                    <div className="col-lg-3">
                                        <input type="submit" className="btn btn-danger w-100"/>
                                    </div>
                                </div></form>;
        const RenderVendor =  this.state.vendorMsg?<p>{this.state.vendorMsg}</p>:<form onSubmit={this.handleVendorSubmit}><div className="row vendor-form justify-content-center">
        <div className="col-lg-6">
            <input type="text"  onChange={this.handleVendorChange} name="fullName" placeholder={this.state.errors.fullName?"Please Enter your Name":"Full Name"} className={this.state.errors.fullName?"form-control error":"form-control"}/>
        </div>
        <div className="col-lg-6">
            <input type="text" onChange={this.handleVendorChange} name="businessName" className={this.state.errors.businessName?"form-control error":"form-control"} placeholder="Business Name"/>
        </div>
        <div className="col-lg-12">
            <textarea onChange={this.handleVendorChange} name="businessAddress" placeholder="Business Address" className={this.state.errors.businessAddress?"form-control error":"form-control"}></textarea>
        </div>
        <div className="col-lg-6">
            <input type="text" onChange={this.handleVendorChange} name="city" className={this.state.errors.city?"form-control error":"form-control"} placeholder="City"/>
        </div>
        <div className="col-lg-6">
            <select onChange={this.handleVendorChange} name="country" className={this.state.errors.country?"form-control error":"form-control"} placeholder="Country">
            <option value="AX">Aland Islands</option>
	<option value="AL">Albania</option>
	<option value="DZ">Algeria</option>
	<option value="AS">American Samoa</option>
	<option value="AD">Andorra</option>
	<option value="AO">Angola</option>
	<option value="AI">Anguilla</option>
	<option value="AQ">Antarctica</option>
	<option value="AG">Antigua and Barbuda</option>
	<option value="AR">Argentina</option>
	<option value="AM">Armenia</option>
	<option value="AW">Aruba</option>
	<option value="AU">Australia</option>
	<option value="AT">Austria</option>
	<option value="AZ">Azerbaijan</option>
	<option value="BS">Bahamas</option>
	<option value="BH">Bahrain</option>
	<option value="BD">Bangladesh</option>
	<option value="BB">Barbados</option>
	<option value="BY">Belarus</option>
	<option value="BE">Belgium</option>
	<option value="BZ">Belize</option>
	<option value="BJ">Benin</option>
	<option value="BM">Bermuda</option>
	<option value="BT">Bhutan</option>
	<option value="BO">Bolivia, Plurinational State of</option>
	<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
	<option value="BA">Bosnia and Herzegovina</option>
	<option value="BW">Botswana</option>
	<option value="BV">Bouvet Island</option>
	<option value="BR">Brazil</option>
	<option value="IO">British Indian Ocean Territory</option>
	<option value="BN">Brunei Darussalam</option>
	<option value="BG">Bulgaria</option>
	<option value="BF">Burkina Faso</option>
	<option value="BI">Burundi</option>
	<option value="KH">Cambodia</option>
	<option value="CM">Cameroon</option>
	<option value="CA">Canada</option>
	<option value="CV">Cape Verde</option>
	<option value="KY">Cayman Islands</option>
	<option value="CF">Central African Republic</option>
	<option value="TD">Chad</option>
	<option value="CL">Chile</option>
	<option value="CN">China</option>
	<option value="CX">Christmas Island</option>
	<option value="CC">Cocos (Keeling) Islands</option>
	<option value="CO">Colombia</option>
	<option value="KM">Comoros</option>
	<option value="CG">Congo</option>
	<option value="CD">Congo, the Democratic Republic of the</option>
	<option value="CK">Cook Islands</option>
	<option value="CR">Costa Rica</option>
	<option value="CI">Côte d'Ivoire</option>
	<option value="HR">Croatia</option>
	<option value="CU">Cuba</option>
	<option value="CW">Curaçao</option>
	<option value="CY">Cyprus</option>
	<option value="CZ">Czech Republic</option>
	<option value="DK">Denmark</option>
	<option value="DJ">Djibouti</option>
	<option value="DM">Dominica</option>
	<option value="DO">Dominican Republic</option>
	<option value="EC">Ecuador</option>
	<option value="EG">Egypt</option>
	<option value="SV">El Salvador</option>
	<option value="GQ">Equatorial Guinea</option>
	<option value="ER">Eritrea</option>
	<option value="EE">Estonia</option>
	<option value="ET">Ethiopia</option>
	<option value="FK">Falkland Islands (Malvinas)</option>
	<option value="FO">Faroe Islands</option>
	<option value="FJ">Fiji</option>
	<option value="FI">Finland</option>
	<option value="FR">France</option>
	<option value="GF">French Guiana</option>
	<option value="PF">French Polynesia</option>
	<option value="TF">French Southern Territories</option>
	<option value="GA">Gabon</option>
	<option value="GM">Gambia</option>
	<option value="GE">Georgia</option>
	<option value="DE">Germany</option>
	<option value="GH">Ghana</option>
	<option value="GI">Gibraltar</option>
	<option value="GR">Greece</option>
	<option value="GL">Greenland</option>
	<option value="GD">Grenada</option>
	<option value="GP">Guadeloupe</option>
	<option value="GU">Guam</option>
	<option value="GT">Guatemala</option>
	<option value="GG">Guernsey</option>
	<option value="GN">Guinea</option>
	<option value="GW">Guinea-Bissau</option>
	<option value="GY">Guyana</option>
	<option value="HT">Haiti</option>
	<option value="HM">Heard Island and McDonald Islands</option>
	<option value="VA">Holy See (Vatican City State)</option>
	<option value="HN">Honduras</option>
	<option value="HK">Hong Kong</option>
	<option value="HU">Hungary</option>
	<option value="IS">Iceland</option>
	<option value="IN">India</option>
	<option value="ID">Indonesia</option>
	<option value="IR">Iran, Islamic Republic of</option>
	<option value="IQ">Iraq</option>
	<option value="IE">Ireland</option>
	<option value="IM">Isle of Man</option>
	<option value="IL">Israel</option>
	<option value="IT">Italy</option>
	<option value="JM">Jamaica</option>
	<option value="JP">Japan</option>
	<option value="JE">Jersey</option>
	<option value="JO">Jordan</option>
	<option value="KZ">Kazakhstan</option>
	<option value="KE">Kenya</option>
	<option value="KI">Kiribati</option>
	<option value="KP">Korea, Democratic People's Republic of</option>
	<option value="KR">Korea, Republic of</option>
	<option value="KW">Kuwait</option>
	<option value="KG">Kyrgyzstan</option>
	<option value="LA">Lao People's Democratic Republic</option>
	<option value="LV">Latvia</option>
	<option value="LB">Lebanon</option>
	<option value="LS">Lesotho</option>
	<option value="LR">Liberia</option>
	<option value="LY">Libya</option>
	<option value="LI">Liechtenstein</option>
	<option value="LT">Lithuania</option>
	<option value="LU">Luxembourg</option>
	<option value="MO">Macao</option>
	<option value="MK">Macedonia, the former Yugoslav Republic of</option>
	<option value="MG">Madagascar</option>
	<option value="MW">Malawi</option>
	<option value="MY">Malaysia</option>
	<option value="MV">Maldives</option>
	<option value="ML">Mali</option>
	<option value="MT">Malta</option>
	<option value="MH">Marshall Islands</option>
	<option value="MQ">Martinique</option>
	<option value="MR">Mauritania</option>
	<option value="MU">Mauritius</option>
	<option value="YT">Mayotte</option>
	<option value="MX">Mexico</option>
	<option value="FM">Micronesia, Federated States of</option>
	<option value="MD">Moldova, Republic of</option>
	<option value="MC">Monaco</option>
	<option value="MN">Mongolia</option>
	<option value="ME">Montenegro</option>
	<option value="MS">Montserrat</option>
	<option value="MA">Morocco</option>
	<option value="MZ">Mozambique</option>
	<option value="MM">Myanmar</option>
	<option value="NA">Namibia</option>
	<option value="NR">Nauru</option>
	<option value="NP">Nepal</option>
	<option value="NL">Netherlands</option>
	<option value="NC">New Caledonia</option>
	<option value="NZ">New Zealand</option>
	<option value="NI">Nicaragua</option>
	<option value="NE">Niger</option>
	<option value="NG">Nigeria</option>
	<option value="NU">Niue</option>
	<option value="NF">Norfolk Island</option>
	<option value="MP">Northern Mariana Islands</option>
	<option value="NO">Norway</option>
	<option value="OM">Oman</option>
	<option value="PK">Pakistan</option>
	<option value="PW">Palau</option>
	<option value="PS">Palestinian Territory, Occupied</option>
	<option value="PA">Panama</option>
	<option value="PG">Papua New Guinea</option>
	<option value="PY">Paraguay</option>
	<option value="PE">Peru</option>
	<option value="PH">Philippines</option>
	<option value="PN">Pitcairn</option>
	<option value="PL">Poland</option>
	<option value="PT">Portugal</option>
	<option value="PR">Puerto Rico</option>
	<option value="QA">Qatar</option>
	<option value="RE">Réunion</option>
	<option value="RO">Romania</option>
	<option value="RU">Russian Federation</option>
	<option value="RW">Rwanda</option>
	<option value="BL">Saint Barthélemy</option>
	<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
	<option value="KN">Saint Kitts and Nevis</option>
	<option value="LC">Saint Lucia</option>
	<option value="MF">Saint Martin (French part)</option>
	<option value="PM">Saint Pierre and Miquelon</option>
	<option value="VC">Saint Vincent and the Grenadines</option>
	<option value="WS">Samoa</option>
	<option value="SM">San Marino</option>
	<option value="ST">Sao Tome and Principe</option>
	<option value="SA">Saudi Arabia</option>
	<option value="SN">Senegal</option>
	<option value="RS">Serbia</option>
	<option value="SC">Seychelles</option>
	<option value="SL">Sierra Leone</option>
	<option value="SG">Singapore</option>
	<option value="SX">Sint Maarten (Dutch part)</option>
	<option value="SK">Slovakia</option>
	<option value="SI">Slovenia</option>
	<option value="SB">Solomon Islands</option>
	<option value="SO">Somalia</option>
	<option value="ZA">South Africa</option>
	<option value="GS">South Georgia and the South Sandwich Islands</option>
	<option value="SS">South Sudan</option>
	<option value="ES">Spain</option>
	<option value="LK">Sri Lanka</option>
	<option value="SD">Sudan</option>
	<option value="SR">Suriname</option>
	<option value="SJ">Svalbard and Jan Mayen</option>
	<option value="SZ">Swaziland</option>
	<option value="SE">Sweden</option>
	<option value="CH">Switzerland</option>
	<option value="SY">Syrian Arab Republic</option>
	<option value="TW">Taiwan, Province of China</option>
	<option value="TJ">Tajikistan</option>
	<option value="TZ">Tanzania, United Republic of</option>
	<option value="TH">Thailand</option>
	<option value="TL">Timor-Leste</option>
	<option value="TG">Togo</option>
	<option value="TK">Tokelau</option>
	<option value="TO">Tonga</option>
	<option value="TT">Trinidad and Tobago</option>
	<option value="TN">Tunisia</option>
	<option value="TR">Turkey</option>
	<option value="TM">Turkmenistan</option>
	<option value="TC">Turks and Caicos Islands</option>
	<option value="TV">Tuvalu</option>
	<option value="UG">Uganda</option>
	<option value="UA">Ukraine</option>
	<option value="AE">United Arab Emirates</option>
	<option value="GB">United Kingdom</option>
	<option value="US">United States</option>
	<option value="UM">United States Minor Outlying Islands</option>
	<option value="UY">Uruguay</option>
	<option value="UZ">Uzbekistan</option>
	<option value="VU">Vanuatu</option>
	<option value="VE">Venezuela, Bolivarian Republic of</option>
	<option value="VN">Viet Nam</option>
	<option value="VG">Virgin Islands, British</option>
	<option value="VI">Virgin Islands, U.S.</option>
	<option value="WF">Wallis and Futuna</option>
	<option value="EH">Western Sahara</option>
	<option value="YE">Yemen</option>
	<option value="ZM">Zambia</option>
	<option value="ZW">Zimbabwe</option>
                </select>
        </div>
        <div className="col-lg-6">
            <input type="text" onChange={this.handleVendorChange} name="permanentBusinessType" className={this.state.errors.permanentBusinessType?"form-control error":"form-control"} placeholder="Primary Business Type"/>
        </div>
        <div className="col-lg-6">
            <input type="text" onChange={this.handleVendorChange} name="website" className={this.state.errors.website?"form-control error":"form-control"} placeholder="Website"/>
        </div>
        <div className="col-lg-3">
            <input type="submit" className="btn btn-danger w-100"/>
        </div>
    </div></form>;   
        const RenderJobSeeker = this.state.jobSeekerMsg?<p>{this.state.jobSeekerMsg}</p>:<form onSubmit={this.handleJobSeekerSubmit}><div className="row">
        <div className="col-lg-8">
            <h3>Current Openings</h3>
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-lg-4">
            <div className="contact-form">
                <div className="head">
                    <h4>want to join us ?</h4>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <input type="text" onChange={this.handlejobSeekerChange} name="seekerFullName" className={this.state.errors.seekerFullName?"form-control error":"form-control"} placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handlejobSeekerChange} name="seekerEmail" className={this.state.errors.seekerEmail?"form-control error":"form-control"} placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handlejobSeekerChange} name="seekerMobile" className={this.state.errors.seekerMobile?"form-control error":"form-control"} placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handlejobSeekerChange} name="applyingFor" className={this.state.errors.applyingFor?"form-control error":"form-control"} placeholder="Position Applying For" />
                    </div>
                    <div className="form-group">
                        <textarea className={this.state.errors.message?"form-control error":"form-control"} name={this.handlejobSeekerChange} name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" className="btn btn-danger"/ >
                    </div>
                </div>
               
            </div>
        </div>
    </div></form>;

        const showrecentTab = this.state.showTab?this.state.showTab:"";
        return(
            <div className="career-tile">
                <Header/>
                <InnerHeader title="Career" subTitle="work with us"/>
                <div className="container">
                    <div className="row text-center">
                        <div className={this.state.showTab=="vendor"?"col-lg-4 p-4 career-category active":"col-lg-4 p-4 career-category"} data-id="vendor"  onClick={this.changeTab}>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="vendor" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <h3 data-id="vendor" >Vendor</h3>
                                <p data-id="vendor" >We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                            
                           
                        </div>
                        <div  className={this.state.showTab=="job"?"col-lg-4 p-4 career-category active":"col-lg-4 p-4 career-category"} data-id="job Seeker" onClick={this.changeTab}>
                        <svg data-id="job" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="job seeker" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                            <h3 data-id="job">Job Seeker</h3>
                            <p data-id="job">We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                        </div>
                        <div className={this.state.showTab=="distributor"?"col-lg-4 p-4 career-category active":"col-lg-4 p-4 career-category"} data-id="vendor" onClick={this.changeTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="vendor"  viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                            <h3 data-id="distributor"> Distributor</h3>
                            <p data-id="distributor">We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    
                        {showrecentTab =="job"? RenderJobSeeker :showrecentTab=="distributor"? RenderDistributor:RenderVendor}
                    
                </div>
                <Footer/>
            </div>
        )
    }
  
}

export default Career;