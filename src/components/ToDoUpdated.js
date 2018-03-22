import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addCategory} from './../ducks/tasks.js';
import {addTask} from './../ducks/tasks.js';
import {deleteTask} from './../ducks/tasks.js';
import {deleteCategory} from './../ducks/tasks.js';
import {deletePlaceholder} from './../ducks/tasks.js';
import {getTasks} from './../ducks/tasks.js';
import {updateCategoryName} from './../ducks/tasks.js';
import {updateTaskName} from './../ducks/tasks.js';

import './ToDo.css';


class ToDoUpdated extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[
        {
          categoryName:'',
          toDoItems:['Type Task Here','',''],
          style: {background:"#f17"},
        },
      ]
    }
    
    this.addCategory = this.addCategory.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTaskName = this.updateTaskName.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  componentDidMount(){
    this.props.getTasks()
  }
  
  addCategory(){
    this.props.addCategory();
    // let categories = this.state.categories;
    // categories.push({
    //   categoryName:"",
    //   toDoItems:[""],
    //   style:{background:this.getBackground()},
    // })
    // this.setState({categories});
  }
  updateCategoryName(e, i){
    this.props.updateCategoryName(e.target.value, i)
    // let categories = this.state.categories;
    // categories[i].categoryName = e.target.value;
    // this.setState({categories});
  }

  addTask(i){
    this.props.addTask(i);
    // let categories = this.state.categories;
    // categories[i].toDoItems.push("");
    // this.setState({categories});
  }
  updateTaskName(e, i, j){
    this.props.updateTaskName(e.target.value, i, j);
    // let categories = this.state.categories;
    // categories[i].toDoItems[j] = e.target.value;
    // this.setState({categories});
  }
  deleteTask(i, j){
    this.props.deleteTask(i, j);
    // let categories = this.state.categories;
    // categories[i].toDoItems.splice(j, 1);
    // this.setState({categories});
  }
  deleteCategory(i){
    this.props.deleteCategory(i)
    // let categories = this.state.categories;
    // categories.splice(i, 1);
    // this.setState({categories});
  }

  completeTask(i, j){
    if(document.getElementsByClassName('toDoCategory')[i].getElementsByClassName('taskInputs')[j].style.textDecoration !== "line-through"){
      document.getElementsByClassName('toDoCategory')[i].getElementsByClassName('taskInputs')[j].style.textDecoration = "line-through";
    } else {
      document.getElementsByClassName('toDoCategory')[i].getElementsByClassName('taskInputs')[j].style.textDecoration = "";
    };
  }

  getBackground(){
    let f_position = this.state.categories.length%3+1;
    let x = JSON.stringify(this.randomNumber(1, 9));
    let y = JSON.stringify(this.randomNumber(1, 9));
    let background;
    switch (f_position) {
      case 1:
        background = "#f" + x + y;
        break;
      case 2:
        background =  "#" + x + "f" + y;
        break;
      case 3:
        background = "#" + x + y + "f";
        break;
      default:
        return "#f" + x + y;
    }
    return background;
  }

  randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  deletePlaceholder(i, j){
    if(this.props.categories[i].toDoItems[j] === "Enter Task Here"){
      this.props.deletePlaceholder(i, j)
    }
  }

  render() {
    let categories;
    categories = this.props.categories.map((category, i) => {
      let tasks=[];
      for(let j=0; j<this.props.categories[i].toDoItems.length; j++){
        tasks.push( 
          <h1 className="taskWrapper"  key={j}>
            <input
              onFocus={(e) => this.deletePlaceholder(i, j)}
              onChange={(e) => this.updateTaskName(e, i, j)}
              className="taskInputs" 
              style={this.props.categories[i].style}
              value={this.props.categories[i].toDoItems[j]}
              type="text"
            />
            <span onClick={() => this.completeTask(i, j)} className="completeToDoTask">&#10003;</span>
            <span onClick={() => this.deleteTask(i, j)} className="deleteToDoTask">x</span>
          </h1>
        )
      }
      return (
        <div key={i} style={this.props.categories[i].style} className="toDoCategory">
          <div onClick={() => this.addTask(i)}>Task++</div>
          <span onClick={() => this.deleteCategory(i)} className="deleteCategory">Delete</span>
          <input  
            onChange={(e) => this.updateCategoryName(e, i)} 
            placeholder="Category Name" 
            className="categoryInputs" 
            style={this.props.categories[i].style}
            value={this.props.categories[i].categoryName}
            type="text"
          />
          {tasks}
        </div>
      )
    })

    return (
        <div className="toDoListWrapper">
          <div className="toDoListWrapperHeader">
            <h1>To Do List</h1>
          </div>
          <div className="toDoHeader">
            <h1 onClick={this.props.addCategory}>Category++</h1>
          </div>
          {categories}
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
      categories: state.categories
  }
}

export default connect(mapStateToProps, {
  updateTaskName, 
  getTasks, 
  addTask, 
  updateCategoryName, 
  addCategory, 
  deleteTask, 
  deleteCategory,
  deletePlaceholder,
})(ToDoUpdated);