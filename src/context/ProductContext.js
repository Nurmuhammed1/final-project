import axios from "axios";
import React, { useReducer, useState } from "react";
import { useHistory } from "react-router";
import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductsInCart,
} from "../components/helpers/calcPrice";

export const productContext = React.createContext();

const INIT_STATE = {
    productsData: [],
    productDetails: null,
    cart: {},
    paginationPages: 1,
    cartLength: getCountProductsInCart,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                ),
            };
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload };
        case "GET_COMMENTS":
            return { ...state, Comment: action.payload };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState("");
    const history = useHistory();

    async function getProducts(history) {
        console.log(history + "Nur");
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 3);
        history.push(`${history.location.pathname}?${search.toString()}`);
        let res = await axios.get(
            `http://localhost:8000/products?_limit=6&${window.location.search}`
        );
        dispatch({
            type: "GET_PRODUCTS",
            payload: res,
        });
    }

    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredCart = cart.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredCart.length > 0) {
            cart.products = cart.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            cart.products.push(newProduct);
        }

        console.log(newProduct);
        newProduct.subPrice = calcSubPrice(newProduct);
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }

    function changeProductCount(count, id) {
        if (count < 1) return;
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = cart.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function checkProductCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newCart = cart.products.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
    }

    function postNewProduct(product) {
        axios.post("http://localhost:8000/products", product);
    }

    async function getProductDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data,
        });
        console.log(data);
    }

    async function saveProduct(id, newProduct, history) {
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
        getProductDetails(id);
        getProducts(history);
    }

    async function deleteProduct(id) {
        return await axios.delete(`http://localhost:8000/products/${id}`);
    }

    async function sendComment(card) {
        console.log(card, "context");
        await axios.patch(`http://localhost:8000/products/${card.id}`, card);
    }

    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                productDetails: state.productDetails,
                cart: state.cart,
                searchData: state.searchData,
                paginationPages: state.paginationPages,
                postNewProduct,
                getProducts,
                getProductDetails,
                saveProduct,
                deleteProduct,
                setPage,
                addProductToCart,
                changeProductCount,
                checkProductCart,
                getCart,
                sendComment,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;
