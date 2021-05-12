import React, { useEffect, useReducer, useState } from "react";
import app from "../base";

export const authContext = React.createContext();

const INIT_STATE = {
    isAuth: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            };

        case "LOGOUT_USER":
            return {
                ...state,
                user: {},
                isAuth: false,
            };

        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, []);

    async function registerUser(event, history, newUser) {
        event.preventDefault();
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(
                    newUser.email,
                    newUser.password
                );
            history.push("/login");
        } catch (err) {
            console.log(err);
        }
    }

    async function loginUser(event, history, userData) {
        console.log(event, userData, history, "this usr");
        event.preventDefault();

        try {
            const newUser = await app
                .auth()
                .signInWithEmailAndPassword(userData.email, userData.password);

            setCurrentUser(newUser.user);

            history.push("/");
        } catch (err) {
            console.log(err);
        }
    }

    const logoutUser = async () => {
        try {
            await app.auth().signOut();
        } catch (err) {
            console.log("err", err);
        }
    };

    // console.log(currentUser?.email, "user");

    return (
        <authContext.Provider
            value={{ currentUser, registerUser, logoutUser, loginUser }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;
