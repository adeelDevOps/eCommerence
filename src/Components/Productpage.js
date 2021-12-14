import React, {useState,useEffect} from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import {axios} from 'axios'
import { useSelector ,useDispatch} from 'react-redux'
import { listProducts } from '../Redux/Actions/actions'
import ProductPageHeader from './ProductPageHeader'

const Productpage = () => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');
  
    const productdata = useSelector(state => state.productList)
    const { product, loading, error } = productdata;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    // useEffect(() => {
    //   const sortArray = type => {
    //     const types = {
    //       price:"price"
    //     };
    //     const sortProperty = types[type];
    //     const sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
    //     setData(sorted);
    //   };
  
    //   sortArray(sortType);
    // }, [sortType]); 
    return (
        loading?(<div>Loading...</div>):error?(<div>{error}</div>):
        <>
        
            <ProductPageHeader/>

            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                <ul className="bread-list">
                                    <li><Link to="/" >Home<i className="ti-arrow-right"></i></Link></li>
                                    <li className="active"><Link to="/productpage">Products</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumbs -->
		
		<!-- Product Style --> */}
            <section className="product-area shop-sidebar shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="shop-sidebar">
                                {/* <!-- Single Widget --> */}
                                <div className="single-widget category">
                                    <h3 className="title">Categories</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">T-shirts</a></li>
                                        <li><a href="#">jacket</a></li>
                                        <li><a href="#">jeans</a></li>
                                        <li><a href="#">sweatshirts</a></li>
                                        <li><a href="#">trousers</a></li>
                                        <li><a href="#">kitwears</a></li>
                                        <li><a href="#">accessories</a></li>
                                    </ul>
                                </div>
                                {/* <!--/ End Single Widget -->
								<!-- Single Widget --> */}
                                <div className="single-widget category">
                                    <h3 className="title">Manufacturers</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">Forever</a></li>
                                        <li><a href="#">giordano</a></li>
                                        <li><a href="#">abercrombie</a></li>
                                        <li><a href="#">ecko united</a></li>
                                        <li><a href="#">zara</a></li>
                                    </ul>
                                </div>
                                {/* <!--/ End Single Widget --> */}
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    {/* <!-- Shop Top --> */}
                                    <div className="shop-top">
                                        <div className="shop-shorter">
                                            <div className="single-shorter">
                                                <label>Show :</label>
                                                <select>
                                                    <option selected="selected">09</option>
                                                    <option>15</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                </select>
                                            </div>
                                            <div className="single-shorter">
                                                <label>Sort By :</label>
                                                <select onChange={(e) => setSortType(e.target.value)}>
                                                    <option selected="selected">Select Option</option>
                                                    <option value="price">Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/ End Shop Top --> */}
                                </div>
                            </div>
                            <div className="row">
                                { productdata.products?.map((item) => (
                                    <div classNameName="col-lg-4 col-md-6 col-12">
                                        <div classNameName="single-product">
                                            <div classNameName="product-img">
                                                <img classNameName="default-img" src={item.image} alt="#" />
                                                <div classNameName="button-head">
                                                    <div classNameName="product-action-2">
                                                    <Link to="/cart/:id?">Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div classNameName="product-content">
                                                <h3><Link to={"/productdetail/"+ item._id}>{item.name}</Link></h3>
                                                <div classNameName="product-price">
                                                    <span>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Product Style 1  -->	

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




            <Footer />

        </>
    )
}

export default Productpage
