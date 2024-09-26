import Card from "./Card";
import { useState, useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constant";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      console.log("response",response)
      const data = await response.json();
      console.log(data)
      setRestaurants(data?.data?.cards.slice(3));
      setAllRestaurants(data?.data?.cards.slice(3));
    } catch (error) {
      console.log("error:",error)
    }
   
  };
  return (
    <>
      {restaurants.length ? (
        <div className=" " >
          <div className="w-full flex-col justify-center  pt-10  pl-[60px]">
            <div className="search  px-10 py-2 flex space-x-5  ">
              <div className="filter-btn">
                <button
                  onClick={() => {
                    const filteredData = restaurants.filter(
                      (restaurant) =>
                        restaurant?.card?.card?.info?.avgRating > 4.3
                    );
                    setRestaurants(filteredData);
                  }}
                  className="border font-bold px-2 rounded-lg sm:bg-blue-600 md:bg-red-600 lg:bg-yellow-600 xl:bg-green-600 2xl:bg-gray-600 text-white"
                >
                  Top rated resaurant
                </button>
              </div>
              <div>
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  className="border rounded-md mr-1 "
                />
                <button
                  onClick={() => {
                    const filteredData = allRestaurants.filter((restaurant) => {
                      return restaurant.card.card.info.name
                        .toLocaleLowerCase()
                        .includes(searchText.toLocaleLowerCase());
                    });
                    filteredData.length !== 0
                      ? setRestaurants(filteredData)
                      : "";
                  }}
                  className="bg-blue-600 p-1 px-3 rounded-xl text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="body flex flex-wrap  space-y-5 justify-center ">
            <div className="flex space-x-5 space-y-5 flex-wrap justify-center">

            {restaurants.map((data) => {
              return (
                <Card
                  key={data?.card?.card?.info?.id}
                  data={data?.card?.card}
                />
              );
            })}
          </div>
            </div>
        </div>
      ) : (
        <div className="body flex border border-purple-700 space-x-5 flex-wrap justify-center space-y-5 pt-12">
          {arr.map((elem) => {
            return <Shimmer key={elem} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
