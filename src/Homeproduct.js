import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { productData } from "./components/Home";
import { Link } from "react-router-dom";
import { AiFillStar,AiOutlineHeart } from "react-icons/ai";
  
const Homeproduct = () => {
  const data = useContext(productData);

  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const filterProduct = async (cat) => {
    const update = await data.filter((x) => {
      return x.category === cat;
    });
    setFilter(update);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setFilter(data);
  }, [data]);

  const Loading = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Skeleton height={300} />
            </div>
            <div className="col-md-3">
              <Skeleton height={300} />
            </div>
            <div className="col-md-3">
              <Skeleton height={300} />
            </div>
            <div className="col-md-3">
              <Skeleton height={300} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center mb-5">
          <button
            className="btn_all btn btn-outline-danger"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn_all btn btn-outline-danger"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>
          <button
            className="btn_all btn btn-outline-danger"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's
          </button>
          <button
            className="btn_all btn btn-outline-danger"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn_all btn btn-outline-danger"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="row p-sm-0">
          {loading ? (
            <Loading />
          ) : (
            filter.map((curr) => {
              const { title, category, price, id } = curr;
              return (
                
                <div className="col-lg-3  mb-3 col-6" key={id}>
                <Link
                      className=" mobile_btn text-decoration-none text-black-100"
                      to="/product-details"
                      state={{ para: curr }}
                    >
                  <div className="card shadow">
                  <AiOutlineHeart className="heart_icon" />
                    <img
                      className="card-img-top img-fluid w-25 h-50 mx-auto mt-2"
                      src={curr.image}
                      alt={curr.title}
                    />

                      <div className="card-body">
                        <h5 className="card-title card_home_title">{title.substring(0, 16)}</h5>
                        <div className="row">
                          <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                            <p className="card-text mb-3 card_home_title">{category}</p>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                            <p className="card_home_title">
                              {curr.rating.rate} <AiFillStar />
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                            <b className="card_home_title">$ {Math.round(price)}</b>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-xs-12"></div>
                        </div>
                      </div>
                  </div>
                    </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Homeproduct;
