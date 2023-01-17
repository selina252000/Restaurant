import React, { useState } from "react";
import restaurants from "../../Data/restaurantData";
import FoodItems from "./FoodItems";
import "./restaurantList.css";

const RestaurantList=(props)=> {
  const title = "Choose Any restaurant to order food";

  const [showData, setShowData] = useState(false);
  const [resData, setResData] = useState([]);
  const handleClick = (item) => {
    const chosenRestaurant = restaurants.filter((el) => {
      return el.resName === item;
    });
    setResData(chosenRestaurant[0].menu);
    setShowData(true);
    
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
              {!showData && (
            <div>
              <h1 className="text-center text-danger bg-primary p-4">{title}</h1>
              <div className="text-center">
                {restaurants.map((item, index) => {
                  return (
                    
                    <div className="card" key={index}>
                      <div className="card-header">{item.resName}</div>
                      <div className="card-body">
                        
                          <img src={item.resImage}  height={200} width={250} alt="Restaurant Logo" />

                       
                      </div>
                      <div className="card-footer">
                      <div className="text-center">
                          <button
                            className="btn btn-primary text-dark"
                            onClick={() => handleClick(item.resName)}
                          >
                            Click  for menu
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>{showData && <FoodItems restData={resData} />}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RestaurantList;
