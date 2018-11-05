//Este es un objeto que representa el estado y muestra los productos por defecto
//Devuelve los productos predeterminados y un arreglo vacío "cart"
//que es nuestro  estado inicial para el carro de compras


export default {
  cart: [],
  products: [
    {
      id: 1,
      name: "Harry Potter Hogwarts Battle",
      category:"Juegos de Mesa",
      price: 21990,
      image:"https://images-na.ssl-images-amazon.com/images/I/71DDxsvi2sL._SX450_.jpg"
    },
    {
      id: 2,
      name: "Catan",
      category:"Juegos de Mesa",
      price: 30990,
      image:"https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX522_.jpg"
    },
    {
      id: 3,
      name: "Days of Wonder Ticket To Ride",
      category:"Juegos de Mesa",
      price: 32990,
      image:"https://images-na.ssl-images-amazon.com/images/I/61wLscAHHSL._SX450_.jpg"
    },
    {
      id: 4,
      name: "Monopoly Clásico",
      category:"Juegos de Mesa",
      price: 10990,
      image:"https://images-na.ssl-images-amazon.com/images/I/91xt5y3S7lL._SX425_.jpg"
    }
  ]
}