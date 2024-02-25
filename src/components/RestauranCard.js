import { CON_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cloudinaryImageId, cuisines, avgRatingString, sla, costForTwo, id } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg hover:shadow-xl">
            <img className="rounded-lg" src={CON_URL + cloudinaryImageId}></img>
            <h3 className="font-semibold py-3">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;