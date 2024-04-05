// EXAMPLE 1 - How to set the default timezone in Node.js

process.env.TZ = 'America/New_York';

const date = new Date();

console.log(date);

console.log(date.toLocaleTimeString());

console.log(date.toLocaleDateString());

console.log(date.toLocaleString());

console.log(date.toString());

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the `cross-env` package to set the `TZ` environment variable in Node.js

// const date = new Date();

// console.log(date);

// console.log(date.toLocaleTimeString());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleString());

// console.log(date.toString());

// ------------------------------------------------------------------

// // EXAMPLE 3 - You can also pass a timezone to the `tolocaleString()` method

// const date = new Date();

// console.log(date.toLocaleString('en-US', 'America/New_York'));
