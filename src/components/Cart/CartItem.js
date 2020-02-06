import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    console.log(value)
    return(
        <div className='row text-capitalize text-center my-2'>
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height: '5rem'}} className='img-fluid' alt="products"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                {price}
            </div>

            <div className="col-10 mx-auto my-2 m-lg-0 col-lg-2">
                <div className="d-flex justify-content-center"></div>
                <button className="btn btn-outline-dark" onClick={()=>decrement(id)}>-</button>
                <button className="btn btn-outline-dark">{count}</button>
                <button className="btn btn-outline-dark" onClick={()=>increment(id)}>+</button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() =>removeItem(id)}>
                    <i className="fas fa-trash"> </i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: $ {total}</strong>
            </div>
        </div>
    )
}