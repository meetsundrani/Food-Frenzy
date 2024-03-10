import ItemList from "./ItemList"

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
                    <span>{showItems ? '🔼' : '🔽'}</span>
                </div>
                {showItems && <ItemList items={itemCards} />}
            </div>
        </div>
    );
};
export default RestuarantCategory;