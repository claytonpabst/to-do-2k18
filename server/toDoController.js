var app = require('./index.js');

let toDoCategories = [
  {
    categoryName:'',
    toDoItems:['Enter Task Here','',''],
    style: {background:"#f17"},
  },
]

function getBackground(){
  let f_position = toDoCategories.length%3+1;
  let x = JSON.stringify(randomNumber(1, 9));
  let y = JSON.stringify(randomNumber(1, 9));
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

function randomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

const toDoController = {
    getToDoCategories: function(req, res){
      console.log('hit')
      return res.status(200).send(
        toDoCategories
      )      
    },
    addCategory: function(req, res){
      console.log('hit')

      let categories = toDoCategories;
      categories.push({
        categoryName:"",
        toDoItems:[""],
        style:{background:getBackground()},
      })
      return res.status(200).send(
        toDoCategories
      )      
    },
    addTask: function(req, res){
      let categories = toDoCategories;
      categories[req.body.i].toDoItems.push("");
      return res.status(200).send(
        toDoCategories
      )      
    },
    updateCategoryName: function(req, res){
      let categories = toDoCategories;
      categories[req.body.i].categoryName = req.body.e;
      return res.status(200).send(
        toDoCategories
      )      
    },
    updateTaskName: function(req, res){
      let categories = toDoCategories;
      categories[req.body.i].toDoItems[req.body.j] = req.body.e;
      return res.status(200).send(
        toDoCategories
      )      
    },
    deletePlaceholder: function(req, res){
      let categories = toDoCategories;
      categories[req.body.i].toDoItems[req.body.j] = '';
      return res.status(200).send(
        toDoCategories
      )      
    },
    deleteCategory: function(req, res){
      let categories = toDoCategories;
      categories.splice(req.body.i, 1);
      return res.status(200).send(
        toDoCategories
      )      
    },
    deleteTask: function(req, res){
      let categories = toDoCategories;
      categories[req.body.i].toDoItems.splice(req.body.j, 1);
      return res.status(200).send(
        toDoCategories
      )      
    },

}

module.exports = toDoController;