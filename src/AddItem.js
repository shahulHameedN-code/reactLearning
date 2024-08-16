import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({ handleAddItem, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleAddItem}>
      <label htmlFor="addItem">Add Item</label>
      <input
        id="addItem"
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        id="addItem"
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
