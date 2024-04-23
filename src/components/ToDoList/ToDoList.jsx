import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { changeData, deleteList } from "../../store/listsSlice";
import ToDo from "../ToDo/ToDo";
import "./ToDoList.scss";

const ToDoList = ({ list }) => {
  const [title, setTitle] = useState(list.title);
  const [items, setItems] = useState(list.items);

  const dispatch = useDispatch();

  const changeList = (item) => {
    setItems(items.map((el) => (el.id === item.id ? item : el)));
  };

  const addItem = () => {
    if (hasEmptyItem(items)) return;
    setItems([...items, { text: "", isDone: false, id: Math.random() }]);
  };

  const hasEmptyItem = (items) => {
    return items.some((item) => item.text === "");
  };

  useEffect(() => {
    dispatch(changeData({ list: { title: title, items: items, id: list.id } }));
  }, [title, items]);

  return (
    <ul className="list">
      <div className="list_header">
        <input
          placeholder="Заголовок"
          type="text"
          value={title}
          className="list_title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <div
          className="list_del"
          onClick={() => dispatch(deleteList({ id: list.id }))}
        >
          <TiDeleteOutline />
        </div>
      </div>

      {list.items.map((item) => (
        <ToDo
          key={item.id}
          item={item}
          onChange={changeList}
          onAdd={addItem}
        ></ToDo>
      ))}
    </ul>
  );
};

export default ToDoList;
