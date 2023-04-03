import prodImage from "../assets/images/col1.png"
import img2 from "../assets/images/col2.png"
import img3 from "../assets/images/col3.png"

let state = {
    main: {
        products: [
            {
                id: 1,
                title: "T-Shirt USA",
                image: '${prodImage}',
                desc: "Lorem Anna Lora Dema",
                category: "T-Shirt",
                price: "29$"
            },
            {
                id: 2,
                title: "Glow swimsuit",
                image: '{img1}',
                desc: "Lorem Anna Lora Dema",
                category: "T-Shirt",
                price: "29$"
            },
            {
                id: 3,
                title: "Sweatshirt Sweet Shot",
                image: '${img1}',
                desc: "Lorem Anna Dema",
                category: "T-Shirt",
                price: "29$"
            },
            {
                id: 4,
                title: "T-Shirt USA",
                image: "{img1}",
                desc: "Lorem Anna Lora Dema",
                category: "T-Shirt",
                price: "29$"
            },
            {
                id: 5,
                title: "Glow swimsuit",
                image: "{img2}",
                desc: "Lorem Anna Lora Dema",
                category: "T-Shirt",
                price: "29$"
            },
            {
                id: 6,
                title: "Sweatshirt Sweet Shot",
                image: "{img3}",
                desc: "Lorem Anna Lora Dema",
                category: "T-Shirt",
                price: "29$"
            },
        ],
    }

}


export default state;

