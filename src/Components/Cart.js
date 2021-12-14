import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductPageHeader from './ProductPageHeader'
import { addtocart, removeFromCart,emptycart } from '../Redux/Actions/cartAction'

const Cart = (props) => {
	const cart = useSelector(state => state.cart)
	console.log("cart",cart)
	const {cartItems} = cart
	const productId = props.match.params.id
	const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
	const dispatch = useDispatch()
	const removeFromCartHandler = () =>{
		dispatch(removeFromCart(productId))
	}
	const Emptycart = (e) =>{
		dispatch(emptycart())
		// window.location.reload()
	}
	useEffect(() => {
			dispatch(addtocart(productId, qty))
	}, [])

	const checkouthandler = () =>{
		props.history.push("/signin?redirect=shipping")
	}

	return (
		<>
			<ProductPageHeader />

			{/* <!-- Breadcrumbs --> */}
			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="bread-inner">
								<ul className="bread-list">
									<li><Link to="/productpage">Back to Products<i className="ti-arrow-left"></i></Link></li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Breadcrumbs --> */}

			{/* <!-- Shopping Cart --> */}
			<div className="shopping-cart section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* <!-- Shopping Summery --> */}
							<table className="table shopping-summery">
								<thead>
									
									<tr className="main-hading">
										<button onClick={Emptycart}>empty</button>
									
										<th>PRODUCT</th>
										<th>NAME</th>
										<th className="text-center">UNIT PRICE</th>
										<th className="text-center">QUANTITY</th>
										<th className="text-center">TOTAL</th>
										<th className="text-center"><i className="ti-trash remove-icon"></i></th>
									</tr>
								</thead>
								<tbody>
									{/* {cartItems?.map((item) => ( */}
										{cartItems !== null? Object.keys(cartItems).map:((item) => (


									<tr>
										<td className="image" data-title="No"><img src={item.image} alt="#" /></td>
										<td className="product-des" data-title="Description">
											<p className="product-name"><Link to = {"/productdetail/" + item.product}>{item.name}</Link> </p>
											<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
										</td>
										<td className="price" data-title="Price"><span>{item.price} </span></td>
										<td className="qty" data-title="Qty">
											{/* <!-- Input Order --> */}

											<select className="nice-select" valve={item.qty} onChange={((e) => dispatch( addtocart(item.product, e.target.value)))}>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>

											{/* <!--/ End Input Order --> */}
										</td>
										<td className="total-amount" data-title="Total"><span>$220.88</span></td>
										<td className="action" data-title="Remove"><a onClick={() => removeFromCartHandler(item.product)}><i className="ti-trash remove-icon"></i></a></td>
									</tr>
									))}
								</tbody>
							</table>
							{/* <!--/ End Shopping Summery --> */}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							{/* <!-- Total Amount --> */}
							<div className="total-amount">
								<div className="row">
									<div className="col-lg-8 col-md-5 col-12">
										<div className="left">
											<div className="coupon">
												<form action="#" target="_blank">
													<input name="Coupon" placeholder="Enter Your Coupon" />
													<button className="btn">Apply</button>
												</form>
											</div>
											<div className="checkbox">
												<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Shipping (+10$)</label>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-7 col-12">
										<div className="right">
											<ul>
												<li>Cart Subtotal<span>({cartItems !== null? Object.keys(cartItems).reduce((a ,c ) => a + c.qty, 0):"" } item)
												:
												$ { cartItems !== null? Object.keys(cartItems).reduce((a ,c ) => a + c.price * c.qty, 0):"" }
												 </span></li>
												<li>Shipping<span>Free</span></li>
											</ul>
											<div className="button5">
												<a href="" className="btn" aria-disabled={cartItems !== null? Object.keys(cartItems).length === 0:""} onClick={checkouthandler}>Checkout</a>
												<a href="#" className="btn">Continue shopping</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End Total Amount --> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Shopping Cart --> */}

			{/* <!-- Start Shop Services Area  --> */}
			<section className="shop-services section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
							{/* <!-- Start Single Service --> */}
							<div className="single-service">
								<i className="ti-rocket"></i>
								<h4>Free shiping</h4>
								<p>Orders over $100</p>
							</div>
							{/* <!-- End Single Service --> */}
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							{/* <!-- Start Single Service --> */}
							<div className="single-service">
								<i className="ti-reload"></i>
								<h4>Free Return</h4>
								<p>Within 30 days returns</p>
							</div>
							{/* <!-- End Single Service --> */}
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							{/* <!-- Start Single Service --> */}
							<div className="single-service">
								<i className="ti-lock"></i>
								<h4>Sucure Payment</h4>
								<p>100% secure payment</p>
							</div>
							{/* <!-- End Single Service --> */}
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							{/* <!-- Start Single Service --> */}
							<div className="single-service">
								<i className="ti-tag"></i>
								<h4>Best Peice</h4>
								<p>Guaranteed price</p>
							</div>
							{/* <!-- End Single Service --> */}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Shop Newsletter -->
	
	<!-- Start Shop Newsletter  --> */}
			<section className="shop-newsletter section">
				<div className="container">
					<div className="inner-top">
						<div className="row">
							<div className="col-lg-8 offset-lg-2 col-12">
								{/* <!-- Start Newsletter Inner --> */}
								<div className="inner">
									<h4>Newsletter</h4>
									<p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
									<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
										<input name="EMAIL" placeholder="Your email address" required="" type="email" />
										<button className="btn">Subscribe</button>
									</form>
								</div>
								{/* <!-- End Newsletter Inner --> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Shop Newsletter --> */}

			{/* <!-- Start Footer Area --> */}
			<footer className="footer">
				{/* <!-- Footer Top --> */}
				<div className="footer-top section">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6 col-12">
								{/* <!-- Single Widget --> */}
								<div className="single-footer about">
									<div className="logo">
										<a href="index.html"><img src="images/logo2.png" alt="#" /></a>
									</div>
									<p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
									<p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
								</div>
								{/* <!-- End Single Widget --> */}
							</div>
							<div className="col-lg-2 col-md-6 col-12">
								{/* <!-- Single Widget --> */}
								<div className="single-footer links">
									<h4>Information</h4>
									<ul>
										<li><a href="#">About Us</a></li>
										<li><a href="#">Faq</a></li>
										<li><a href="#">Terms & Conditions</a></li>
										<li><a href="#">Contact Us</a></li>
										<li><a href="#">Help</a></li>
									</ul>
								</div>
								{/* <!-- End Single Widget --> */}
							</div>
							<div className="col-lg-2 col-md-6 col-12">
								{/* <!-- Single Widget --> */}
								<div className="single-footer links">
									<h4>Customer Service</h4>
									<ul>
										<li><a href="#">Payment Methods</a></li>
										<li><a href="#">Money-back</a></li>
										<li><a href="#">Returns</a></li>
										<li><a href="#">Shipping</a></li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</div>
								{/* <!-- End Single Widget --> */}
							</div>
							<div className="col-lg-3 col-md-6 col-12">
								{/* <!-- Single Widget --> */}
								<div className="single-footer social">
									<h4>Get In Tuch</h4>
									{/* <!-- Single Widget --> */}
									<div className="contact">
										<ul>
											<li>NO. 342 - London Oxford Street.</li>
											<li>012 United Kingdom.</li>
											<li>info@eshop.com</li>
											<li>+032 3456 7890</li>
										</ul>
									</div>
									{/* <!-- End Single Widget --> */}
									<ul>
										<li><a href="#"><i className="ti-facebook"></i></a></li>
										<li><a href="#"><i className="ti-twitter"></i></a></li>
										<li><a href="#"><i className="ti-flickr"></i></a></li>
										<li><a href="#"><i className="ti-instagram"></i></a></li>
									</ul>
								</div>
								{/* <!-- End Single Widget --> */}
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End Footer Top --> */}
				<div className="copyright">
					<div className="container">
						<div className="inner">
							<div className="row">
								<div className="col-lg-6 col-12">
									<div className="left">
										<p>Develop by Ahmad - All Rights Reserved.</p>
									</div>
								</div>
								<div className="col-lg-6 col-12">
									<div className="right">
										<img src="images/payments.png" alt="#" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}

export default Cart
