import { CDN_URL } from "../utils/constant";

const Card = ({data}) => {

    const {info}=data
    const {name,cloudinaryImageId,areaName,avgRating,totalRatingsString,costForTwo}=info

  return (
    <>
      <div className="card">
        <img
          className="card-image"
          src={CDN_URL+cloudinaryImageId}
        />

        <h1>{name}</h1>
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