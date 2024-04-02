import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  //this is lifting up the state as the state is lifted up to the closest parent to the siblings between which the state needs to be shared or used by the components

  //******LIFT UP THE STATE******* */
  const [items, setItems] = useState([]);

  //handler to add item to the list
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //handler to delete the item from the list
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //handler to update the packed and unpacked items form the list
  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //handler to clear the list
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear the entire list?");

    if(confirmed)setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToogleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}








