import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    HandleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    HandleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.HandleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" onChange={this.HandleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content" id="content" className='materialize-textarea' onChange={this.HandleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;
