const { ServiceBroker } = require("moleculer");

// create service broker object
const broker = new ServiceBroker();

//create service
broker.createService({
    name: 'hello',
    actions: {
        //apis
        sayHello() {
            return 'Hello'
        }
    }
})

async function main() {
    try {
        await broker.start();
        console.log("Broker is ready");
        const res = await broker.call('hello.sayHello');
        console.log("res", res);
    } catch (err) {
        console.log("err", err);
    }


}

main();