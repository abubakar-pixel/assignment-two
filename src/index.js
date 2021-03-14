import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import InventorySection from "./Components/InventorySection/InventorySection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation />

    <Header />

    <main>
      <AboutSection />

      <div id="hr">
        <hr className="container" />
      </div>

      <InventorySection />

      <ContactSection />
    </main>

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
