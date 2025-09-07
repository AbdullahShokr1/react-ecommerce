import React, { Component } from 'react';
import Product from './product';

class ShonppingCart extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <button className='btn btn-warning m-2' onClick={this.props.Rest}>Rest</button>
                {this.props.products.filter(p => p.isInCart).map(product=>(
                    <Product key={product.id} product={product} onCart={this.props.onCart} OnAdd={this.props.OnAdd} OnDecrease={this.props.OnDecrease}>
                        <h3>{product.name}</h3>
                    </Product>
                ))}
            </React.Fragment>
        );
    }
}
 
export default ShonppingCart;