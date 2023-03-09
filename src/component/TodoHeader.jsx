import React from 'react';
import { CreateContent, CreateTitle, TodoCreate } from './TodoCreate';

function TodoHeader() {
  return (
    <header style={{ color: '#3395E5', margin: '30px' }}>
      <h1>jihyun's TODO LIST</h1>
      <TodoCreate />
    </header>
  );
}

export default TodoHeader;
