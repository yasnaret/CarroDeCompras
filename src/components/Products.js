import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Products extends Component {

  render() {
    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    const productList = this.props.products.map( (item,index)  => {
      return <div key={index}> 
        <img src={item.image} alt="producto seleccionado" style={{ width: 200 }}/>
        <p style={{ color:'blue',fontWeight:'bold'}}>
        {item.name}
        </p>
        <p>{item.category}</p>
        <p> CLP${item.price}  </p>
        <button className="button"
                onClick={() => this.props.addToCart(item)}>
                <i className="fas fa-shopping-cart"></i>
                Agregar al Carro 
        </button> 
      </div>
    });

    return (
      <div className= "products">
         { productList }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

