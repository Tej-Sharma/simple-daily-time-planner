import React, { Component } from 'react'

import TaskItem from './TaskItem';

// Using .map() function, this will be kept simple
class Tasks extends Component {
    render() {
        // Simple return a list of TaskItems
        return this.props.tasks.map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={this.props.deleteTask} />
        ));
        
    }
}

export default Tasks;
