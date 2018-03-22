import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeTask} from './../ducks/tasks.js';
import {deleteTask} from './../ducks/tasks.js';
import {getTasks} from './../ducks/tasks.js';
import {Link} from 'react-router-dom';

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        
        this.completeTask = this.completeTask.bind(this);
    }

    completeTask(id){
        this.props.completeTask(id)
    }

    deleteTask(id){
        this.props.deleteTask(id)
    }

    componentDidMount(){
        this.props.getTasks()
    }

    render() {

        let tasks = this.props.tasks.map( (task, i) => {
            let detailsID = `/details/${task.id}`

            return (
                <div key={i}>
                    <p style={task.completed ? {"textDecoration":"line-through"}: null}>{task.title}</p>
                    <button style={task.completed ? {"display":"none"}: null}onClick={ () => this.props.completeTask(task.id)}>complete</button>
                    <button onClick={ () => this.props.deleteTask(task.id)}>delete</button>
                    <Link to={detailsID}><button>details</button></Link>
                </div>
            )
        })

        return (
            <div>
                {tasks}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {getTasks, completeTask, deleteTask})(ToDo);