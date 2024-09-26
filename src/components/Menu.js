import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const Menu = () => {
  const { resId } = useParams();
  const arr = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];

  const [showIndex, setShowIndex] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${RESTAURANT_MENU_API}${resId}`);
    const data = await response.json();
  };

  return (
    <>
      <div className="border border-solid m-5  flex justify-center ">
        <div className="w-full flex flex-col items-center">
          <h1>Restaurant Name</h1>
          <h3>something</h3>
          {arr.map((val, index) => {
            return (
              <RestaurantCategory
                key={val}
                showItems={index === showIndex ? true : false}
                setShowIndex={setShowIndex}
                index={index}
                showIndex={showIndex}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
