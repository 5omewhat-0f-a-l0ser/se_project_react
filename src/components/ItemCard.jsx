import "../blocks/itemcard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  console.log("Image URL:", item.imageUrl);
  
  const handleItemCLick = () => {
    onCardClick(item);
  };

  const likes = item.likes || [];
  const isLiked = likes.some((_id) => _id === currentUser?._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `...`;
 
 
  return (
    <li className="card">
        <h2 className="card__name">{item.name}</h2>
        <img
          className="card__img"
          src={item.imageUrl}
          alt={item.name}
          onClick={(e) =>{handleItemCLick(e)}}
        />
        <button
        className="card__like"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from bubbling up
            onCardLike({ _id: item._id, isLiked }); // Only handle the like
              }}>like</button>
    </li>
  );
}

export default ItemCard;
