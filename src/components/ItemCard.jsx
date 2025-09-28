import "../blocks/itemcard.css";

function ItemCard({ 
  item, 
  onCardClick, 
  onCardLike, 
  currentUser, 
  isLoggedIn 
}) {
  const handleItemCLick = () => {
    onCardClick(item);
  };

  const likes = item.likes || [];
  const isLiked = likes.some((_id) => _id === currentUser?._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButton = isLiked ? "card__like card__like_liked" : "card__like";
  console.log("isLiked:", isLiked, "itemLikeButton:", itemLikeButton);
  return (
    <li className="card">
      <span className="card__name_container">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn && (
          <button
            className={itemLikeButton}
            onClick={(e) => {
              e.stopPropagation();
              onCardLike({ _id: item._id, isLiked });
            }}
          ></button>
        )}
      </span>
      <img
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
        onClick={(e) => {
          handleItemCLick(e);
        }}
      />
    </li>
  );
}

export default ItemCard;
