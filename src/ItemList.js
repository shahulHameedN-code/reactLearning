import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ handleDelete, handleCheck, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
