import {React,Component} from 'react';
import {Outlet,Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/error404';
import NavBar from './components/Navbar';
import ShonppingCart from './components/shoppingCart';


function RouteLayout(){
    return(
        <>
            <NavBar />
            <Outlet/>
        </>
    );
}

class App extends Component {
    state = { 
        products:[
            {id:1,name:"Burger", count:3},
            {id:2,name:"Fries", count:1},
            {id:3,name:"cola", count:2},
        ],
    };
    DeleteItem = (product) => {
        const products = this.state.products.filter(p=> p.id !== product.id)
        this.setState({products});
    };
    Rest = ()=>{
        let products = [...this.state.products];
        products = products.map((p)=>{
            p.count = 0 ;
            return p;
        });
        this.setState({products});
    };
    AddItem= (product)=>{
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] ={...products[index]};
        products[index].count++;
        this.setState({products});
    }
    decreaseItem = (product)=>{
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count > 0 && products[index].count--;
        this.setState({products});
    } 
    render() {
        const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RouteLayout/>}>
            <Route index element={
                <Home 
                products={this.state.products}
                onDelete={this.DeleteItem}
                onRest={this.Rest}
                onAdd={this.AddItem}
                onDecrease={this.decreaseItem}
                />
            }/>
            <Route path="shopping-cart" element={<ShonppingCart 
                products={this.state.products} OnDelete={this.DeleteItem} OnAdd={this.AddItem} OnDecrease={this.decreaseItem} Rest={this.Rest}
            />}/>
            <Route path="*" element={<Error/>}/>
            </Route>
        )
        );

        return <RouterProvider router={router}/>;
  }
}
 
export default App;