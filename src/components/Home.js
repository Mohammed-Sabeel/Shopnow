import React, { createContext, useEffect, useState } from "react";
import { Api_Url } from "../api";
import axios from "axios";
import Carousal from "./Carousal";
import Homeproduct from "../Homeproduct";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const productData = createContext()

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading,setLoading] = useState(true)

  const data = async () => {
    await axios
      .get(`${Api_Url}`)
      .then((r) => {
        setApiData(r.data);
        setLoading(false)
    
      })
      .catch((err) => {
        console.log(err);
      });
  };


const Loading =()=>{
  return (
    <>
    <Skeleton height={400}/>
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




  useEffect(() => {
    data();
   
  }, []);

  return (
    <div>
    {
      loading?<Loading/>:<productData.Provider value={apiData}>
      <Carousal />
      <br/>
      <Homeproduct />
      </productData.Provider>
    }
    
    </div>
  );
};

export default Home;
