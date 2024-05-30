const express = require("express");
const todoRouter = require("./routers/todoRouter");

const app = express();
const PORT = 3000;

//middleware
const globalMiddleWare = function (req, res, next) {
    console.log("Global Middleware");
    next();
}
// app.use((req, res, next) => {
//     console.log("Global Middleware");
//     next();
// })

app.use(globalMiddleWare);

const myMiddleware = function (params) {
    return function (req, res, next) {
        console.log("Middleware with params");
        next();
    }
}

app.use(myMiddleware({ isActive: true, version: "1" }))
//bind
app.use('/api/todo', todoRouter);

app.listen(PORT, () => {
    console.log("Serving on " + PORT)
})