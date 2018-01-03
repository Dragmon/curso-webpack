import renderToDOM from './render-to-dom.js'
import makeMessage from './make-message.js'

const waitTime = new Promise((todoOk, todoNok) => {
  setTimeout(() => {
    todoOk('Han pasado 3 segundo omg');
  }, 3000)
});

module.exports ={
  firstMessage: 'hola desde un modulo con babel prueba 4',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message)
    //const element = document.createElement('p')
    //element.textContent = message;
    renderToDOM(makeMessage(message))
  }
}
