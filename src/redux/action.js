export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleCheckbox = (todoId) => {
  return {
    type: "todoList/toggleCheckbox",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchText",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/status",
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: "filter/priority",
    payload: priority,
  };
};
