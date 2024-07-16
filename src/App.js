import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const handleCheck = (id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsList);
    localStorage.setItem("todo_list", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);
    localStorage.setItem("todo_list", JSON.stringify(itemList));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log(e);
    addItems(newItem);
    setNewItem("");
  };
  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const addNewItem = { id: id, checked: false, description: item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
  return (
    <div>
      <Header />
      <AddItem
        handleAddItem={handleAddItem}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        items={items.filter((item) =>
          item.description.toLowerCase().includes(searchItem.toLowerCase())
        )}
      />
      <Footer toDoLength={items.length} />
    </div>
  );
}

export default App;
