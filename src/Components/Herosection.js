import React from 'react'
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

const  Herosection = () => {
    return (
        <>
        <section className="hero-slider">
		<div className="single-slider">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-lg-9 offset-lg-3 col-12">
						<div className="text-inner">
							<div className="row">
								<div className="col-lg-7 col-12">
									<div className="hero-text">
										<h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
										<p>Maboriosam in a nesciung eget magnae <br/> dapibus disting tloctio in the find it pereri <br/> odiy maboriosm.</p>
										<div className="button">
											<a href="#" className="btn">Shop Now!</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="small-banner section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://wpthemesgrid.com/themes/eshop/images/mini-banner1.jpg" alt="#"/>
						<div class="content">
							<p>Man's Collectons</p>
							<h3>Summer travel <br/> collection</h3>
							<a href="#">Discover Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}

export default Herosection
