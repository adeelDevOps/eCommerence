import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import './Web.css'
import './Responsive.css'
import './Icons.css'
import './font-awesome.css'
import './animate.css'
import './Flex-Slider.css'
import './slicknav-min.css'
import './jquery-fancybox-min.css'
import './Magnific-Popup-CSS.css'
import './magnific-popup.min.css'
import './nice-select.css'
import './niceselect.css'
import './owl-carousel.css'
import './reset.css'
import Navbarinner from './Navbarinner'
import {Link} from 'react-router-dom'

const Navbarmain = () => {
	
    return (
        <>
        <div className="header-inner">
			<div className="container">
				<div className="cat-nav-head">
					<div className="row">
						<div className="col-lg-3">
							<Navbarinner/>
						</div>
						<div className="col-lg-9 col-12">
							<div className="menu-area">
								<nav className="navbar navbar-expand-lg">
									<div className="navbar-collapse">	
										<div className="nav-inner">	
											<ul className="nav main-menu menu navbar-nav">
													<li className="active"><Link to="/">Home</Link></li>
													<li><Link to="/productpage">Product</Link></li>												
													<li><a href="#">Service</a></li>
													<li><a href="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
														<ul className="dropdown">
															<li><Link to="/cart">Cart</Link></li>
															<li><Link to="/checkout">Check Out</Link></li>
														</ul>
													</li>								
													<li><a href="#">Blog<i className="ti-angle-down"></i></a>
														<ul className="dropdown">
															<li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
														</ul>
													</li>
													<li><a href="contact.html">Contact Us</a></li>
													
												</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        
        </>
    )
}

export default Navbarmain
