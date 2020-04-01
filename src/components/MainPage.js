import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Tasks from './Tasks';
import AddTask from './AddTask';
import uuid from 'react-uuid';



class MainPage extends Component {
    
    constructor(props) {
        super(props);

        // Keep track of the state of this page
        this.state = {
            tasks: [],
            totTime: 0,
            taskCount: 0
        }
        
    }

    // Update the number of tasks there are
    addTask = (taskName, taskTime) => {
        const newTask = {
            id: uuid(),
            taskName,
            taskTime
        }

        // Update the state
        this.setState({
            tasks: [...this.state.tasks, newTask],
            totTime: (parseFloat(this.state.totTime) + parseFloat(taskTime)),
            taskCount: (parseInt(this.state.taskCount) + 1)
        })

    }

    // Delete the number of tasks
    deleteTask = (id, taskTime) => {
        // Update the state by filtering out the wrong id
        this.setState({
            tasks: [...this.state.tasks.filter(task => task.id !== id)],
            totTime: (parseFloat(this.state.totTime) - parseFloat(taskTime)),
            taskCount: (parseInt(this.state.taskCount) - 1)
        })
    }

    render () {
        return(
            <div className="container">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand> Simple Daily Time Planner </Navbar.Brand>
                    <Navbar.Text style={navbarStyle}>
                        Total time: {this.state.totTime} hours | 
                        Task count: {this.state.taskCount}
                    </Navbar.Text>
                </Navbar>
                
                <br />
                
                <h6 style={textStyle}> Simply add the things you do per day and see how your daily
                    time management stacks up. </h6>
                
                <br />

                <Tasks tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask} />
                
                <br />
                <AddTask addTask={this.addTask}/>
            </div>
        );
    }
}

// Various styles for the app
const navbarStyle = {
    position: 'absolute',
    right: '0px',
    margin: '0px 15px'
}

const textStyle = {
    textAlign: 'center'
}

export default MainPage;