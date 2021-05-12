import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { productContext } from "../../context/ProductContext";
import "./ProductDetails.css";

const ProductDetails = (props) => {
    const { getProductDetails, productDetails, sendComment } =
        useContext(productContext);

    const { currentUser } = useContext(authContext);

    const id = props.match.params.id;

    const [coment, setComent] = useState({
        user: currentUser?.email,
        comment: "",
        time: new Date().toLocaleDateString(),
    });

    function handleChange(e) {
        let newComent = {
            ...coment,
            [e.target.name]: e.target.value,
        };
        setComent(newComent);
        console.log(newComent, "newcommm");
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(coment, "check");
        productDetails.comment?.push(coment);
        console.log(productDetails, "this send");
        sendComment(productDetails);
        setComent({
            user: currentUser?.email,
            comment: "",
            time: new Date().toLocaleDateString(),
        });
    }

    useEffect(() => {
        getProductDetails(id);
        console.log(productDetails);
    }, []);

    return (
        <div>
            <div>
                <div className="wraper">
                    <div className="container">
                        <div className="main-left">
                            <div className="main-box">
                                {productDetails ? (
                                    <>
                                        <h1 className="ditails-title">
                                            {productDetails.name}
                                        </h1>
                                        <div className="details-header">
                                            <div className="img-description">
                                                <img
                                                    className="details-img"
                                                    src={
                                                        productDetails.secondImg
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="details">
                                            <div classNam="description-subTitle">
                                                <h2 className="details-description">
                                                    {productDetails.description}
                                                </h2>

                                                <p className="details-subTitle">
                                                    {productDetails.subTitle}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="details-secondDescription">
                                                    {
                                                        productDetails.secondDescription
                                                    }
                                                    {productDetails.type}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    "details"
                                )}
                            </div>
                            Оставьте свой отзыв:
                            <input
                                onChange={handleChange}
                                className="details_inp"
                                value={coment.comment}
                                name="comment"
                                type="text"
                                placeholder="Оставьте отзыв"
                            />
                            <button
                                className="details_btn"
                                onClick={handleSubmit}
                            >
                                Отправить
                            </button>
                            <br />
                            Все комментарии:
                            <div className="comment">
                                {productDetails?.comment.map((item) => (
                                    <>
                                        <h1> Пользователь:{item.user}</h1>
                                        <h2> Отзыв: {item.comment}</h2>
                                        <p> дата добавления: {item.time}</p>
                                        <hr />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
