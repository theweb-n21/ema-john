import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
   
    // const total = cart.reduce((total,prd)=>total + prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
       

        
    }
    let shipping = 0
    if (total > 35) {
        shipping = 0;
        
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }
   
    
    const tax = total / 10;
    const totalPrice = total + shipping + tax;


    const fixedNumber = Num =>{
        let result = Num.toFixed(2);
        result = Number(result)
        return result;
    }
    
  

    


    
    

    return (
        <div>
            <div className='order'>
                <h1>Order summary</h1>
                <h3>Items ordered: {cart.length} </h3>

            </div>
            <div>
                <h3>Price : {fixedNumber(total)}</h3>
                <h3>Tax & Vat : {fixedNumber(tax)}</h3>
                <h3>Shipping cost : {fixedNumber(shipping)}  </h3>
                <h3>Total Price : {fixedNumber(totalPrice)}</h3>
            </div>
        </div>
    );
};

export default Cart;