import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import Style from "./about.scss";
import about1 from "../assets/images/about1.png"
import about2 from "../assets/images/about2.png"

function About () {
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
        <section className="about">
            <h1 className="about__h1">
                {t('aboutH1')}
            </h1>

            <div className="about__block">
                <img src={about1} alt="" className="about__img"/>
                <div className="about__text">
                    <h3 className="about__h3">{t('aboutH3')}</h3>
                    <p className="about__p">{t('aboutP')}</p>
                </div>
            </div>

                <div className="about__block2">
                    <div className="about__text">
                        <h3 className="about__h3">{t('aboutH3.2')}</h3>
                        <p className="about__p">{t('aboutP2')}</p>
                    </div>
                    <img src={about2} alt="" className="about__img"/>
            </div>

            <div className="about__btn">
                <a href="/shop" className="about__btn1">{t('aboutBTN')}</a>

            </div>
        </section>
    )
}

export default About;