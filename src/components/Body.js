import { DATA } from "../utils/constant";
import Card from "./Card";
import {useState} from "react"

const Body = () => {

  const [restaurants,setRestaurants]=useState(DATA)
  return (
    <>
      <div className="filter-btn">

        <button
        onClick={()=>{

          const filteredData=restaurants.filter(restaurant=>restaurant.info.avgRating>4.3)
          setRestaurants(filteredData)
        }}
        >Filter button</button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return <Card key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </>
  );
};

export default Body;
