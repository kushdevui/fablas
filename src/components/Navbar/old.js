<div className="row">
                <div className="col-lg-2 col-sm-12">
                    <NavbarBrand href="#/">
                            <Logo/>
                    </NavbarBrand>
                </div>
                 <div className="navbar-section navbar-collapse collpase col-lg-7 col-sm-12">
                    <ul class="nav site-nav">
                        <li><a href="#/">Home</a></li>
                        <li className="flyout">
                            <a href="#/About">About Us</a>
                            <ul className="flyout-content nav stacked">
                               {/* <li><a>Director's Message</a></li>
                               <li><a>Our Values</a></li>
                               <li><a>Strengths</a></li>
                               <li><a>Our Network</a></li> */}
                            </ul>
                        </li>
                        <li><a href="#/Services">Services</a></li>
                        <li className="flyout">
                            <a href="#" onClick={this.toggle}>Products</a>
                            {this.state.isOpen ?   <div className="products-dropdown">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul>
                                           {CagegoryList}
                                        </ul>
                                    </div>
                                    <div className="col-lg-8 sub-cat">
                                        {this.state.subMenu.map(item=>
                                        {
                                           return( <div className="row mt-3">
                                                <div className="col-lg-12">
                                               <Link to={`/Products/${item.id}`} >{item.name}</Link>
                                                    <ul>
                                                        {item.productsList.map(productItem=>{
                                                            return(
                                                                <li>{productItem.name}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>)
                                        })}
                                        </div>
                                    </div>
                                </div>
                            : ""}
                        </li>
                        <li><a href="#/shop">Shop</a></li>
                        <li><a href="#/News">News</a></li>
                        <li><a href="#/Career">Career</a></li>
                        <li><a href="#/Contact">Contact Us</a></li>
                    </ul>​
                   
                </div>
                <div className="col-lg-3 col-sm-12 pt-3 icon-palat">
                    <span><FontAwesomeIcon icon={faShoppingCart } style={{color:'red'}} size="sm" /></span>
                    <span className="navbar-search">
                        <input type="text" name="search-box" value=""/>
                        <FontAwesomeIcon className="search-icon" icon={faSearch}  style={{ color: 'white' }} size="sm"/>
                    </span>
                    <span><FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'google']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'twitter']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'instagram']}   style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'linkedin-in']}   style={{ color: 'red' }} size="sm"/></span>

                </div>
            </div>