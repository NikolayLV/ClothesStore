import {useEffect, useState} from "react";
import axios from "axios";
import style from "./product.module.scss";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

const Product = () => {
    const [product, setProduct] = useState(false);
    let {productId} = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    })

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

        <div className={style.block__product}>
            <h2 className={style.product__title}>{product.title}</h2>
            <div className={style.product}>
                <div className={style.product__left}>

                    <div className={style.block__image}>
                        <img className={style.product__image} src={product.image} alt=""/>
                    </div>

                </div>
                <div className={style.product__right}>
                    <h3 className={style.category}>{product.category}</h3>
                    <h3 className={style.price}>{product.price}$</h3>
                    <p className={style.size}>{t('shopSize')}</p>
                    <div className={style.block__size}>
                        <p className={style.sizes}>S</p>
                        <p className={style.sizes}>M</p>
                        <p className={style.sizes}>L</p>
                        <p className={style.sizes}>XL</p>
                        <p className={style.sizes}>XXL</p>
                    </div>
                    <p className={style.color}>{t('shopColor')}</p>
                    <div className={style.block__color}>
                        <div className={style.colors1}></div>
                        <div className={style.colors2}></div>
                        <div className={style.colors3}></div>
                        <div className={style.colors4}></div>
                    </div>

                </div>
            </div>


            <p className={style.desc2}>{t('shopDesc')}</p>
            <p className={style.desc}>{product.description}</p>


        </div>
    )
}

export default Product;