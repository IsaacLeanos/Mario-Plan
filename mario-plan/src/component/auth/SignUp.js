import React, { Component } from 'react'
import{Redirect}from'react-router-dom'
import {connect}from'react-redux';
import{signUp}from'../../store/action/authAction'

class SignUp extends Component {
  state={
    email:'',
    password:'',
    firstName:'',
    lastName:''
  }
  
  onChange=(e)=>{
    this.setState({[e.target.id]:e.target.value})
  }

  onSubmit=(e)=>{
    e.preventDefault()
    this.props.signUp(this.state)
    // console.log('signup')
  }

  render() {
    const{auth,authError}=this.props
    if(auth.uid)return <Redirect to='/'/>
    return (
    <div className='container'>

    <form                      onSubmit={this.onSubmit} className='white'>
    <h5                        className='grey-text text-darken-3'>Sign Up</h5>
    <div                       className='input-field'>
    <label                     htmlFor='email'>Email</label>
    <input                     type='email' id='email' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <label htmlFor='password'>Password</label>
    <input type='password' id='password' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <label htmlFor='firstName'>First Name</label>
    <input type='text' id='firstName' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <label htmlFor='lastName'>Last Name</label>
    <input type='text' id='lastName' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <button className='btn pink lighten-1'>Sign Up</button>
    </div>
    
    <div className='red-text center'>
    {authError?<p>{authError}</p>:null}
    </div>
    </form>

    </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebaseReducer.auth,
    authError:state.authReducer.authError
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signUp:newUser=>dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)