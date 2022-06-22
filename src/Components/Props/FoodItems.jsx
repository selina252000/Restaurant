import React, { useState } from "react";
import Billing from "./Billing";
import "./foodItems.css";
import veg from "../Veg_nonVegLogo/Veg.png";
import nonVeg from "../Veg_nonVegLogo/nonVeg.png";
function FoodItems({ restData }) {
  const [foodOrdered, setFoodOrdered] = useState(false);
  const [foodDetails, setFoodDetails] = useState({});
  const handleOrder = (itemName, itemPrice) => {
    setFoodOrdered(true);
    setFoodDetails({
      foodName: itemName,
      foodPrice: itemPrice,
    });
    console.log(foodOrdered);
    console.log(foodDetails);
  };
  return (
    <div>
      {
        <div>
          <h1 className="text-center text-danger bg-primary p-4">
            Click on any item to order now
          </h1>
        </div>
      }
      {!foodOrdered && (
        <div>
          {!Array.isArray(restData) && <div>Wrong Data input</div>}

          {Array.isArray(restData) &&
            restData.map((item, index) => {
              return (
                <div className="card mt-4" key={index}>
                  <div className="card-header">{item.itemName}</div>
                  <div className="card-body">
                    <img
                      src={item.foodImage}
                      alt="Food Image"
                      className="p-0"
                      height={200}
                      width={250}
                    />
                  </div>
                  <div className="card-footer">
                    <h5 className="card-title">
                      {item.category === "Veg" ||
                      item.category === "Beverages" ? (
                        <img src={veg} alt="Veg" height={40} width={40} />
                      ) : item.category === "nonVeg" ? (
                        <img
                          src={nonVeg}
                          alt="Non Veg"
                          height={40}
                          width={40}
                        />
                      ) : (
                        ""
                      )}
                    </h5>
                    <h5 className="card-title">₹{item.price}</h5>
                    <button
                      className="btn btn-success text-dark"
                      onClick={() => handleOrder(item.itemName, item.price)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {foodOrdered && <Billing foodDetails={foodDetails} />}
    </div>
  );
}

export default FoodItems;
