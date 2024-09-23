import { CDN_URL } from "../utils/constant";

const Card = ({data}) => {

    const {info}=data
    const {name,cloudinaryImageId,areaName,avgRating,totalRatingsString,costForTwo}=info

  return (
    <>
      <div className="w-1/5 rounded-lg cursor-pointer hover:bg-gray-200 bg-gray-100 p-3 ">
        <img
          className="card-image rounded-md mb-5"
          src={CDN_URL+cloudinaryImageId}
        />

        <h1 className="font-bold py-3" >{name}</h1>
        <span>{avgRating} ⭐</span>
        <h3>{totalRatingsString}</h3>
        <span>{info.sla.slaString}</span>
        <h3>{costForTwo}</h3>
        <h3>{areaName}</h3>
      </div>
    </>
  );
};

export default Card