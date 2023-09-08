import React, { useContext } from "react";
import { theContext } from "./StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const [state, dispatch] = useContext(theContext);
  const basket = state.basket;
  console.log("basket", state.basket);
  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <section className="basketProduct pt-5">
      {basket.length > 0 && (
        <div className="totalPrice mb-4 w-100 d-flex align-items-center justify-content-center">
          <div
            style={{
              width: "280px",
              padding: "15px",
              backgroundColor: "white",
              boxShadow: "0px 0px 4px rgba(0,0,0,0.6)",
              textAlign:"center"
            }}
          >
            <h3>
              Total Price : ${" "}
              {basket
                .map((item) => {
                  return item.price;
                })
                .reduce((x, y) => {
                  return x + y;
                }, 0)}
            </h3>
            <button className="btn btn-warning mt-3">Procced To Checkout</button>
          </div>
        </div>
      )}
      <div className="container">
        {basket.length > 0 ? (
          basket.map((pro) => {
            return (
              <div
                className="col-sm-12"
                style={{
                  padding: "15px 20px",
                  marginBottom: "20px",
                  backgroundColor: "#eee",
                }}
              >
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div
                    style={{ width: "200px", height: "200px" }}
                    className="img"
                  >
                    <img
                      src={pro.img}
                      alt="Soryy"
                      className="w-100 h-100 p-3"
                    />
                  </div>
                  <div style={{ width: "200px" }} className="desc">
                    <p className="text-black">{pro.desc}</p>
                  </div>
                  <div className="ratingSec">
                    <p className="text-black d-block">Rating</p>
                    <div className="d-flex">
                      {Array(pro.rating)
                        .fill()
                        .map((_, i) => (
                          <p key={i}>
                            <FontAwesomeIcon
                              icon={faStar}
                              className="text-warning"
                            />
                          </p>
                        ))}
                    </div>
                  </div>

                  <p className="price text-black">Price : ${pro.price}</p>
                  <button
                    onClick={() => removeFromBasket(pro.id)}
                    className="btn btn-danger d-flex align-items-center justify-content-center fs-5"
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center">"There is Nothing................!"</h2>
        )}
      </div>
    </section>
  );
};

export default Checkout;
