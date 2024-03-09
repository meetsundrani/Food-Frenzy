import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import RestuarantCategory from './RestuarantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    let categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    return (
        <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-2xl'>
        {cuisines.join(", ")} - {costForTwoMessage}
        </p>
            {categories.map((category) => <RestuarantCategory key={category.card.card.title} data={category.card.card}/>)}
        </div>
    )
};

export default RestaurantMenu;
