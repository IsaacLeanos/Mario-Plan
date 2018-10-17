import React from 'react'
import{Link}from'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import{connect}from'react-redux'


const NavBar=(props)=>{
    const{auth,profile}=props
    const links=auth.uid?<SignedInLink initials={profile.initials}/>:<SignedOutLink/>
    return(
        <nav                   className='nav-wrapper grey darken-3'>
        <div                   className='container'>
        <Link                  to='/' className='brand-logo'>Mario Plan</Link>
        {links}
        </div> 
        </nav>
    )
}

const mapStateToProps=(state)=>{
    console.log('NavBar',state)
    return{
        auth:state.firebaseReducer.auth,
        profile:state.firebaseReducer.profile
    }
}

export default connect(mapStateToProps)(NavBar)
