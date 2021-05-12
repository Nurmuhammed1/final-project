import React, { useContext, useState } from "react";
import "./Main.css";
import "../../components/Header/Header.css";
import video from "../../assets/video/video.mp4";
import { useHistory } from "react-router";
import { productContext } from "../../context/ProductContext";

const Main = () => {
    const history = useHistory();
    const { getProducts } = useContext(productContext);
    const [searchValue, setSearchValue] = useState(getSearchValue());

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search);
        search.set("q", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setSearchValue(e.target.value);
        getProducts(history);
    };

    function getSearchValue() {
        const search = new URLSearchParams(history.location.search);
        return search.get("q");
    }

    return (
        <>
            <div className="header">
                <video
                    className="header_video"
                    src={video}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>

            <div className="container">
                <h1 className="title title__header">ALL KINDS OF BOOKS</h1>
            </div>
            <input
                type="text"
                placeholder="search"
                onChange={handleValue}
                value={searchValue}
            />
        </>
    );
};

export default Main;
