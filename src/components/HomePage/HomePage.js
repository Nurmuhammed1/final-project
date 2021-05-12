import React from "react";
import Main from "../Main/Main";
import Motivation from "../Motivation/Motivation";
import ProductList from "../Products/ProductList";

const HomePage = () => {
    return (
        <div className="container-main">
            <Main />
            <ProductList />
            <Motivation />
        </div>
    );
};

export default HomePage;
