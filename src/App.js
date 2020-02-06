import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import ProductList from './components/productList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from "./components/Modal";
// import Tasma from './Tasma/index'

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route path="/" component={ProductList} exact/>
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                {/*<Route path="/tasma" component={Tasma}/>*/}
                <Route component={Default}/>
            </Switch>
            <Modal/>
        </React.Fragment>
    );
}

export default App;
