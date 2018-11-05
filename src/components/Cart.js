import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

class Cart extends Component {
  render() {

    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    
    const cartList = this.props.cart.map(( item, index) =>{
      return <div key={index}> 
        <p style={{ color: "green"}}>
        {item.name}
        </p>
        <p>CLP$ {item.price}</p>
        <button className="button" 
                style={{ backgroundColor: "#b73535"}}
                onClick={ () => this.props.removeFromCart(item)} > 
                <i className="fas fa-trash-alt"></i>
                Eliminar  
        </button>
      </div>;
    });

    const totalList=this.props.cart.reduce((sum, product) => sum + product.price, 0)

    return (
      <div>
        <p style={{backgroundColor:'#4f92b13b'}}>
        <h1>CARRO DE COMPRAS 
          <i className="fas fa-cart-arrow-down"></i>
        </h1>
        </p>
        <div  className="cart">
          {cartList}
        </div>
        <h2 style={{color:'#476a7b'}}>Total</h2>
        <div>
          <p style={{ color: "black"}}>CLP$
          <span style={{ color: "blue" ,fontSize:20}}>
          {totalList}
          </span>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
