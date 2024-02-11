import React, { useEffect, useState } from 'react'
import Shimmer from './shimmer';

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3088173&lng=73.2202396&restaurantId=91642&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    let menudata = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    menudata = menudata.filter(x => x?.card?.card?.title);
   

    console.log(menudata);
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <h2 className="card-subtitle mb-2 text-muted">{cuisines?.join(', ')}</h2>
                    <h2 className="card-subtitle mb-2 text-muted">{costForTwoMessage}</h2>
                    <div className="row">
                        {menudata.map((j, index) => (
                            <div key={index} className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{j.card?.card?.title}</h5>
                                        <ul className="list-group list-group-flush">
                                            {j.card?.card?.itemCards?.map((i, idx) => (
                                                <li key={idx} className="list-group-item">
                                                    <span className="font-weight-bold">{i.card?.info?.name}</span> - Rs {i.card?.info?.price / 100 || i.card?.info?.defaultPrice / 100}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default RestaurantMenu;