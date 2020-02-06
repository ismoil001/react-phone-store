import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import styled from 'styled-components'
import {Link} from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModel} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            className="bg-white col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>item added to cart</h5>
                                            <img src={img} className='img-fluid' alt=""/>
                                            <h5>{title}</h5>
                                            <h5 className='text-muted'>price: {price}</h5>
                                            <Link to="/">
                                                <button
                                                    className='btn btn-dark'
                                                    onClick={() =>{
                                                        closeModel();
                                                    }}
                                                >
                                                   Continue Shopping
                                                </button>
                                                <Link to="/cart">
                                                    <button
                                                        className='btn btn-warning ml-2'
                                                        cart
                                                        onClick={() =>{
                                                            closeModel();
                                                        }}
                                                    >
                                                        Go To Cart
                                                    </button>
                                                </Link>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;