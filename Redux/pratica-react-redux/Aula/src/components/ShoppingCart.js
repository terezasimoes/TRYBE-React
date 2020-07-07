import React from 'react';
import { connect } from 'react-redux';

const ShoppingCart = (props) => {
  const { products, totalPrice } = props;

  return (
    <div>
      <h2>Carrinho de compras</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <p>Total: R${totalPrice.toFixed(2)}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.reducer.cart,
  totalPrice: state.reducer.totalPrice,
})

export default connect(mapStateToProps)(ShoppingCart);

// componentes funcionais pq nao precisa ter estado. só preciso do que ele retorna
// nao precisa de construtor p.ex. o state fica em outro lugar dai nao precisa fazer classe
