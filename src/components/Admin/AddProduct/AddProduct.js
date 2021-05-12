import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContext";
import "./AddProduct.css";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        author: "",
        img: "",
        subTitle: "",
        secondDescription: "",
        genre: "",
        secondImg: "",
        price: "",
        comment: [],
    });

    const { postNewProduct } = useContext(productContext);

    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value,
        };
        setProduct(newProduct);
    };

    const handleClick = () => {
        postNewProduct(product);
        setProduct({
            name: "",
            author: "",
            img: "",
            subTitle: "",
            secondDescription: "",
            genre: "",
            secondImg: "",
            price: "",
            comment: [],
        });
    };

    return (
        <div className="inps">
            <input
                className="inp-add"
                value={product.name}
                name="name"
                onChange={handleValues}
                type="text"
                placeholder="Заголовок"
            />
            <input
                className="inp-add"
                value={product.author}
                name="author"
                onChange={handleValues}
                type="text"
                placeholder="Автор"
            />
            <input
                className="inp-add"
                value={product.img}
                name="img"
                onChange={handleValues}
                type="text"
                placeholder="Изображение"
            />
            <input
                className="inp-add"
                value={product.subTitle}
                name="subTitle"
                onChange={handleValues}
                type="text"
                placeholder="Подзаголовок"
            />
            <input
                className="inp-add"
                value={product.secondDescription}
                name="secondDescription"
                onChange={handleValues}
                type="text"
                placeholder="Второе описание"
            />
            <input
                className="inp-add"
                value={product.genre}
                name="genre"
                onChange={handleValues}
                type="text"
                placeholder="Жанр"
            />
            <input
                className="inp-add"
                value={product.secondImg}
                name="secondImg"
                onChange={handleValues}
                type="text"
                placeholder="Второе изображение"
            />
            <input
                className="inp-add"
                value={product.price}
                name="price"
                onChange={handleValues}
                type="text"
                placeholder="Цена"
            />
            <button className="btn-add" onClick={handleClick}>
                Добавить
            </button>
        </div>
    );
};

export default AddProduct;
