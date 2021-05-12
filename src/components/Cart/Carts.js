import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import { calcTotalPrice } from "../helpers/calcPrice";
import "./Carts.css";
import { Link, useHistory } from "react-router-dom";

const Cart = ({ item }) => {
    const { getCart, cart, changeProductCount, deleteProduct } =
        useContext(productContext);
    const history = useHistory();

    useEffect(() => {
        getCart();
    }, []);

    const handleDelete = (id) => {
        deleteProduct(id).then(() => {
            history.push("/");
        });
    };

    return (
        <div className="car">
            {cart.products ? (
                <div className="cart1">
                    <div className="all-cards">
                        {cart.products.map((product) => (
                            <div className="main-card" key={product.item.id}>
                                <div className="img-card">
                                    <img
                                        src={product.item.img}
                                        alt="product-img"
                                    />
                                </div>
                                <div className="info-card">
                                    <h3 className="h3">{product.item.title}</h3>
                                    <p className="opisanie">
                                        {product.item.subTitle}
                                    </p>
                                    <div className="inp-and-price">
                                        <input
                                            className="td"
                                            type="number"
                                            onChange={(e) =>
                                                changeProductCount(
                                                    e.target.value,
                                                    product.item.id
                                                )
                                            }
                                            value={product.count}
                                        />
                                        <p>Price:{product.item.price}</p>
                                    </div>
                                </div>
                                <div className="btns-card">
                                    <button
                                        className="btns-shop"
                                        onClick={`/details.id`}
                                    >
                                        Info
                                    </button>
                                    <button
                                        className="btns-shop"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                    <div className="totalPrice">
                        <h4>Total:{calcTotalPrice(cart.products)}</h4>
                        <Link to="/order">
                            <button className="btn_cart">Купить</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Cart;
