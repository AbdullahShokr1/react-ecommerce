import React, { Component } from 'react';
import Product from '../components/product';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Cart from '../components/cart';



class Home extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className='contianer'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>count</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product=>(
                                <tr key={product.id}>
                                    <td >{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.count}</td>
                                    <td>
                                        <Button variant="light">
                                            <Cart  product={product} 
                                                onClick={this.props.onCart} 
                                            />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;