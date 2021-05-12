import React, { useContext, useState } from "react";
import "./OrderBuyForm.css";
import { Link } from "react-router-dom";
import { calcTotalPrice } from "../helpers/calcPrice";
import { productContext } from "../../context/ProductContext";

const OrderBuyForm = () => {
    const { cart } = useContext(productContext);
    return (
        <div className="container">
            <div className="forms-css">
                <p className="data-info">Name:</p>
                <input name="name" className="form-inp" type="text" />
                <p className="data-info">Last name:</p>
                <input name="lastName" className="form-inp" type="text" />
                <p className="data-info">E-mail:</p>
                <input name="email" className="form-inp" type="text" />
                <p className="data-info">Phone number:</p>
                <input name="number" className="form-inp" type="number" />
                <p>Total: {calcTotalPrice(cart.products)}</p>
                <Link to="/buy">
                    <button className="form-btn">Заказать</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderBuyForm;
