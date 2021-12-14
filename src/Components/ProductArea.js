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
import { Link } from 'react-router-dom'
import Modaal from './Modal'
import { Box, Modal, Button } from '@mui/material';
import { Typography } from '@material-ui/core'
import { margin } from '@mui/system'


const ProductArea = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const data = [
        {
            name: "Slim Shirt",
            price: 60.00,
            image: 'https://wpthemesgrid.com/themes/eshop/images/products/p2.jpg',
            category: "shirt",
            reviews: 4.5
        },
        {
            name: "Slim Shirt",
            price: 60.00,
            image: 'https://wpthemesgrid.com/themes/eshop/images/products/p2.jpg',
            category: "shirt",
            reviews: 4.5
        },
        {
            name: "Slim Shirt",
            price: 60.00,
            image: 'https://wpthemesgrid.com/themes/eshop/images/products/p2.jpg',
            category: "shirt",
            reviews: 4.5
        },
        {
            name: "Slim Shirt",
            price: 60.00,
            image: 'https://wpthemesgrid.com/themes/eshop/images/products/p2.jpg',
            category: "shirt",
            reviews: 4.5
        }
    ]
    console.log(data);

    return (
        <>
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                    </ul>
                                </div>
                                <div className="" id="myTabContent">
                                    <div className="tab-pane fade show active wbackground" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {data.map((item) => (
                                                    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                        <div className="single-product">
                                                            <div className="product-img">
                                                                <img className="default-img" src={item.image} alt="#" />
                                                                <div className="button-head">
                                                                    
                                                                    <div className="product-action-2">
                                                                        <Link to="/cart">Add to cart</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h3><a href="product-details.html">{item.name}</a></h3>
                                                                <div className="product-price">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="mmain">
                    <Box className="alignMent row">
                        <Box className="leftt col-sm-12 col-md-6 col-lg-6">
                            <Modaal handleClose={handleClose} />
                        </Box>
                        <Box className="rightt col-sm-12 col-md-6 col-lg-6">
                            <Box className="col-12">
                                <h2>Flared Shift Dress</h2>
                                <div className="quickview-rating-wrap">
                                    <div className="quickview-rating">
                                        <i className="yellow fa fa-star" style={{ color: "#f5b223", marginTop: "12px" }}></i>
                                        <i className="yellow fa fa-star" style={{ color: "#f5b223", marginTop: "12px" }}></i>
                                        <i className="yellow fa fa-star" style={{ color: "#f5b223", marginTop: "12px" }}></i>
                                        <i className="yellow fa fa-star" style={{ color: "#f5b223", marginTop: "12px" }}></i>
                                        <i className="yellow fa fa-star" style={{ color: "#f5b223", marginTop: "12px" }}></i>
                                        <a href="#" style={{ color: "#262626", fontSize: "12px", marginLeft: "5px" }}> (1 customer review)</a>

                                        <div className="quickview-stock">
                                            <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                        </div>
                                    </div>
                                </div>
                                <h4>$29.00</h4>
                            </Box>
                            <div className="quickview-peragraph" style={{ padding: "inherit", margin: "8px 0 0 0" }}>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.
                                </Typography>
                            </div>
                            <div className="size">
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-lg-6 col-12">
                                        <h5 className="title">Size</h5>
                                        <select name="size" value="type" className="nice-select" style={{ padding: "inherit", margin: "10px" }}>
                                            <option className="option">s</option>
                                            <option className="option">m</option>
                                            <option className="option">l</option>
                                            <option className="option">xl</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <h5 className="title">Color</h5>
                                        <select name="size" value="type" className="nice-select" style={{ padding: "inherit", margin: "10px" }}>
                                            <option className="option">Orange</option>
                                            <option className="option">Purple</option>
                                            <option className="option">Black</option>
                                            <option className="option">Pink</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="quantity" style={{ display: 'inline-block' }}>
                                <div className="input-group">
                                    <div className="button minus">
                                        <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                            <i className="ti-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" name="quant[1]" className="input-number" data-min="1" data-max="1000" value="1" />
                                    <div className="button plus">
                                        <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                            <i className="ti-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="add-to-cart" style={{display:'inline-block'}}>
                                <a href="#" className="btn">Add to cart</a>
                                <a href="#" className="btn min"><i className="ti-heart"></i></a>
                                <a href="#" className="btn min"><i className="fa fa-compress"></i></a>
                            </div> */}
                        </Box>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default ProductArea
