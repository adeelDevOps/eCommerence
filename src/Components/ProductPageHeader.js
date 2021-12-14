import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import { useSelector } from 'react-redux'

function ProductPageHeader() {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin
    return (
        <div>
            <header className="header shop">
                {/* <!-- Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                {/* <!-- Top Left --> */}
                                <div className="top-left">
                                    <ul className="list-main">
                                        <li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
                                        <li><i className="ti-email"></i> support@shophub.com</li>
                                    </ul>
                                </div>
                                {/* <!--/ End Top Left --> */}
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                {/* <!-- Top Right --> */}
                                <div className="right-content">
                                    <ul className="list-main">
                                        <li><i className="ti-location-pin"></i> Store location</li>
                                        <li><i className="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                                        <li><i className="ti-power-off"></i>{userInfo ? <Link to="/profile">{userInfo.name}</Link>:<Link to= "/signin">Login</Link> }</li>
                                    </ul>
                                </div>
                                {/* <!-- End Top Right --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Topbar --> */}
                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                {/* <!-- Logo --> */}
                                <div className="logo">
                                    <a href="index.html"><img src={logo} alt="logo" /></a>
                                </div>
                                {/* <!--/ End Logo -->
							<!-- Search Form --> */}
                                <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                                    {/* <!-- Search Form --> */}
                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search" />
                                            <button value="search" type="submit"><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                    {/* <!--/ End Search Form --> */}
                                </div>
                                {/* <!--/ End Search Form --> */}
                                <div className="mobile-nav"></div>
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">

                                        <form>
                                            <input name="search" placeholder="Search Products Here....." type="search" />
                                            <button className="btnn"><i className="ti-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">
                                    {/* <!-- Search Form --> */}
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar">
                                        <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
                                        {/* <!-- Shopping Item --> */}
                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Items</span>
                                                <a href="#">View Cart</a>
                                            </div>
                                            <ul className="shopping-list">
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="images/product-1.jpg" alt="#" /></a>
                                                    <h4><a href="#">Woman Ring</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                </li>
                                                <li>
                                                    <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                                                    <a className="cart-img" href="#"><img src="images/product-2.jpg" alt="#" /></a>
                                                    <h4><a href="#">Woman Necklace</a></h4>
                                                    <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                </li>
                                            </ul>
                                            <div className="bottom">
                                                <div className="total">
                                                    <span>Total</span>
                                                    <span className="total-amount">$134.00</span>
                                                </div>
                                                <a href="checkout.html" className="btn animate">Checkout</a>
                                            </div>
                                        </div>
                                        {/* <!--/ End Shopping Item --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Inner --> */}
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                <div className="col-12">
                                    <div className="menu-area">
                                        {/* <!-- Main Menu --> */}
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="navbar-collapse">
                                                <div className="nav-inner">
                                                    <ul className="nav main-menu menu navbar-nav">
                                                        <li className="active"><Link to="/">Home</Link>
                                                        </li>
                                                        <li><Link to="/productpage">Product</Link></li>
                                                        <li><a href="#">Service</a></li>
                                                        <li><a href="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                                                            <ul className="dropdown">
                                                                <li><Link to="/cart"> Cart</Link></li>
                                                                <li><Link to= "/checkout"> Checkout</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Pages<i className="ti-angle-down"></i></a>
                                                            <ul className="dropdown">
                                                                <li><a href="about-us.html">About Us</a></li>
                                                                <li><a href="login.html">Login</a></li>
                                                                <li><a href="register.html">Register</a></li>
                                                                <li><a href="mail-success.html">Mail Success</a></li>
                                                                <li><a href="404.html">404</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Blog</a>
                                                        </li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {/* <!--/ End Main Menu -->	 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Header Inner --> */}
            </header>
        </div>
    )
}

export default ProductPageHeader
