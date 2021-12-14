import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './signin.css'
import {register} from '../Redux/Actions/userAction'

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const userRegister = useSelector(state => state.userRegister)
    const {loading, userInfo, error} = userRegister
    const dispatch = useDispatch()

    console.log(name,email,password)

	useEffect(() => {
		if (userInfo) {
			props.history.push("/signin")
		}

	}, [userInfo])

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(register(name,email,password))
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
					<label className="labeln">Enter Name</label><input name="name" onChange={(e) => setName(e.target.value)} className="text" type="text" placeholder="Enter name" required=""/>
					<label className="labeln">Enter Email</label><input name="email" onChange={(e) => setEmail(e.target.value)} className="text" type="email" placeholder="Enter Email" required=""/>
                    <label className="labelm">Enter Passwrod</label>	<input name="password" onChange={(e) => setPassword(e.target.value)} className="text" type="password" placeholder="Password" required=""/>
                    <label className="labelm">Enter Re Enter Passwrod</label>	<input name="repassword" onChange={(e) => setRePassword(e.target.value)} className="text" type="password" placeholder="Password" required=""/>
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN UP"/>
				</form>
				<p>Already have any Account<Link to="/signin"> Sign In Now</Link></p>
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

export default Register
