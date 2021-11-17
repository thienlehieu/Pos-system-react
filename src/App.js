import './App.css';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header"
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment'
import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    )
  }
}

export default App;

