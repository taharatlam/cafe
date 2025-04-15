'use client'
import React, { useState } from "react";
import Image from "next/image";
import topPart from "@/images/top-part.svg";
import bottomPart from "@/images/bottom-part.svg";

const menuData = {
  "10\" Baguette": [
    { name: "Special Combo", price: 10.95 },
    { name: "Grilled Pork", price: 10.95 },
    { name: "Grilled Chicken", price: 10.95 },
    { name: "Ham", price: 10.0 },
    { name: "BBQ Bacon", price: 10.0 },
    { name: "BBQ Pork", price: 10.0 },
    { name: "Sardine", price: 10.0 },
  ],
  "Croissant & Others": [
    { name: "Ham", price: 14.95 },
    { name: "Turkey", price: 14.95 },
    { name: "Ham & Turkey", price: 14.95 },
    { name: "Turkey Club with Bacon", price: 14.95 },
    { name: "Spring Rolls", price: 5.0 },
  ],
  Coffee: [
    { name: "Latte", price: 6.5 },
    { name: "Cappuccino", price: 6.0 },
    { name: "Cartado", price: 5.75 },
    { name: "Americano", price: 5.25 },
    { name: "Regular", price: 4.0 },
    { name: "Decaf", price: 4.0 },
    { name: "Vietnamese", price: 7.25 },
  ],
  "Boba Tea": [
    { name: "Strawberry green tea", price: 7.0 },
    { name: "Mango green tea", price: 7.0 },
    { name: "Oolong tea", price: 6.5, withMilkTea: 7.5 },
    { name: "Jasmine tea", price: 6.5, withMilkTea: 7.5 },
    { name: "Green tea", price: 6.5, withMilkTea: 7.5 },
    { name: "Black tea", price: 6.5, withMilkTea: 7.5 },
    { name: "Thai tea", price: 6.5 },
    { name: "Macha lemon tea", price: 7.5 },
  ],
  Pastry: [
    { name: "Almond Croissant", price: 6.75 },
    { name: "Chocolate Croissant", price: 6.75 },
    { name: "Chocolate chip cookies", price: 4.0 },
    { name: "Croissant", price: 4.0 },
    { name: "Chip bag", price: 1.5 },
  ],
  Drinks: [
    { name: "Bottle water", price: 1.75 },
    { name: "Soda", price: 1.75 },
  ],
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = Object.keys(menuData);

  const renderItems = (items) => (
    <div className="row">
      {items.map((item, index) => (
        <div key={index} className="col-md-6 mb-2 d-flex justify-content-between menu-item">
          <span>{item.name}</span>
          <span>${item.withMilkTea ?? item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );

  const renderCategory = (category) => (
    <div key={category} className="mb-4">
      <h5 className="fw-bold border-bottom pb-2 mb-3">{category}</h5>
      {renderItems(menuData[category])}
    </div>
  );

  return (

    <div className="menu-container">
            <Image src={topPart} alt="menu"  />
            <div className="menu-inner">
                {/* Tabs */}
                <ul className="nav nav-tabs cc-tabs ">
                    <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "All" ? "active" : ""}`}
                        onClick={() => setActiveTab("All")}
                    >
                        All
                    </button>
                    </li>
                    {categories.map((cat) => (
                    <li className="nav-item" key={cat}>
                        <button
                        className={`nav-link ${activeTab === cat ? "active" : ""}`}
                        onClick={() => setActiveTab(cat)}
                        >
                        {cat}
                        </button>
                    </li>
                    ))}
                </ul>
                {/* Content */}
                <div>
                    {activeTab === "All"
                    ? categories.map((cat) => renderCategory(cat))
                    : renderCategory(activeTab)}
                </div>
            </div>
            <Image src={bottomPart} alt="menu"  />
    </div>
  );
};

export default MenuTabs;
