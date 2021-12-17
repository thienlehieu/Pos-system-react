import React, { Component } from 'react'

let confirmFunc = (event) => {
    window.alert('Thanh toán thành công!');
    event.preventDefault();
}

const Payment = ({cartItems}) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.1;
    const shippingPrice = itemsPrice > 100000 ? 0 : 20000;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className='payment-block'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
                <div class="row">
                    <div class="col-75">
                        <div class="container">
                        <form onSubmit={confirmFunc}>
                        
                            <div class="row">
                            <div class="col-50">
                                <h3>Billing Address</h3>
                                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname"/>
                                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email"/>
                                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address"/>
                                <label for="city"><i class="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city"/>

                                <div class="row">
                                <div class="col-50">
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state"/>
                                </div>
                                <div class="col-50">
                                    <label for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip"/>
                                </div>
                                </div>
                            </div>

                            <div class="col-50">
                                <h3>Payment</h3>
                                <label for="fname">Accepted Cards</label>
                                <div class="icon-container">
                                <i class="fa fa-cc-visa" style={{color: "navy"}}> </i>
                                <i class="fa fa-cc-amex" style={{color: "blue"}}> </i>
                                <i class="fa fa-cc-mastercard" style={{color: "red"}}> </i>
                                <i class="fa fa-cc-discover" style={{color:"orange"}}> </i>
                                </div>
                                <label for="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname"/>
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber"/>
                                <label for="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth"/>
                                <div class="row">
                                <div class="col-50">
                                    <label for="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear"/>
                                </div>
                                <div class="col-50">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv"/>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                            <label>
                            <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" class="btn"/>
                        </form>
                        </div>
                    </div>
                    <div class="col-25">
                        <div class="container">
                        <h4>Cart <span class="price" style={{color: "black"}}><i class="fa fa-shopping-cart"></i> <b>{cartItems.length}</b></span></h4>
                        {cartItems.map((item) => (
                            <p><a href="#">{item.title}</a> <span class="price">{item.qty}*{item.price}</span></p>
                        ))}
                        <hr/>
                        <p>Shipping <span class="price" style={{color: "black"}}><b>${shippingPrice}</b></span></p>
                        <p>Tax 10% <span class="price" style={{color: "black"}}><b>${taxPrice}</b></span></p>
                        <p>Total <span class="price" style={{color: "black"}}><b>${totalPrice}</b></span></p>
                        </div>
                    </div>
                    </div>
                </div>   
            </div>     
    ) 
}

export default Payment