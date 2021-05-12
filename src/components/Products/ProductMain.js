import React from "react";
import Sidebar from "../HomePage/SideBar";
import ProductsList from "./ProductList";

const Main = (props) => {
    return (
        <div>
            <ProductsList />
            <Sidebar {...props} />
        </div>
    );
};

export default Main;
