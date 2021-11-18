import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import logo from "../Data/images/logo.JPG";


const Home = ({ items, onAdd, cartItems }) => {
  const allCategories = ["Tất cả", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Tất cả") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Thực đơn</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} onAdd={onAdd} cartItems={cartItems} />
      </section>
    </main>
  );
};

export default Home;