import React,{useEffect} from 'react'
import '../App.css'
import './Web.css'
import './Responsive.css'
import './Icons.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Topbar = () => {

    const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin

  useEffect(() => {
      
  }, [userSignin])
debugger
    return (
        <div>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
                                    <li><i className="ti-email"></i> support@emart.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                          
                            <div className="right-content">
                                <ul className="list-main">
                                    <li><i className="ti-location-pin"></i> Store location</li>
                                    <li><i className="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                                    <li><i className="ti-power-off"></i>{userInfo !== null ? <Link to="/profile">{userInfo.name}</Link>:<Link to= "/signin">Login</Link> }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
