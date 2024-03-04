 const express = require("express");
 const route = express.Router();

 //import controller

 const{createTodo} = require("../controllers/CreateTodo");
 const{getTodo,getTodoById} = require("../controllers/getTodo");
 const {updateTodo} = require("../controllers/updateTodo");
 const {deleteTodo} = require("../controllers/deleteTodo");
 //define api

 route.post("/createTodo",createTodo);
 route.get("/getTodos",getTodo);
 route.get("/getTodos/:id",getTodoById);
 route.put("/updateTodo/:id",updateTodo);
 route.delete("/deleteTodo/:id",deleteTodo);
 module.exports = route;