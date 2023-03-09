import React from 'react';
import { TodoContent, TodoTitle, TodoBody } from './TodoBody';
import TodoCreate from './TodoCreate';
import TodoHeader from './TodoHeader';

function Home() {
  return (
    <div>
      <TodoHeader />
      <TodoBody>
        <TodoTitle title="Working..." />
        <TodoContent done={false} />
      </TodoBody>
      <TodoBody>
        <TodoTitle title="Done..." />
        <TodoContent done={true} />
      </TodoBody>
    </div>
  );
}

export default Home;
