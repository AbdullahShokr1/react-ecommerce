import React, { Component } from 'react';

class Product extends Component {
    getClasses(){
        return this.props.product.count >=1 ? "btn btn-primary position-relative m-2":"btn btn-warning position-relative m-2";
    };
    render(){
        return (
            <div className="m-3">
                {this.props.children}
                <span className={this.getClasses()}>
                {this.props.product.name}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {this.props.product.count}
                    </span>
                </span>
                <button className='btn btn-primary m-2' onClick={()=>this.props.OnAdd(this.props.product)}>+</button>
                <button className='btn btn-secondary m-2' onClick={()=>this.props.OnDecrease(this.props.product)}>-</button>
                <button className='btn btn-danger' onClick={()=>this.props.onCart(this.props.product)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    }
}
    
export default Product;