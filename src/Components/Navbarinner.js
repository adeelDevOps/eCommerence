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

function Navbarinner() {

	
    return (
        <>
        <div className="all-category">
								<h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
								<ul className="main-category">
									<li><a href="#">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul className="sub-category">
											<li><a href="#">accessories</a></li>
											<li><a href="#">best selling</a></li>
											<li><a href="#">top 100 offer</a></li>
											<li><a href="#">sunglass</a></li>
											<li><a href="#">watch</a></li>
											<li><a href="#">man’s product</a></li>
											<li><a href="#">ladies</a></li>
											<li><a href="#">westrn dress</a></li>
											<li><a href="#">denim </a></li>
										</ul>
									</li>
									<li className="main-mega"><a href="#">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul className="mega-menu">
											<li className="single-menu">
												<a href="#" className="title-link">Shop Kid's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="#">Kids Toys</a>
													<a href="#">Kids Travel Car</a>
													<a href="#">Kids Color Shape</a>
													<a href="#">Kids Tent</a>
												</div>
											</li>
											<li className="single-menu">
												<a href="#" className="title-link">Shop Men's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="#">Watch</a>
													<a href="#">T-shirt</a>
													<a href="#">Hoodies</a>
													<a href="#">Formal Pant</a>
												</div>
											</li>
											<li className="single-menu">
												<a href="#" className="title-link">Shop Women's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="#">Ladies Shirt</a>
													<a href="#">Ladies Frog</a>
													<a href="#">Ladies Sun Glass</a>
													<a href="#">Ladies Watch</a>
												</div>
											</li>
										</ul>
									</li>
									<li><a href="#">accessories</a></li>
									<li><a href="#">top 100 offer</a></li>
									<li><a href="#">sunglass</a></li>
									<li><a href="#">watch</a></li>
									<li><a href="#">man’s product</a></li>
									<li><a href="#">ladies</a></li>
									<li><a href="#">westrn dress</a></li>
									<li><a href="#">denim </a></li>
								</ul>
							</div>
        
        
        
        </>
    )
}

export default Navbarinner
