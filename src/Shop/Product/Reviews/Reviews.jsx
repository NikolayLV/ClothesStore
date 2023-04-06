import React, {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import logo from "./assets/user.png"
import style from "./Reviews.module.scss"
import {useTranslation} from "react-i18next";
import useLocalStorage from "../../../hooks/use-localstorage";
import i18n from "../../../i18n";

const Reviews = (props) => {
        const [reviews, setReviews] = useState([
            {
                author: "Nick",
                title: "Product",
                text: "Замечательные кроссовки известного бренда. Расскажу чем они меня покорили и почему я больше не хочу покупать китайские подделки",
                date: "21.11.2022",
                rating: 5
            },
            {
                author: "Olga",
                title: "T-Shirt",
                text: "Замечательные кроссовки известного бренда. Расскажу чем они меня покорили и почему я больше не хочу покупать китайские подделки",
                date: "12.09.2022",
                rating: 3
            },
            {
                author: "Edward",
                title: "Company",
                text: "Замечательные кроссовки известного бренда. Расскажу чем они меня покорили и почему я больше не хочу покупать китайские подделки",
                date: "03.10.2022",
                rating: 4
            },
        ]);

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

        const [current, setCurrent] = useState('');
        const [name, setName] = useState('');


        const currentReviewHandler = (e) => {
            let newValue = e.target.value;

            setCurrent(newValue);
        }

        const nameReviewHandler = (e) => {
            let newValue = e.target.value;
            setName(newValue);

        }


        let date = new Date().toLocaleDateString();

        const addReviewHandler = () => {
            const newReview = {
                author: name,
                title: props.name,
                text: current,
                date: date,
                rating: 4
            }
            if (newReview.text.length >= 5) {
                setReviews([newReview, ...reviews]);

            } else {
                alert(`${t('revAlert')}`)
            }

            setCurrent('');
            setName('');
        }

        return (
            <div className={style.container}>
                {/*<div className={style.review__block}>*/}
                {/*    <input type="text" placeholder={t('revText')} name="" onChange={nameReviewHandler}/>*/}
                {/*    <textarea placeholder={t('revText')} name="" id="" cols="30" rows="10" value={current}*/}
                {/*              onChange={currentReviewHandler}></textarea>*/}
                {/*    <button onClick={addReviewHandler}>{t('revBtn')}</button>*/}
                {/*</div>*/}
                <h3 className={style.rev__add}>{t('revAdd')}</h3>

                <div className="card">
                    <div className="inputBox1">
                        <input type="text" required="required" value={name} onChange={nameReviewHandler}/>
                        <span className="user">{t('revUser')}</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" value={current} onChange={currentReviewHandler}/>
                        <span>{t('revText')}</span>
                    </div>
                    <button className="enter" type="submit" onClick={addReviewHandler}>{t('revBtn')}</button>
                </div>
                <h3 className={style.rev__lenght}>{t('btnRev')}: {reviews.length}</h3>
                {
                    reviews.map((el) => {
                        return (
                            <div className={style.main__block}>
                                <div className={style.reviews}>
                                    <div className={style.block__left}>
                                        <img className={style.rev__img} src={logo} alt=""/>
                                        <h3 className={style.rev__h3}>{el.title}</h3>
                                        <p className={style.rev__p}>{el.date}</p>
                                    </div>
                                    <div className={style.block__right}>

                                        <h3 className={style.rev__h3}>{el.author}</h3>
                                        <p className={style.rev__text}>{el.text}</p>
                                        <p>{el.rate}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
;

export default Reviews;