import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class AddTask extends Component {
    
    // Stores the new task to be added's state
    state = {
        taskName: '',
        taskTime: ''
    }

    // Called when the "Submit" button triggers the onSubmit event in the form
    onSubmit = (e) => {
        // Prevent default HTML prompt from occuring
        e.preventDefault();
        // Use the function passed in the props
        this.props.addTask(this.state.taskName, this.state.taskTime);
        this.setState({
            taskName: '',
            taskTime: ''
        })
    }

    // Update the state whenever the input is altered so that onSubmit can retrieve it
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    style={inputStyle} 
                    type="text" 
                    name="taskName" 
                    placeholder="Task name"
                    value={this.state.taskName}
                    onChange={this.onChange} 
                />
                <input
                    style={inputStyle} 
                    type="text" 
                    name="taskTime" 
                    placeholder="Task time (hours)"
                    value={this.state.taskTime}
                    onChange={this.onChange} 
                />
                <Button style={buttonStyle} size="sm" value="Submit" type="submit" variant="primary"> Submit </Button>
            </form>
        )
    }
}

const inputStyle = {
    margin: '0px 0px 3px 3px',
    flex: '10',
    padding: '5px'
}

const buttonStyle = {
    margin: '0px 0px 2px 2px'
}

export default AddTask
