import React, { Component } from 'react'
import Button from 'react-bootstrap/button';

class TaskItem extends Component {

    // Set a function to style this component
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '4px',
        }
    }

    render() {
        const { id, taskName, taskTime } = this.props.task;

        return (
            <div style={this.getStyle()}>
                <p> 
                    {taskName} 
                    <Button style={buttonStyle} size="sm" onClick={this.props.deleteTask.bind(this, id, taskTime)} variant="outline-danger"> X </Button>
                    <Button style={timeStyle} size="sm" variant="outline-primary"> {taskTime} hours </Button>
                </p>
            </div>
        )
    }
}

// The various styles for the input fields
const buttonStyle = {
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const timeStyle = {
    float: 'left',
    margin: '0px 6px 0px 6px'
}

const textStyle = {
    margin: '3px 5px 3px 5px'
}

export default TaskItem;
