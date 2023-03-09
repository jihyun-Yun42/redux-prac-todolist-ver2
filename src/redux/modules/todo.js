const CREATE = 'todo/create';
const DELETE = 'todo/delete';
const EDIT = 'todo/edit';
const EDITBTN = 'todo/editBtn';
const DONE = 'todo/done';

export const createTodo = (payload) => {
  return {
    type: CREATE,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
export const editBtnClick = (payload) => {
  return {
    type: EDITBTN,
    payload,
  };
};
export const doneTodo = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

const initialState = [
  { id: 1, title: 'ver2', content: '완성하기', isDone: false, edit: false },
  { id: 2, title: 'ver3', content: '완성하기', isDone: false, edit: false },
  { id: 3, title: 'ver4', content: '완성하기', isDone: true, edit: false },
  { id: 4, title: 'ver5', content: '완성하기', isDone: true, edit: false },
];
const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          content: action.payload.content,
          isDone: false,
          edit: false,
        },
      ];
    case DELETE:
      return state.filter((item) => item.id !== action.payload);
    case EDIT:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.editTitle,
              content: action.payload.editContent,
              edit: false,
            }
          : item
      );
    case EDITBTN:
      return state.map((item) =>
        item.id === action.payload ? { ...item, edit: true } : item
      );
    case DONE:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, isDone: !action.payload.isDone } : item
      );
    default:
      return state;
  }
};
export default todo;
