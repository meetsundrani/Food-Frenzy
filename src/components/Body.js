import RestaurantCard, { withPromotedLabel } from "./RestauranCard"
import { useState, useEffect, useContext } from "react"
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCards from "../utils/useRestaurantCards"
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchTxt, setsearchTxt] = useState('');
    const onlineStatus = useOnlineStatus();
    const resInfo = useRestaurantCards();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const { userName, setUserName } = useContext(UserContext);

    useEffect(() => {
        if (onlineStatus === false) return; // No need to set state if offline
        if (!resInfo) return; // No need to proceed if resInfo is null
        const restaurants = resInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setfilteredRestaurants(restaurants);
    }, [onlineStatus, resInfo]);

    if (onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>;
    if (!resInfo) return <Shimmer />;
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchTxt} onChange={(e) => { setsearchTxt(e.target.value) }} />
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        //filter the restuarant cards and update the list
                        // searchTxt
                        const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setfilteredRestaurants(filteredRes);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (x) => x.info.avgRating > 4
                        );
                        setfilteredRestaurants(filteredList);
                    }}> Top Rated Restaurants</button>
                </div>
                <div className="search m-7 p-7">
                    UserName:<input type="text" className="border border-solid border-black" value={userName} onChange={(e) => setUserName(e.target.value)} />

                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} className="card-names" to={"/restaurant/" + restaurant.info.id}>
                        {restaurant.info.veg ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;