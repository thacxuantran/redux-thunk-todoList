import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoListSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
