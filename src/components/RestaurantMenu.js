import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import RestuarantCategory from './RestuarantCategory';
import { useState } from "react"

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    let categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    const handleClick = (index) => {
        // If the clicked index matches the currently shown index, close it
        // Otherwise, toggle the visibility of the clicked category
        setShowIndex(prevIndex => prevIndex === index ? null : index);
    };
    return (
        <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-2xl'>
        {cuisines.join(", ")} - {costForTwoMessage}
        </p>
            {categories.map((category, index) => (
                // controlled component
                <RestuarantCategory
                    key={category.card.card.title}
                    data={category.card.card}
                    showItems={index === showIndex && true}
                    onClick={() => handleClick(index)} // Pass onClick handler to toggle visibility
                />))}
        </div>
    )
};

export default RestaurantMenu;
