import React, {useState} from "react";

function Item({ name, category }) {
  const [addedItem, setAddedItem] = useState(true);

  function handleAddItem(){
    setAddedItem((addedItem) => !addedItem)
  }

  const cart = addedItem ? "" : "in-cart";

  const buttonText = addedItem ? "Add To Cart" : "Remove From Cart";

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>{buttonText}</button>
    </li>
  );
}

export default Item;
