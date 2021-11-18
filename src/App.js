import './App.css';
import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header"
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment'
import Login from './Components/Login'
import items from "./Data/items";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App () {
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems)
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
}
  
  return (
    <Router>
      <Header countCartItems={cartItems.length}/>
      <Routes>
        <Route exact path={"/"} element={<Home items={items} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
