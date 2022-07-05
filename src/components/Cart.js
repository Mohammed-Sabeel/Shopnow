import React, { useContext, useEffect } from "react";
import { ContextToal } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Scrollbars } from "react-custom-scrollbars";
const Cart = () => {
  const cart = useContext(ContextToal);
  const { removeItem } = useContext(ContextToal);
  const { totalItems, product, total } = cart;
  const navigate = useNavigate();

  const checkOut = () => {
    if (localStorage.getItem("login")) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    // checkOut()
  }, [totalItems]);

  return (
    <div>
      <section className="cart">
        <div className="cart_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                  <div className="cart_title">
                    Shopping Cart
                    <small> ({totalItems} item in your cart) </small>
                  </div>
                  <Scrollbars style={{ height: 250 }} autoHideDuration={200}>
                    {product.map((curr) => {
                      return (
                        <div className="cart_items">
                          <ul className="cart_list">
                            <li className="cart_item clearfix">
                              <div className="cart_item_image">
                                <img
                                  src={curr.image}
                                  alt={curr.title}
                                  className="img-fluid w-75"
                                />
                              </div>
                              <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div className="cart_item_name cart_info_col">
                                  <div className="cart_item_title">Name</div>
                                  <div className="cart_item_text">
                                    {curr.title.substring(0, 8)}
                                  </div>
                                </div>
                                <div className="cart_item_color cart_info_col">
                                  <div className="cart_item_title">
                                    Category
                                  </div>
                                  <div className="cart_item_text">
                                    <span
                                      style={{ backgroundColor: "#999999" }}
                                    ></span>
                                    {curr.category}
                                  </div>
                                </div>
                                <div className="cart_item_quantity cart_info_col">
                                  <div className="cart_item_title">
                                    Quantity
                                  </div>
                                  <div className="cart_item_text">1</div>
                                </div>
                                <div className="cart_item_price cart_info_col">
                                  <div className="cart_item_title">Price</div>
                                  <div className="cart_item_text">
                                    $ {Math.round(curr.price)}
                                  </div>
                                </div>
                                <div className="cart_item_total cart_info_col">
                                  <div className="cart_item_title">Total</div>
                                  <div className="cart_item_text">
                                    $ {Math.round(curr.price)}
                                  </div>
                                </div>
                              </div>
                            </li>
                            <MdDelete
                              className="delete_icon"
                              onClick={() => removeItem(curr.id)}
                            />
                          </ul>
                        </div>
                      );
                    })}
                  </Scrollbars>

                  <div className="cart_buttons">
                    <Link
                      type="button"
                      to="/"
                      className="button  cart_button_clear text-decoration-none"
                    >
                      Continue Shopping
                    </Link>
                    {totalItems == 0 ? null : (
                      <div className="mt-3">
                        <button
                          type="button"
                          className="button cart_button_checkout"
                          onClick={checkOut}
                        >
                          Checkout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
