import "./AdminProductCard.css";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";

const ProductCard = ({ item }) => {
    const id = item.id;
    const history = useHistory();
    const { getProductDetails, saveProduct, deleteProduct, getProducts } =
        useContext(productContext);
    const [editStatus, setEditStatus] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});

    const handleValue = (e) => {
        let newProduct = { ...editedProduct, [e.target.name]: e.target.value };
        setEditedProduct(newProduct);
    };
    const handleSave = () => {
        saveProduct(id, editedProduct, history);
        setEditStatus(false);
    };

    const handleEdit = (id) => {
        setEditStatus(true);
        getProductDetails(id);
    };

    const handleDelete = () => {
        deleteProduct(id).then(() => {
            getProducts(history);
            // history.push("/");
        });
    };
    return (
        <div>
            <div>
                <div className="pop">
                    <div className="container">
                        <div className="car1">
                            <div className="car12">
                                <div className="cart2">
                                    <div className="all-cards1">
                                        <div className="main-card1">
                                            {editStatus ? (
                                                <div className="edit-textareas">
                                                    <div className="first-area">
                                                        <p>Name:</p>
                                                        <textarea
                                                            name="name"
                                                            onChange={
                                                                handleValue
                                                            }
                                                        >
                                                            {item.name}
                                                        </textarea>
                                                        <p>author:</p>
                                                        <textarea
                                                            name="author"
                                                            onChange={
                                                                handleValue
                                                            }
                                                            className="box-desc"
                                                        >
                                                            {item.author}
                                                        </textarea>
                                                        <p>First image:</p>
                                                        <textarea
                                                            name="img"
                                                            onChange={
                                                                handleValue
                                                            }
                                                        >
                                                            {item.img}
                                                        </textarea>
                                                        <p>SubTitle:</p>
                                                        <textarea
                                                            name="subTitle"
                                                            onChange={
                                                                handleValue
                                                            }
                                                        >
                                                            {item.subTitle}
                                                        </textarea>
                                                    </div>
                                                    <div className="second-area">
                                                        <p>
                                                            Second description:
                                                        </p>
                                                        <textarea
                                                            name="secondDescription"
                                                            onChange={
                                                                handleValue
                                                            }
                                                            className="box-desc"
                                                        >
                                                            {
                                                                item.secondDescription
                                                            }
                                                        </textarea>
                                                        <p>Second image:</p>
                                                        <textarea
                                                            name="secondImg"
                                                            onChange={
                                                                handleValue
                                                            }
                                                        >
                                                            {item.secondImg}
                                                        </textarea>
                                                        <p>Price:</p>
                                                        <textarea
                                                            name="price"
                                                            onChange={
                                                                handleValue
                                                            }
                                                            className="box-desc"
                                                        >
                                                            {item.price}
                                                        </textarea>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="img-card1">
                                                        <img
                                                            src={item.img}
                                                            alt="product-img"
                                                        />
                                                    </div>
                                                    <div className="info-card1">
                                                        <h4>{item.name}</h4>
                                                        <p className="box-desc">
                                                            {item.author}
                                                        </p>
                                                        <p>{item.price}$</p>
                                                    </div>
                                                </>
                                            )}
                                            <div className="details_btns">
                                                {editStatus ? (
                                                    <button
                                                        className="btns-sho1p"
                                                        onClick={handleSave}
                                                    >
                                                        Сохранить
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btns-sho1p"
                                                        onClick={() =>
                                                            handleEdit(item.id)
                                                        }
                                                    >
                                                        Редактировать
                                                    </button>
                                                )}
                                                <button
                                                    className="btns-sho1p"
                                                    onClick={handleDelete}
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
