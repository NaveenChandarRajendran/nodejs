const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter:'TCP'
});

broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            return ctx.params.a + ctx.params.b
        }
    }
})

async function main() {
    try {
        await broker.start();
        //use repl propmt
        broker.repl();
    } catch (err) {
        console.log(err);
    }
}
main();