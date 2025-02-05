/* eslint-disable react/prop-types */
import { useState } from "react";
/* eslint-disable no-unused-vars */
function MenuItem({foodItem}) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = useState(foodItem.isFavorite);
  const handleClickFavorite = () => {
   // setIsFavorite(!isFavorite) 
   isFavorite ? setIsFavorite(false) : setIsFavorite(true)
  }

console.log(isFavorite)
  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={foodItem.foodImage} alt={foodItem.itemName} />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{foodItem.itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{foodItem.description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{foodItem.price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button onClick={handleClickFavorite}>{isFavorite ? "❤️" : "🖤"}</button>
    </section>
  );
}

export default MenuItem;
