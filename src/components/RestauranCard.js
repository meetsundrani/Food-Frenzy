import { useContext } from "react";
import { CON_URL } from "../utils/constants"
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
    const { resData } = props;
    const userContextData = useContext(UserContext); 

    const { name, cloudinaryImageId, cuisines, avgRatingString, sla, costForTwo, id } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg hover:shadow-xl">
            <img className="rounded-lg aspect-square" src={CON_URL + cloudinaryImageId}></img>
            <h3 className="font-semibold py-3">{name}</h3>
            <h4 className="">{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h1 className="font-bold">{userContextData.loggedInUser}</h1>
        </div>
    )
}

// Higher order component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;