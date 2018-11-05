import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './store';

// Cuando importamos el modulo Store,
// lo llamamos para crear la tienda  basada en nuestros reductores.
// Esto también es para que no tengamos que importar nuestros reductores en este archivo.

const store = Store();
const root = document.getElementById('root')

// Provider hace que cada componente  conectado a la tienda 
// obtenga acceso a ella.
render(<Provider store={store}>
   <App />
 </Provider>,root);
