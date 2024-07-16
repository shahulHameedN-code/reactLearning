import React from "react";
import ItemList from "./ItemList";
const Content = ({ handleDelete, handleCheck, items }) => {
  const renderContent = () => {
    if (items.length) {
      return (
        <ItemList
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          items={items}
        />
      );
    } else {
      return <p> Your list is empty</p>;
    }
  };

  return <main>{renderContent()}</main>;
};

export default Content;
