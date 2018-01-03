import '../css/estilos.css';
import {firstMessage, delayedMessage} from './message.js';
import dragonImg from '../images/dragon1.jpg';
import videoPlatzi from '../videos/que-es-core.mp4';

//console.log("Hola, este es un archivo de webpack");
document.write(firstMessage);

const img = document.createElement('img');
img.setAttribute('src',dragonImg);
img.setAttribute('width',50);
img.setAttribute('heigth',50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src',videoPlatzi);
video.setAttribute('width',480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);

delayedMessage();
console.log("Hola, este es un archivo con js moderno");
