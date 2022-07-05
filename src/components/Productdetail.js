import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Context,ContextToal } from "../App";

const Productdetail = () => {
  const param = useLocation().state.para;
  const Data = useContext(Context);
  const {totalItems,addCart,product} = useContext(ContextToal);
 

  
 



  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  
  }, [param, Data,product])
  return (

    <div>
      <div className="container">
        <div className="mt-4">
          <div div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center" >
              < img src={param.image}
                alt=""
                className="img-fluid w-75" />
            </div>
            <div className="col-md-7" >
              <div className="row" >
              <div className="mt-4">
              <div className="container" >
                  <h3 className="param_category" > {param.category} </h3>
                  <br />
                  <h4 > {param.title} </h4> <br />
                  <h5 >
                    Rating {param.rating.rate} < AiFillStar />
                  </h5> <br />
                  <h4 className="param_price" > $ {param.price} </h4> <br />
                  <br />
                  <p className="text-muted text-justify" > {param.description} </p>
                  <br />
                  <div className="d-flex" >
                    <button className="btn btn-outline-dark btn_all" onClick={()=>addCart(param)} > Add Cart </button>
                    <Link className="btn btn-dark btn_all"
                      to='/' > Back </Link>

                  </div>
                </div>
              </div>
               
              </div>
              <div>

              </div>

            </div>
            <div>

            </div>
            <div className="mt-5">
              <div className="row" >

                {
                  Data.filter((curr) => {
                    return curr.category === param.category
                  }).map((curr) => {
                    const { title, category, price, id } = curr;
                    return (
                      <div className="col-lg-3  mb-3 col-6" key={id}>
                        <div className="card shadow">

                          <img
                            className="card-img-top img-fluid w-25 h-50 mx-auto mt-2"
                            src={curr.image}
                            alt={curr.title}
                          />

                          <div className="card-body">
                            <h5 className="card-title">{title.substring(0, 16)}</h5>
                            <div className="row">
                              <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                                <p className="card-text mb-3">{category}</p>
                              </div>
                              <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                                <p>{curr.rating.rate} <AiFillStar /></p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-sm-6 col-xs-6 col-6">
                                <b>Rs.{Math.round(price)}</b>
                              </div>
                              <div className="col-lg-6 col-sm-6 col-xs-12">
                                <Link className="btn btn-dark btn-sm mobile_btn" to='/product-details' state={{ para: curr }}>
                                  Buy Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;