export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};
