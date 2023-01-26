import React from 'react';
import { useSelector } from 'react-redux';
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi"

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    return (
        <>
            <div class="container mt-2 pt-5">
                <div class="row">
                    <div class="col-12 col-lg-8 col-md-8 col-sm-12" style={{ backgroundColor: "#d3dd9deb" }}>
                        <h2 style={{ color: "#937403e8" }}>Cart Items</h2>
                        <div class="row  mt-3">
                            {
                                cartItems.map((item, index) => (
                                    <>
                                        <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2" >
                                            <h6>{index + 1}.&nbsp;{item.name} [{item.varient}]</h6>
                                            <h6> &nbsp;&nbsp;&nbsp;Price: {item.quantity} X {item.prices[0][item.varient]} = {item.quantity * item.prices[0][item.varient]}</h6>
                                            <h6> &nbsp;&nbsp;&nbsp;Quantity: &nbsp;<HiMinusCircle style={{ color: "red" }} />&nbsp;{item.quantity}&nbsp;<HiPlusCircle style={{ color: 'green' }} /></h6>
                                        </div>
                                        <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2" >
                                            <img alt={item.name} src={item.image} style={{ width: '80%', height: '80%', textAlign: "left" }} />
                                        </div>
                                        <hr />
                                    </>
                                ))
                            }

                        </div>

                    </div>
                    <div class="col-12 col-lg-4 col-md-4 col-sm-12 " style={{ backgroundColor: "#d3dd9deb" }}>
                        <h2 style={{ color: "#937403e8" }}>Payment Info</h2>
                        <div></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartScreen;