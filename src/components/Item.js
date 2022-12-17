import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded,setIsAdded] = useState(true)
  function handlClick(){
    setIsAdded((isAdded)=>!isAdded)
  }
  const addClass = isAdded?'':'in-cart'
  return (
    <li className={addClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlClick}>{isAdded?'Add to Cart': "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
