import style from "./shop.scss";
import Product from "./BestSellers";
import BestSellers from "./BestSellers";
import {useTranslation} from "react-i18next";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";

function Shop(props) {
    let productItems = props.products.map(product => <Product product={product}/>)

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

        <section className="shop">
            <h1 className="shop__h1">{t('shopH1')}</h1>
            <div className="shop__block">
                <input type="text" name="text" className="input" placeholder={t('shopInput')}/>
                <button className="shop__btn">{t('shopBtn')}</button>
            </div>



            <BestSellers/>
        </section>

)
}

export default Shop;