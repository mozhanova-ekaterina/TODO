import ToDoList from '../ToDoList/ToDoList';
import './DisplayAllLists.scss'
import {useSelector} from 'react-redux'


const DisplayAllLists = () => {
  const lists = useSelector(state => state.lists.lists)

  console.log(lists);

  return (
    <div className="lists-wrapper">
      {lists.length != 0 ? (
        lists.map((list) => (
          <ToDoList
            key={list.id} //если не равен list.id, то происходит хуйня полная при удалении компонента
            list={list}
          ></ToDoList>
        ))
      ) : (
        <p>Список задач пуст</p>
      )}
    </div>
  );
};

export default DisplayAllLists;
