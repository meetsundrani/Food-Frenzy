// import { useEffect } from "react"
import { CON_URL } from "../utils/constants"
// import { useNavigate } from "react-router-dom";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    // useEffect(() => {
    //     // const navigate = useNavigate();
    // }, []);
    const { name, cloudinaryImageId, cuisines, avgRatingString, sla, costForTwo, id } = resData?.info;
    // const navigateToRestaurants = () => {
    //     debugger
    //     // 👇️ navigate to /restaurand/:id
    //     navigate(`/restaurant/${id}`);
    // };
    return (
        <div className="res-card">
            <img className="res-logo" src={CON_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;