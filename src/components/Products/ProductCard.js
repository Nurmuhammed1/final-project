import React, { useContext, useEffect } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContext";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ProductCard = (props, { item }) => {
    const { addProductToCart, checkProductCart } = useContext(productContext);

    useEffect(() => {
        checkProductCart();
    }, []);

    return (
        <div className="cart_main">
            <div className="container__cart">
                <Card className="cart">
                    <CardActionArea>
                        <CardMedia
                            className="in_cart"
                            image={props.item.img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {props.item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {props.item.author}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <span className="span_price">{props.item.price}$</span>

                    <CardActions>
                        <Link to={`/details/${props.item.id}`}>
                            <Button size="small" color="primary">
                                Подробнее
                            </Button>
                        </Link>

                        <Button
                            size="small"
                            color="primary"
                            onClick={() => addProductToCart(props.item)}
                        >
                            Добавить в корзину
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default ProductCard;
