import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="Brand" className='navbar-brand'/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link text-white text-capitalize'>
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <button className='btn btn-danger'>
                        <i className="fas fa-cart-plus"></i> My cart
                    </button>
                </Link>
            </nav>
        );
    }
}
export default Navbar;