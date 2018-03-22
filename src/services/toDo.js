import axios from 'axios';

export const getTasks = function() {
    return axios.get('/api/getToDoCategories/')
    .then(res => res.data)
}

export const addCategory = function() {
    return axios.get('api/addCategory/')
    .then(res => res.data)
}

export const addTask = function(i) {
    return axios.post('api/addTask/', {i:i})
    .then(res => res.data)
}

export const updateCategoryName = function(e, i) {
    return axios.put('api/updateCategoryName/', {e:e, i:i})
    .then(res => res.data)
}

export const updateTaskName = function(e, i, j) {
    return axios.put('api/updateTaskName/', {e:e, i:i, j:j})
    .then(res => res.data)
}

export const deleteTask = function(i, j){
    return axios.put(`api/deleteTask/`, {i:i, j:j})
    .then(res => res.data)
}

export const deleteCategory = function(i){
    return axios.put(`api/deleteCategory`, {i:i})
    .then(res => res.data)
}

export const deletePlaceholder = function(i, j){
    return axios.put('api/deletePlaceholder/', {i:i, j:j})
    .then(res => res.data)
}