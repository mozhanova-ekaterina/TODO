import { createSlice } from "@reduxjs/toolkit";

const itemInitial = {
  text: "",
  isDone: false,
  id: Math.random(),
};

const initialState = {
  //должен быть объект, содержащий началное значение
  lists: [],
};

const listsSlice = createSlice({
  //слайсов может быть сколько угодно, к примеру ещё один для аудентификации
  name: "lists",
  initialState,
  reducers: {
    //набор методов
    changeData(state, action) {
      state.lists = state.lists.map((el) =>
        el.id === action.payload.list.id ? action.payload.list : el
      );
    },
    addNewList(state, action) {
      state.lists.push({
        title: action.payload.newTitle,
        items: [itemInitial],
        id: Math.random(),
      });
    },
    deleteList(state, action) {
      state.lists = state.lists.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addNewList, changeData, deleteList } =
  listsSlice.actions;
export default listsSlice.reducer; //глобальный редюсер для тудушек
