import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { signin } from '../Redux/Actions/userAction'
import './signin.css'


const Signin = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state => state.userSignin)
    const {loading, userInfo, error} = userSignin
	console.log(userInfo);
    const dispatch = useDispatch()

	useEffect(() => {
		if (userInfo) {
			props.history.push("/")
		}

	}, [userInfo])



    const submithandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password))
    }

    
    
    return (

        <>
        <div className="main-w3layouts wrapper">
		<h1>Sign In</h1>
		{loading && <div>Loading...</div>}
		{error && <div>error...</div>}
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form onSubmit={submithandler}>
					<label className="labeln">Enter Email</label><input name="email" onChange={(e) => setEmail(e.target.value)} className="text" type="email" placeholder="Enter Email" required=""/>
                    <label className="labelm">Enter Passwrod</label>	<input name="password" onChange={(e) => setPassword(e.target.value)} className="text" type="password" placeholder="Password" required=""/>
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN IN"/>
				</form>
				<p>Are you new on eShop<Link to="/register"> Sign Up Now</Link></p>
			</div>
		</div>
		<ul className="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
        </>
    )
}

export default Signin
