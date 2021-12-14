import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { signout } from '../Redux/Actions/userAction'

function Profile(props) {
    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const {loading, userInfo, error} = userSignin

    // useEffect(() => {
	// 	if (userInfo === null) {
            
	// 		props.history.push("/")
	// 	}
        
	// }, [userInfo])

    const signouthandler = (e) => {
        e.preventDefault();
        dispatch(signout())
        props.history.push("/")
        // window.location.reload()
    }
    return (
        <div className="profilenew">
            <div className="insideprofile">
                <ul>
                    <li><h2>{userInfo.name}</h2></li>
                {userInfo.isAdmin === true? <li className="btn btn-unique"><Link to="/products">Add New Products</Link></li>:""}
            <li><button className="btn btn-unique" onClick={signouthandler}>SignOut</button></li>
            </ul>
            </div>
        </div>
    )
}

export default Profile
