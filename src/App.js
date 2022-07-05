import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import axios from "axios";
import { Api_Url } from "./api";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Productdetail from "./components/Productdetail";
import { createContext, useEffect, useReducer, useState } from "react";
import Login from "./components/Login";
import { reducer } from "./reducer/reducer";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
export const Context = createContext();
export const ContextToal = createContext();


const innisialState = {
  product:[],
  products:{},
  totals: 0,
  totalItems: 0,
  }


function App() {
  const date = new Date().getFullYear();
  const [state, dispatch] = useReducer(reducer,innisialState)

 


const addCart = (param)=>{
  return dispatch({
    type:"ADDCART",
    payload:param
  })
}

const removeItem =(id)=>{
return dispatch({
  type:"REMOVE_ITEM",
  payload:id
})
}





  const [ApiDatas, setApidata] = useState();
  const data = async () => {
    await axios
      .get(`${Api_Url}`)
      .then((r) => {
        setApidata(r.data);
        dispatch({type:"SUCCESS",payload:r.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    data();
  
 
  }, []);
    
  
  return (
    <div className="App">
      <Context.Provider value={ApiDatas}>
        <ContextToal.Provider value={{...state,addCart,removeItem}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-details" element={<Productdetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <footer className="my-5 pt-5 text-muted text-center text-small">
          
          <ul className="list-inline">
            <li className="list-inline-item">
              <p >Design and Develope by Mohammed Sabeel</p>
              <p className="mb-1"> Year {date}</p>
            </li>
            
          </ul>
        </footer>
        </ContextToal.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
