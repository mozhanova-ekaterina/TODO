import { configureStore } from "@reduxjs/toolkit";
import listsSlice from "./listsSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    lists: listsSlice,
    user: userSlice
  },
});
