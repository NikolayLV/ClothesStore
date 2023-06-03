import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import phone from "../assets/images/phone.png";
import React from "react";
import Style from "./Header.scss";
import {NavLink} from "react-router-dom";


function Header() {

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
        <header className="header">
            <div className="header__logo">
                <h2 className="logo">{t('Womazing')}</h2>
            </div>
            <div className="header__link">

                <div className="header__list">
                    <NavLink to="/" className="header__a">{t('home')}</NavLink>
                    <NavLink to="/shop" className="header__a">{t('shop')}</NavLink>
                    <NavLink to="/about" className="header__a">{t('about')}</NavLink>
                    <NavLink to="/contacts" className="header__a">{t('contacts')}</NavLink>
                </div>


            </div>
            <div className="header__phone">
                <img src={phone} alt="" className="phone__img"/>
                <a className="header__num">+38(068)163-96-68</a>

            </div>
            <div className="header__cart">
                <div className="cl-toggle-switch">
                    <label className="cl-switch">
                        <input type="checkbox"/>
                        <span onClick={handleLenguageChange}></span>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Header;