import { useState, useEffect } from "react";
import { RES_CARDS } from '../utils/constants';

const useRestaurantCards = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_CARDS);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
}

export default useRestaurantCards;