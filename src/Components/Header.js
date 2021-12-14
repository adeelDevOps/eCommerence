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
import Topbar from './Topbar'
import Navbar from './Navbar'
import Navbarmain from './Navbmain'

const  Header = () => {

    return (
       <>
       <header className = "header shop">
        <Topbar/>
        <Navbar/>
        <Navbarmain/>
       </header>
       
       </>
    )
}
export default Header