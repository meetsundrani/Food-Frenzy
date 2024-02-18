import { CON_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props;

    // }, []);
    const { name, cloudinaryImageId, cuisines, avgRatingString, sla, costForTwo, id } = resData?.info;
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