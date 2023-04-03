import style from "./bestSellers.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BestSellers = () => {

    let [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data)
            })
    })

    const showMoreHandler = (productId) => {
        navigate(`/${productId}`)
    }


//       let products = [
//
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 120
//         }
//     },
//     {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//             "rate": 4.1,
//             "count": 259
//         }
//     },
//     {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//             "rate": 4.7,
//             "count": 500
//         }
//     },
// ];

    return (
        <section className={style.bestSellers}>
            <div className={style.cards}>
                {
                    products.map((pr) => {
                        return (
                            <div className={style.card}>
                                <div className={style.block__img}>
                                    <img className={style.card__img} src={pr.image} alt={`img_product${pr.id}`}/>
                                </div>
                                <div className={style.block__item}>
                                    <div className={style.block__title}>
                                        <h2>{pr.title}</h2>
                                    </div>

                                    <h3>{pr.price}$</h3>
                                    <div className={style.buttons}>
                                        <button className={style.button} onClick={() => {
                                            showMoreHandler(pr.id)
                                        }}><span></span><p data-start="good luck!"
                                                           data-text="Card Product"
                                                           data-title="Buy it!"></p></button>
                                    </div>
                                    {/*<button onClick={() => {showMoreHandler(pr.id)}}>Buy</button>*/}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default BestSellers;