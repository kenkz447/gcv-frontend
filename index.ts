import { runApp } from './src';

const start = () => {
    runApp();

    if (module.hot) {
        module.hot.accept(['./src'], () => {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { runApp: nextRunApp } = require('./src');
            nextRunApp();
        });
    }
};

start();