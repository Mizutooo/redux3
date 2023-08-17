
import { ADD_TODO, DELETE_TODO } from '../utils/actions';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'do home work'
    },
    {
      id: 2,
      title: 'eat'
    }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
        title: action.title
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    }
    case DELETE_TODO: {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: updatedTodos
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
