import RestaurantCard from "./RestauranCard"
import { useState, useEffect } from "react"
import Shimmer from "./shimmer";
 
 const Body = () => {
     const [listOfRestaurants, setListOfRestaurants] = useState([]);
     const [filteredRestaurants, setfilteredRestaurants] = useState([]);
     const [searchTxt, setsearchTxt] = useState('');
    useEffect(() => {  
        fetchData();
    }, []);


     const fetchData = async () => {
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3088173&lng=73.2202396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
         setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

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
                console.log(searchTxt);
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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;