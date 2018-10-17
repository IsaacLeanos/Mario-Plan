import React, { Component } from 'react'
import {createProject} from '../../store/action/projectAction'
import{connect}from'react-redux'
import{Redirect}from'react-router-dom'


class CreateProject extends Component {
  state={
    title:'',
    content:''
  }
  
  onChange=(e)=>{
    this.setState({[e.target.id]:e.target.value})
  }

  onSubmit=(e)=>{
    e.preventDefault()
    this.props.createProject(this.state)
    console.log('props',this.props)
    this.props.history.push('/')
  }

  render() {
    const{auth}=this.props
    if(!auth.uid)return <Redirect to='signin'/>
    return (
    <div className='container'>

    <form                      onSubmit={this.onSubmit} className='white'>
    <h5 className='grey-text text-darken-3'>New Project</h5>
    <div className='input-field'>
    <label htmlFor='title'>Title</label>
    <input type='text' id='title' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <label htmlFor='password'>Project Content</label>
    <textarea  className='materialize-textarea' id='content' onChange={this.onChange}/>
    </div>

    <div className='input-field'>
    <button className='btn pink lighten-1'>Create</button>
    </div>
    </form>

    </div>
    )
  }
}

const mapStateToProps=(state)=>({
  auth:state.firebaseReducer.auth
})

const mapDispatchToProps=(dispatch)=>({
  createProject:project=>dispatch(createProject(project))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)