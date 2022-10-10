import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filter.search;

export const prioritySelector = (state) => state.filter.priority;

export const statusSelector = (state) => state.filter.status;

export const todoListSelector = (state) => state.todoList.todos;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    statusSelector,
    prioritySelector,
    searchTextSelector,
    (todoList, status, priority, searchText) => {
        return todoList.filter((todo) => {
            if (status === "all") {
                return priority.length
                    ? todo.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase()) &&
                          priority.includes(todo.priority)
                    : todo.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase());
            }
            return (
                todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (status === "completed" ? todo.completed : !todo.completed)
            );
        });
    }
);
