import * as service from '../services/toDo.js'


const GET_TASKS = 'GET_TASKS';
const GET_TASKS_PENDING = 'GET_TASKS_PENDING';
const GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';

const UPDATE_CATEGORY_NAME = 'UPDATE_CATEGORY_NAME';
const UPDATE_CATEGORY_NAME_PENDING = 'UPDATE_CATEGORY_NAME_PENDING';
const UPDATE_CATEGORY_NAME_FULFILLED = 'UPDATE_CATEGORY_NAME_FULFILLED';

const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
const UPDATE_TASK_NAME_PENDING = 'UPDATE_TASK_NAME_PENDING';
const UPDATE_TASK_NAME_FULFILLED = 'UPDATE_TASK_NAME_FULFILLED';

const ADD_CATEGORY = 'ADD_CATEGORY';
const ADD_CATEGORY_PENDING = 'ADD_CATEGORY_PENDING';
const ADD_CATEGORY_FULFILLED = 'ADD_CATEGORY_FULFILLED';

const ADD_TASK = 'ADD_TASK';
const ADD_TASK_PENDING = 'ADD_TASK_PENDING';
const ADD_TASK_FULFILLED = 'ADD_TASK_FULFILLED';

const DELETE_TASK = 'DELETE_TASK';
const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED';

const DELETE_CATEGORY = 'DELETE_CATEGORY';
const DELETE_CATEGORY_PENDING = 'DELETE_CATEGORY_PENDING';
const DELETE_CATEGORY_FULFILLED = 'DELETE_CATEGORY_FULFILLED';

const DELETE_PLACEHOLDER = 'DELETE_PLACEHOLDER';
const DELETE_PLACEHOLDER_PENDING = 'DELETE_PLACEHOLDER_PENDING';
const DELETE_PLACEHOLDER_FULFILLED = 'DELETE_PLACEHOLDER_FULFILLED';

//______________________________//

const initialState = {
    loading: false,
    categories:[
      {
        categoryName:'',
        toDoItems:['Enter Task Here','',''],
        style: {background:"#f17"},
      },
    ]
}

export default function reducer(state = initialState, action) {
  switch(action.type){

    case GET_TASKS_PENDING:
      return Object.assign({}, state, {loading: true})
    case GET_TASKS_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case ADD_CATEGORY_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case ADD_TASK_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case UPDATE_CATEGORY_NAME_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case UPDATE_TASK_NAME_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case DELETE_TASK_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case DELETE_CATEGORY_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    case DELETE_PLACEHOLDER_FULFILLED:
      return Object.assign({}, state, {loading: false, categories: action.payload})

    default:
      return state;
    }
}

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: service.getTasks()
    }
}

export function addCategory(){
    return {
        type: ADD_CATEGORY,
        payload: service.addCategory()
    }
}
export function addTask(i){
    return {
        type: ADD_TASK,
        payload: service.addTask(i)
    }
}

export function updateCategoryName(e, i){
  return {
    type: UPDATE_CATEGORY_NAME,
    payload: service.updateCategoryName(e, i)
  }
}
export function updateTaskName(e, i, j){
  return {
    type: UPDATE_TASK_NAME,
    payload: service.updateTaskName(e, i, j)
  }
}

export function deleteTask(i, j){
    return {
        type: DELETE_TASK,
        payload: service.deleteTask(i, j)
    }
}

export function deleteCategory(i){
    return {
        type: DELETE_CATEGORY,
        payload: service.deleteCategory(i)
    }
}

export function deletePlaceholder(i, j){
    return {
        type: DELETE_PLACEHOLDER,
        payload: service.deletePlaceholder(i, j)
    }
}