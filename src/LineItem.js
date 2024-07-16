import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ handleDelete, handleCheck, item }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.description}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
