const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter:'TCP'
});

broker.createService({
    name: 'calculator',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            return ctx.call('math.add', { a, b })
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