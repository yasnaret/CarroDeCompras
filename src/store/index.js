import { createStore } from 'redux';
import rootReducer from  '../reducers';

//Cuando llamamos a esta función devolvemos la tienda creada con nuestros reductores

export default function store() {
    return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

//El último argumento es para poder usar "Redux DevTools" para Chrome,descarga el siguiente link
//y ve lo que ocurre.
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
