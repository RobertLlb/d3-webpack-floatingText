import _ from 'lodash';
import * as d3 from 'd3';
import printMe from './print.js';
import './css/normalize.css';
import './css/style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack you good good '], ' ');
 // element.classList.add('hello');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(d3Paras());



  
    return element;
}
  

function d3Paras() {
  const element = document.createElement('p');

  element.innerHTML = _.join('Hello d3');
  d3.selectAll("div").style("color", "blue")
  return element;
}
  
document.body.appendChild(component());
document.body.appendChild(d3Paras());