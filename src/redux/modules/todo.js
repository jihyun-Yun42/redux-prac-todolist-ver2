const CREATE = 'todo/create';
const DELETE = 'todo/delete';

export const createTodo = (payload) => {
  console.log(payload);
  return {
    type: CREATE,
    title: payload.title,
    content: payload.content,
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
          title: action.title,
          content: action.content,
          isDone: false,
          edit: false,
        },
      ];
    case DELETE:
      return {};
    default:
      return state;
  }
};
export default todo;
