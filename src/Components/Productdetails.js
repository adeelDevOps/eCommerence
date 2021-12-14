import React, { useEffect, useState } from 'react'
import 'mdbreact/dist/css/mdb.css'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../Redux/Actions/actions'
import ProductPageHeader from '../Components/ProductPageHeader'
import { addtocart } from '../Redux/Actions/cartAction'

const Productdetails = (props) => {

    const [qty, SetQty] = useState()
    const productDetails = useSelector(state => state.productDetails)
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        debugger
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty) &&  dispatch(addtocart())
       
      };

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
    }, [])

    return (
        loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>) :
            <>
                <ProductPageHeader />
                <section className="mb-5 mt-5">

                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div id="mdb-lightbox-ui"></div>

                            <div className="mdb-lightbox">

                                <div className="row product-gallery mx-1">

                                    <div className="col-12 mb-0">
                                        <figure className="view overlay rounded z-depth-1 main-img">
                                            <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                data-size="710x823">
                                                <img src={product.image}
                                                    className="img-fluid z-depth-1" />
                                            </a>
                                        </figure>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6">

                            <h5>{product.name}</h5>
                            <p className="mb-2 text-muted text-uppercase small">{product.category}</p>
                            {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                            <ul className="rating">
                                <i className="fa fa-star fa-sm text-primary"></i>
                                <i className="fa fa-star fa-sm text-primary"></i>
                                <i className="fa fa-star fa-sm text-primary"></i>
                                <i className="fa fa-star fa-sm text-primary"></i>
                                <i className="fa fa-star fa-sm text-primary"></i>
                            </ul>
                            <p><span className="mr-1"><strong>${product.price}</strong></span></p>
                            <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                                error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                                officia quis dolore quos sapiente tempore alias.</p>
                            <hr />
                            <div className="table-responsive mb-2">
                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="pl-0 pb-0 w-25"><strong>Quantity</strong></td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">
                                                <div className="def-number-input number-input safari_only mb-0">
                                                    <select value={qty} onChange={(e) => { SetQty(e.target.value) }}>
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            {product.countInStock > 0 &&  (<button className="btn btn-light btn-md mr-1 mb-2" style={{backgroundColor: "#f7941d"}}><i
                                className="fa fa-shopping-cart pr-2" onClick= { handleAddToCart}></i>Add to cart</button>)}
                        </div>
                    </div>

                </section>

            </>
    )
}

export default Productdetails
