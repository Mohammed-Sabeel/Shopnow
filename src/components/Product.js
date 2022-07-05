import React, { useContext,useEffect, useState } from 'react'
import { ContextToal } from '../App'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
const Product = (props) => {
    const {datas}=props;
    const total = useContext(ContextToal);
   const {products} = total;
    const [loading,setLoading] = useState(false);
   
useEffect(()=>{
  if(products){
    setLoading(true)
  }
  else{
    setLoading(false)
  }
},[products])

    const Loading =()=>{
      return (
        <>
      
           <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <Skeleton height={300}/>
                    </div>
                    <div className="col-md-3">
                    <Skeleton height={300}/>
                    </div>
                    <div className="col-md-3">
                    <Skeleton height={300}/>
                    </div>
                    <div className="col-md-3">
                    <Skeleton height={300}/>
                    </div>
    
                </div>
            </div>
        </>
      )
    }






    return (
        <div>
       {loading ?
            <div className="container">
                <div className="mt-4">
                    <div className="row">
                      
                            { products.map((curr) => {
            const { title, category, price,id } = curr;
            return (
              <div className="col-lg-3  mb-3 col-6" key={id}>
                <div className="card shadow">
                 
                    <img
                      className="card-img-top img-fluid w-25 h-50 mx-auto mt-2"
                      src={curr.image}
                      alt={curr.title}
                    />
                 
                  <div className="card-body">
                    <h5 className="card-title">{title.substring(0,16)}</h5>
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
                        <b>$ {Math.round(price)}</b>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12">
                        <Link className="btn btn-dark btn-sm" style={{color:'white'}} to='/product-details' state={{para:curr}}>
                        Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) }
                      

                    </div>
                </div>
            </div>:<Loading />}
        </div>
    )
}

export default Product