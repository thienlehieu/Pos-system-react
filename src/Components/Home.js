import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import logo from "../Data/images/logo.JPG";


const Home = ({onAdd, isLogin, menuItems, menuSearchItems, setMenuSearchItems}) => {
  const allCategories = ["Tất cả", ...new Set(menuItems.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState("");
  console.log(menuItems)
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Tất cả") {
      setMenuSearchItems(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setMenuSearchItems(newItems);
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
          categories={allCategories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuSearchItems} onAdd={onAdd} isLogin={isLogin}/>
      </section>
    </main>
  );
};

export default Home;