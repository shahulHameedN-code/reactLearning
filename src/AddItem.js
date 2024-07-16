import React from "react";
import { FaPlus } from "react-icons/fa";
const AddItem = ({ handleAddItem, newItem, setNewItem }) => {
  return (
    <form className="addForm" onSubmit={handleAddItem}>
      <label htmlFor="addItem">Add Item</label>
      <input
        id="addItem"
        autoFocus
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button
        id="addItem"
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
