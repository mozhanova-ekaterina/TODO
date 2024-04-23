import "./AddNewList.scss";
import { useDispatch } from "react-redux";
import { addNewList } from "../../store/listsSlice";

const AddNewList = ({ newTitle, setNewTitle }) => {
  const dispatch = useDispatch();

  const addList = (e) => {
    e.preventDefault();
    dispatch(addNewList({ newTitle }));
    setNewTitle("");
  };
  return (
    <div className="addNewList">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder="Новый список дел"
        value={newTitle}
        autoFocus
        onKeyDown={(e) => e.key === "Enter" && newTitle && addList(e)}
      />
      <button className="btn" onClick={(e) => newTitle && addList(e)}>Добавить</button>
    </div>
  );
};

export default AddNewList;
