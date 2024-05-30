const express = require("express");
const { findAll } = require("../services/todoService");

const todoRouter = express.Router();

todoRouter.get('/list', async (req, res) => {
    try {
        const todoList = await findAll();
        res.json(todoList);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

module.exports = todoRouter;