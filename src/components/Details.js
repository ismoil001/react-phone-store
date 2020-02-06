import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProducts;
                    console.log(value.detailProducts)
                    return (
                        <div className='container py-5'>
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue mym-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*title end*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt=""/>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className='text-primary'>
                                        <strong>price: {price} $</strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3">
                                        some info about product
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        {/*buttons*/}
                                        <Link to='/'>
                                            <button className="btn btn-outline-dark"> Back to Products</button>
                                        </Link>
                                        <button className="btn btn-outline-warning ml-3"
                                                cart
                                                disabled={inCart? true : false}
                                                onClick={() =>{
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                        >
                                            {inCart? <span>In Cart</span>: <span>Add to Card</span>}
                                        </button>
                                        {/*buttons end*/}
                                    </div>
                                </div>
                            </div>
                            {/*product info end*/}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;