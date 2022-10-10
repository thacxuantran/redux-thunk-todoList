// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
//   { id: 2, name: "Learn Code", completed: true, priority: "Medium" },
//   { id: 3, name: "Read Book", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleCheckbox":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     //   return updatedTodo;
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        status: "idle",
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleCheckbox: (state, action) => {
            const currentTodo = state.find(
                (todo) => todo.id === action.payload
            );
            currentTodo.completed = !currentTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "idle";
                state.todos = action.payload;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                // state.status e= "fullfilled";
                console.log("action.payload", action.payload);
                state.todos.push(action.payload);
            });
    },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    console.log("data", data);
    return data.todos;
});

export const addNewTodo = createAsyncThunk(
    "todos/addNewTodo",
    async (newTodo) => {
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        console.log("res", data);
        return data.todos;
    }
);

//action va action creator () => {return action}
//thunk action ( la 1 function) va thunk action creators () => { return thunk action}

// export function addTodos(todo) {
//     //Thunk function - thunk action
//     return function addTodosThunk(dispatch, getState) {
//         console.log("[addTodoThunk]", getState());
//         todo.name = todo.name.upperCase();
//         console.log({ todo });
//         dispatch(todoSlice.actions.addTodo(todo));
//         console.log("[addTodoThunk AFTER]", getState());
//     };
// }
