import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ showItems, setShowIndex, index, showIndex }) => {

  const handleShowItems = () => {
    if (showIndex === index) setShowIndex(null);
    else setShowIndex(index);
  };
  
  return (
    <>
      <div className="border w-2/3 my-3 n px-5 bg-gray-100 rounded-lg shadow-lg">
        <div
          className="flex justify-between my-2 cursor-pointer"
          onClick={handleShowItems}
        >
          <h1> Restaurant Category {}</h1>
          <h1>🔽</h1>
        </div>
        {showItems && (
          <div className="flex flex-col my-3">
            <ItemList />
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCategory;
