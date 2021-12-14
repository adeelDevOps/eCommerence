import React from 'react'
import Herosection from './Herosection';
import ProductArea from './ProductArea';
import Blog from './Blog'
import Shopservices from './Shop-services'
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <div>
        <Header />
        <Herosection />
        <ProductArea />
        <Blog />
        <Shopservices />
        <Footer />
        </div>
    )
}

export default Home
