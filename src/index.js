import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return (
    <div className="header">
      <h1>Fast React Pizza</h1>
    </div>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </main>
  );
};

const Pizza = (props) => {
  return (
    <li className={props.pizza.soldOut ? 'pizza sold-out':'pizza'}>
      <img src={props.pizza.photoName} alt={props.name} />
      <div>
        <h3>{props.pizza.name} </h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.soldOut ? "sold out" : props.pizza.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const open = 8;
  const close = 22;
  const isOpen = hour >= open && hour < close;
  console.log(hour);


  return (
    <footer className="footer">
      {isOpen ? (
        <Order open={open} close={close} />
        
      ) : (
        <p>
          We happy to wellcome you between {open} to {close}{" "}
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className="order">
      <p>We'r currently open until {props.close}</p>
      <button className="btn">Order</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-undef
