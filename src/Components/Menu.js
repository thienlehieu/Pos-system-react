import React from "react";
import {useNavigate} from "react-router-dom"; 

const Menu = ({items, onAdd, isLogin}) => {
  let navigate = useNavigate()
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header> 
                <h4>{title}</h4>
                <h4 className="price">{price}đ</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <button className="addToCart" onClick={isLogin ? () => onAdd(item) :() => navigate("/login")}>Chọn mua</button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
