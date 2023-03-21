import { runApp } from './src';

const start = () => {
    runApp();

    if (module.hot) {
        module.hot.accept(['./src'], () => {
            const { startup: next } = require('./src');
            next();
        });
    }
};

start();