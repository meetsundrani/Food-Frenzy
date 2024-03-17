import ItemList from "./ItemList"
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const RestuarantCategory = ({ data, showItems, onClick }) => {
    const { title, itemCards } = data;
    const handleClick = () => {
        onClick();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg" onClick={handleClick}>
                <div className="flex justify-between hover:cursor-pointer">
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span> {showItems ? <FontAwesomeIcon icon={faAngleUp} beatFade /> : <FontAwesomeIcon icon={faAngleDown} beatFade />}</span>
                </div>
                {showItems && <ItemList items={itemCards} />}
            </div>
        </div>
    );
};
export default RestuarantCategory;