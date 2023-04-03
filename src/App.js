import {useTranslation} from "react-i18next";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";
// import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React, {useState} from "react";
import phone from "./assets/images/phone.png";
import HeaderStyle from "./Header/Header.scss";
import Header from "./Header/Header";
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./Contacts/Contacts";
import About from "./About/about";
import Shop from "./Shop/Shop";
import state from "./Data/Data";
import BestSellers from "./Shop/BestSellers";
import Product from "./Shop/Product/product";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <BestSellers/>
//     },
//     {
//         path: "product",
//         element: <Product/>
//     }
// ])
function App(props) {
  const {t} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const handleLenguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === "ru") {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  }


  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/shop" element={<Shop products={state.main.products}/>}/>
            <Route path="/:productId" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </div>

  );
}


export default App;
