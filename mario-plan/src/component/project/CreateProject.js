import React, { Component } from 'react'

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
  }

  render() {
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
    <button className='btn pink lighten-1'>Login</button>
    </div>
    </form>

    </div>
    )
  }
}

export default CreateProject