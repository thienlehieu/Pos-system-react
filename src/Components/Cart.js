import React from 'react'


const Cart = ({onAdd, onRemove, cartItems}) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.1;
    const shippingPrice = itemsPrice > 100000 ? 0 : 20000;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block">
        <h2>Giỏ hàng</h2>
        <br />
        <div>
          {cartItems.length === 0 && <div>Giỏ hàng trống!</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div >{item.title}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
  
              <div className="col-2 text-right">
                {item.qty} x {item.price}đ
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Đơn giá</div>
                <div className="col-2 text-right">{itemsPrice}đ</div>
              </div>
              <div className="row">
                <div className="col-2">Phí VAT</div>
                <div className="col-2 text-right">{taxPrice}đ</div>
              </div>
              <div className="row">
                <div className="col-2">Phí vận chuyển</div>
                <div className="col-2 text-right">
                  {shippingPrice}đ
                </div>
              </div>
  
              <div className="row">
                <div className="col-2">
                  <strong>Tổng tiền</strong>
                </div>
                <div className="col-2 text-right">
                  <strong>{totalPrice}đ</strong>
                </div>
              </div>
              <hr />
              <div>
                <button className="checkout" onClick={() => alert('Implement Checkout!')}>
                  Thanh toán
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    )
}

export default Cart