import React, { useContext, useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router";
import { productContext } from "../../../context/ProductContext";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import "./AdminProductList.css";

const AdminProductList = () => {
    const { getProducts, productsData, paginationPages } =
        useContext(productContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getProducts(history);
    };

    useEffect(() => {
        getProducts(history);
    }, []);

    return (
        <div className="wrap">
            <div className="list">
                {productsData.length > 0 &&
                    productsData.map((item) => (
                        <AdminProductCard
                            history={history}
                            key={item.id}
                            item={item}
                        />
                    ))}
                <Pagination
                    page={+page}
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                />
            </div>
        </div>
    );
};

export default AdminProductList;
