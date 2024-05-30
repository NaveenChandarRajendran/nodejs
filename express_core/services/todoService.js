const TODOS = require("../mockData/todo");

class TodoServices {
    findAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(TODOS);
            }, 2000)
        })
    }
}

module.exports = new TodoServices();