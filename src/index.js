import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

//we create a render method and assign it to a annonymous function
let render = () => {
    ReactDOM.render(<App />, rootEl);
}

//now lets query module replacement on webpack
if(module.hot){
    module.hot.accept('./app/layout/App', () =>{
        //we use setTimeout so we can render immediately.
        setTimeout(render);
    })
}

render();


registerServiceWorker();
