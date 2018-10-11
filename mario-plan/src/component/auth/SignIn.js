import React, { Component } from 'react'
import{connect}from'react-redux'
import{signIn}from'../../store/action/authAction'

class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  
  onChange=(e)=>{
    this.setState({[e.target.id]:e.target.value})
  }

  onSubmit=(e)=>{
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const {authError}=this.props
    return (
    <div className='container'>

    <form onSubmit={this.onSubmit} className='white'>
    <h5 className='grey-text text-darken-3'>Sign In</h5>
    <div className='input-field'>
    <label htmlFor='email'>Email</label>
    <input type='email' id='email' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <label htmlFor='password'>Password</label>
    <input type='password' id='password' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <button className='btn pink lighten-1'>Login</button>
    <div className='red-text center'>
    {authError?<p>{authError}</p>:null}
    </div>
    </div>
    </form>

    </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signIn:(credentials)=>dispatch(signIn(credentials))
  }
}

const mapStateToProps=(state)=>{
  return{
    authError:state.authReducer.authError
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)