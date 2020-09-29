const express = require("express");
const app = express();

const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => console.log('I ran'))
    .then(() => console.log('I ran afterwards'))
    .then(() => console.log('Then I ran'))
    .catch((err) => console.log('uh oh error', err));

console.log(promise);

