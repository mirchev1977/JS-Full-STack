

console.log('hello from the home page!!! Nice to meet you!');

let img = document.createElement('img');
img.style.width = "100%";
img.style.height = "100%";
img.src = require('../images/webpack-logo.jpg');

document.getElementById('logo').appendChild(img);

require('../css/styles.css');
require('../css/styles.scss');