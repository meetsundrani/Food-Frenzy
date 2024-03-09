import ItemList from "./ItemList";
import { useState } from "react";

const RestuarantCategory = (props) => {
    const [showItems, setshowItems] = useState(false);
    const { title, itemCards } = props.data;
    const handleClick = () => {
        setshowItems(!showItems);
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg">
                <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>{showItems ? '🔼' : '🔽'}</span>
                </div>
                {showItems && <ItemList items={itemCards} />}
            </div>
        </div>
    );
};
export default RestuarantCategory;