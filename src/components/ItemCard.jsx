import "../blocks/itemcard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser, isLoggedIn }) {


  
  const handleItemCLick = () => {
    onCardClick(item);
  };

  const likes = item.likes || [];
  const isLiked = likes.some((_id) => _id === currentUser?._id);

  // Create a variable which you then set in `className` for the like button
  const itemLikeButton = isLiked ? "card__like card__like_liked" : "card__like";
 const itemLikeButtonLoggedIn = isLiked ? "card__like card__like_logout" : "card__like";
 
  return (
    <li className="card">
        <h2 className="card__name">{item.name}</h2>
        <img
          className="card__img"
          src={item.imageUrl}
          alt={item.name}
          onClick={(e) =>{handleItemCLick(e)}}
        />
      {isLoggedIn &&
        <button
          className={itemLikeButton}
          onClick={(e) => {
            e.stopPropagation();
            onCardLike({ _id: item._id, isLiked });
          }}
        >
        </button>}
  </li>
  );
}

export default ItemCard;
