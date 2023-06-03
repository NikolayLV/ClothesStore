import {useEffect, useState} from "react";
import axios from "axios";
import style from "./product.module.scss";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";
import Reviews from "./Reviews/Reviews"
import styleDesc from "./desc.scss";
import {use} from "i18next";
import Modal from "../../Modal/Modal";

const Product = (props) => {
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

    const [isProductBasket, setIsProductBasket] = useState(false);
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [sizeActive, setSizeActive] = useState(false);

    const addInfo = () => {
        if (active == false) {
            setActive(true);
            setActive2(false);
        } else {
            setActive(false);
        }
    }

    const addInfo2 = () => {
        if (active2 == false) {
            setActive2(true);
            setActive(false);
        } else {
            setActive2(false);
        }
    }
    // const [modalActive, setModalActive] = useState(true);
    // const [isThisReview, setIsThisReview] = useState(false);

    // const putCategory = () => {
    //     if (isThisReview == false) {
    //         setIsThisReview(true);
    //     } else {
    //         setIsThisReview(false);
    //     }
    //
    // }

    const addProductToBasket = () => {
        alert(`${product.title} ${t('basket')}`);
        setIsProductBasket(true);
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
                    <h3 className={style.category}>{t('shopCat')} {product.category}</h3>
                    <h3 className={style.price}>{t('shopPrice')} {product.price}$</h3>
                    <p className={style.size}>{t('shopSize')}</p>
                    <div className={style.block__size}>
                        <p className={style.sizes} id="1">S</p>
                        <p className={style.sizes} id="2">M</p>
                        <p className={style.sizes} id="3">L</p>
                        <p className={style.sizes} id="4">XL</p>
                        <p className={style.sizes} id="5">XXL</p>
                    </div>
                    <p className={style.color}>{t('shopColor')}</p>
                    <div className={style.block__color}>
                        <div className={style.colors1}></div>
                        <div className={style.colors2}></div>
                        <div className={style.colors3}></div>
                        <div className={style.colors4}></div>
                    </div>
                    {isProductBasket ?
                        <button onClick={addProductToBasket} className={style.enter}>{t('basketBtn')}</button> :
                        <button onClick={addProductToBasket} className={style.enter}>{t('buyBtn')}</button>

                    }


                </div>
            </div>

            {/*<div className={style.links}>*/}
            {/*        <button className={style.enter} onClick={() => setModalActive(true)}>Description</button>*/}
            {/*</div>*/}

            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}

            <div className="buttons__info">
                <button className="info__btns" onClick={addInfo2}>{t('btnRev')}</button>
                <button className="info__btns" onClick={addInfo}>{t('btnDesc')}</button>
            </div>


            <p className={active ? "desc2 active" : "desc2"}>{t('shopDesc')}</p>
            <p className={active ? "desc active" : "desc"}>{product.description}</p>

            <div className={active2 ? "reviews active" : "reviews"}>
                <Reviews name={product.title}/>
            </div>


        </div>
    )
}

export default Product;