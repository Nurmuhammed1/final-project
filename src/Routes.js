import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import Header from "./components/Header/Header";
import Carts from "./components/Cart/Carts";
import HomePage from "./components/HomePage/HomePage";
import ProductContextProvider, {
    productContext,
} from "./context/ProductContext";
import Footer from "./components/Footer/Footer";
import OrderBuyForm from "./components/OrderBuyForm/OrderBuyForm";
import PaymentForm from "./components/Pay/Pay";
import Admin from "./components/Admin/Tabs/Tabs";
import ProductDetails from "./components/Products/ProductDetails";
import ProductMain from "./components/Products/ProductMain";

const Routes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/products" component={ProductMain} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/cart" component={Carts} />
                        <Route
                            exact
                            path="/details/:id"
                            component={ProductDetails}
                        />
                        <Route exact path="/order" component={OrderBuyForm} />
                        <Route exact path="/buy" component={PaymentForm} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>
    );
};

export default Routes;
