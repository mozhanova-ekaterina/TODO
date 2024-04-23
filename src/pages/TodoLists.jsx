import { useState } from "react";
import Header from "../components/Header/Header";
import AddNewList from "../components/AddNewList/AddNewList";
import DisplayAllLists from "../components/DisplayAllLists/DisplayAllLists";
const TodoLists = () => {
  const [newTitle, setNewTitle] = useState("");

  return (
    <div>
      <div className="container">
        <AddNewList newTitle={newTitle} setNewTitle={setNewTitle}></AddNewList>
        <DisplayAllLists></DisplayAllLists>
      </div>
    </div>
  );
};

export default TodoLists;
