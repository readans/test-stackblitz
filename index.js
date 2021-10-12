// Import stylesheets
import './style.css';
const anime_list = JSON.stringify(require('./animes.json'));

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Hello world</h1>`;
const text = document.createTextNode('Hello World');
const h1 = document.createElement('h1');
h1.appendChild(text);
appDiv.appendChild(h1);
