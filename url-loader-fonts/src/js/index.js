import '../css/estilos.css';
import {firstMessage, delayedMessage} from './message.js';
import dragonImg from '../images/dragon1.jpg'

//console.log("Hola, este es un archivo de webpack");
document.write(firstMessage);

const img = document.createElement('img');
img.setAttribute('src',dragonImg);
img.setAttribute('width',50);
img.setAttribute('heigth',50);
document.body.append(img);

delayedMessage();
console.log("Hola, este es un archivo con js moderno");
