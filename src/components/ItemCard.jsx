import "../blocks/itemcard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const handleItemCLick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some(id => id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `...`;
 
 
  return (
    <li className="card">
        <h2 className="card__name">{item.name}</h2>
        <img
          onClick={handleItemCLick}
          onCardLike={onCardLike}
          className="card__img"
          src={item.imageUrl}
          alt={item.name}
        />
    </li>
  );
}

export default ItemCard;
