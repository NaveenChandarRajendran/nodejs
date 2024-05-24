const getUser = (resolve, reject) => {
    console.log("getuser is called");
    let user = {
        name: 'admin'
    }
    user = null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(resolve, 1000, { message: "User not found" });
    }
}

const login = (user, resolve, reject) => {
    if (user.name === "admin") {
        setTimeout(resolve, 1000, 'login sucess');
    } else {
        setTimeout(reject, 1000, 'login failed');
    }
}

const showDashboard = (status, resolve, reject) => {
    if (status === "login sucess") {
        resolve("Welcome");
    } else {
        reject("Sorry try again");
    }
}

const main = () => {
    getUser((user) => {
        login(user, (status) => {
            showDashboard(status, (message) => {
                console.log(message)
            }, (err) => {
                console.log(err);
            })
        }, (err) => {
            console.log(err);
        })
    }, (err) => {
        console.log(err);
    })
}

main();


//But this type of nested callback is called callback hell.

//We unable to debug or maintain this code.