import { useEffect, useState } from "react";
import "./ToDo.scss";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";


const ToDo = ({ item, onChange, onAdd }) => {
  const [isDone, setIsDone] = useState(item.isDone);
  const [value, setValue] = useState(item.text);

  useEffect(() => {
    onChange({ text: value, isDone: isDone, id: item.id });
    // dispatch(changeList({item: {value: value, isDone: isDone, id: item.id}}));
  }, [isDone, value]);

  return (
    <>
      <li className={`list_item ${isDone ? "isDone" : ""}`}>
        <button
          onClick={() =>
            !isDone && value ? setIsDone(true) : setIsDone(false)
          }
        >
          {isDone ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </button>

        <input
          type="text"
          value={value}
          autoFocus
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
      </li>
    </>
  );
};

export default ToDo;
