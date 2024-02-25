import RestaurantCard from "./RestauranCard"
import { useState, useEffect } from "react"
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCards from "../utils/useRestaurantCards"
 
 const Body = () => {
     const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [filteredRestaurants, setfilteredRestaurants] = useState([]);
     const [searchTxt, setsearchTxt] = useState('');
     const onlineStatus = useOnlineStatus();
     const resInfo = useRestaurantCards();

     useEffect(() => {
         if (onlineStatus === false) return; // No need to set state if offline
         if (!resInfo) return; // No need to proceed if resInfo is null
         const restaurants = resInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
         setListOfRestaurants(restaurants);
         setfilteredRestaurants(restaurants);
     }, [onlineStatus, resInfo]);

     if (onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>;
     if (!resInfo) return <Shimmer />;
     if(listOfRestaurants.length === 0) {
        return <Shimmer/>;
     }
    return (
        <div className="body">
        <div className="filter">
            <div className="search">
                    <input type="text" className="search-box" value={searchTxt} onChange={(e) => {setsearchTxt(e.target.value)}}/>
            <button onClick={() => {
                //filter the restuarant cards and update the list
                // searchTxt
                       const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setfilteredRestaurants(filteredRes);
            }}>Search</button>
            </div>
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (x) => x.info.avgRating > 4
                        );
                        setfilteredRestaurants(filteredList);
                }}> Top Rated Restauransts</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} className="card-names"  to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )
}

export default Body;