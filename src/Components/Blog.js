import React from 'react'
import img1 from '../Images/blog1.jpg'
import img2 from '../Images/blog2.jpg'
import img3 from '../Images/blog3.jpg'

function Blog() {
    return (
        <>
            <section class="shop-blog section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>From Our Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src={img1} alt="#"/>
                                <div class ="content">
                                <p class ="date">12 October, 2021. Monday</p>
                                <a href="#" class ="title">Sed adipiscing ornare.</a>
                                <a href="#" class ="more-btn">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src={img2} alt="#"/>
                                <div class ="content">
                                <p class ="date">12 October, 2021. Monday</p>
                                <a href="#" class ="title">Man’s Fashion Winter Sale</a>
                                <a href="#" class ="more-btn">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src={img3} alt="#"/>
                                <div class ="content">
                                <p class ="date">12 October, 2021. Mondayy</p>
                                <a href="#" class ="title">Women Fashion Festive</a>
                                <a href="#" class ="more-btn">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
