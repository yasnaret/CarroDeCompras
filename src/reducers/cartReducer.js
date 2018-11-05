import initialState from './initialState';

        //Toma un arreglo como estado inicial y luego a través de la acción propagada (add,remove),
        //agrega un nuevo item al arreglo o lo elimina de él.
export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'ADD':
            // Si se ejecuta "add" desde "cartActions.js" afectará al estado previo.
            // agregarando un nuevo item,creando un nuevo arreglo con el item agregado
            return [...state, action.item];
        case 'REMOVE':
            //Si se ejecuta "remove" desde "cartActions.js",devuelve un nuevo arreglo
            //sin el item seleccionado,(seleccionando su id,con el evento click)
            return state.filter( i => i.id !== action.item.id);
        default:
            return state;
    }
};