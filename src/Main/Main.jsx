import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import mainStyle from "./Main.scss";
import lineW from "../assets/images/lineW.png";
import lineB from "../assets/images/lineB.png";
import mainImg from "../assets/images/mainImg.png";
import mainImg2 from "../assets/images/mainImg2.png";
import mainImg3 from "../assets/images/mainImg3.png";
import col1 from "../assets/images/col1.png";
import col2 from "../assets/images/col2.png";
import col3 from "../assets/images/col3.png";
import imp1 from "../assets/images/imp1.png";
import imp2 from "../assets/images/imp2.png";
import imp3 from "../assets/images/imp3.png";
import team from "../assets/images/team.png";
import {NavLink} from "react-router-dom";
import React from "react";

function Main() {

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
        <main className="main">
            <section className="section__main">
                <div className="main__right">
                    <h1 className="main__h1">
                        {t('mainh1')}
                    </h1>
                    <h3 className="main__h3">
                        {t('mainh3')}

                    </h3>
                    <NavLink to="/shop" className="main__btn">{t('mainbtn')}</NavLink>

                    <div className="main__arrows">
                        <img src={lineW} alt="" className="main__arrow"/>
                        <img src={lineB} alt="" className="main__arrow"/>
                        <img src={lineW} alt="" className="main__arrow"/>
                    </div>
                </div>

                <div className="main__left">
                    <img src={mainImg} alt="" className="main__img"/>
                    <img src={mainImg2} alt="" className="main__img2"/>
                    <img src={mainImg3} alt="" className="main__img3"/>
                </div>
            </section>

            <section className="section__col">
                <h2 className="col__h2">{t('collh2')}</h2>
                <div className="blocks__col">
                    <div className="block__col1">
                        <img src={col1} alt="" className="col__img1"/>
                        <p className="col__p">{t('collp1')}</p>
                        <p className="col__price">$29</p>
                    </div>
                    <div className="block__col2">
                        <img src={col2} alt="" className="col__img2"/>
                        <p className="col__p">{t('collp2')}</p>
                        <p className="col__price">$49</p>
                    </div>
                    <div className="block__col3">
                        <img src={col3} alt="" className="col__img3"/>
                        <p className="col__p">{t('collp3')}</p>
                        <p className="col__price">$39</p>
                    </div>
                </div>
                <div className="col__btn__block">
                    <NavLink to="/shop" className="col__btn">{t('collbtn')}</NavLink>
                </div>
            </section>

            <section className="important">
                <h2 className="imp__h2">{t('imph2')}</h2>
                <div className="blocks__imp">
                    <div className="block__imp1">
                        <img src={imp1} alt="" className="imp__img1"/>
                        <p className="imp__p">{t('impp1')}</p>
                        <p className="imp__price">{t('impp1.1')}</p>
                    </div>
                    <div className="block__imp2">
                        <img src={imp2} alt="" className="imp__img2"/>
                        <p className="imp__p">{t('impp2')}</p>
                        <p className="imp__price">{t('impp2.1')}</p>
                    </div>
                    <div className="block__imp3">
                        <img src={imp3} alt="" className="imp__img3"/>
                        <p className="imp__p">{t('impp3')}</p>
                        <p className="imp__price">{t('impp3.1')}</p>
                    </div>
                </div>
            </section>

            <section className="team">
                <h2 className="team__h2">{t('teamh2')}</h2>
                <div className="team__blocks">
                    <div className="team__left">
                        <img src={team} alt="" className="team__img"/>

                    </div>
                    <div className="team__right">
                        <h3 className="team__h3">{t('teamh3')}</h3>
                        <p className="team__p">{t('teamp')}</p>

                    </div>
                </div>


            </section>


        </main>

    )
}


export default Main;