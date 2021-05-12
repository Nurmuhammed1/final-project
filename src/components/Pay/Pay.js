import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Pay.css";
import { Link } from "react-router-dom";

export default class PaymentForm extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    clearProductCart = () => {
        localStorage.clear("cart");
    };
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    style={{ backgroundColor: "blue" }}
                />
                <form className="inp__form">
                    <input
                        className="inp-input"
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="name"
                        placeholder="Card Name"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                    <input
                        className="inp-input"
                        type="tel"
                        name="expiry"
                        placeholder="expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                    <Link to="/">
                        <button
                            onClick={this.clearProductCart}
                            className="pay_now"
                        >
                            Pay now
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}
