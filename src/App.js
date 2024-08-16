import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequests from "./apiRequests";
function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchItems())();
  }, []);

  const handleCheck = async(id) => {
    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemsList);
    
    const checkItem=itemsList.filter((item)=>item.id===id);
    const pachOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({checked:checkItem[0].checked}),
    };
    console.log("check item ---> "+JSON.stringify({checked:checkItem[0].checked}))
    const updateUrl=`${API_URL}/${id}`
    const errMsg=await apiRequests(updateUrl,pachOptions)
    setFetchError(errMsg)
  };

  const handleDelete = async (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);

    const deleteOptions = {
      method: 'DELETE'
    };
    const deletUrl=`${API_URL}/${id}`
    const errMsg=await apiRequests(deletUrl,deleteOptions)
    
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log(e);
    addItems(newItem);
    setNewItem("");
  };
  const addItems = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const addNewItem = { id: id, checked: false, description: item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    };
    const result = await apiRequests(API_URL, postOptions);
    if (result) setFetchError(result);
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
