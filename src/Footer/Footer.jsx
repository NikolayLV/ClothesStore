import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import footerStyle from "./Footer.scss";
import f1 from "../assets/images/footer1.png";
import f2 from "../assets/images/footer2.png";
import f3 from "../assets/images/footer3.png";

function Footer ()  {
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

        <footer className="footer" id="Help">

            <section className="footer__container">
                <div className="left__footer">
                    <p className="p__footer">+38(068)163-96-68</p>
                    <p className="p__footer">Nikolayd2002@gmail.com</p>
                    <div className="img__footer">
                        <img src={f1} alt="" className="img"/>
                        <img src={f2} alt="" className="img"/>
                        <img src={f3} alt="" className="img"/>
                    </div>
                    <p className="p__footer">{t('fprava')}</p>
                    <p className="p__footer">{t('fprava2')}</p>
                    <p className="p__footer">{t('fprava3')}</p>


                </div>
                <div className="right__footer">
                    <div className="block">
                        <h2 className="h2__footer">{t('fhome')}</h2>
                        {/*<a href="#" className="a__footer">Features</a>*/}
                        {/*<a href="#" className="a__footer">Catalog</a>*/}
                    </div>
                    <div className="block">
                        <h2 className="h2__footer">{t('fshop')}</h2>
                        <li className="a__footer">{t('fshop1')}</li>
                        <li className="a__footer">{t('fshop2')}</li>
                        <li className="a__footer">{t('fshop3')}</li>
                        <li className="a__footer">{t('fshop4')}</li>
                    </div>
                    <div className="block">
                        <h2 className="h2__footer">{t('fabout')}</h2>
                        {/*<a href="#" className="a__footer">Create Your Own Beat</a>*/}
                    </div>
                    <div className="block">
                        <h2 className="h2__footer">{t('fcontact')}</h2>
                        {/*<a href="#" className="a__footer">Latest Posts</a>*/}
                        {/*<a href="#" className="a__footer">Using Soundtoys<br> Decapitator</a>*/}

                    </div>
                </div>
            </section>


            <div id="bottom-footer">
                <span className="span__footer">{t('finfo')}</span>
            </div>
        </footer>
    )
}

export default Footer;