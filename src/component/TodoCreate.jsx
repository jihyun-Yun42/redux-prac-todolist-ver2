import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTodo } from '../redux/modules/todo';

export function TodoCreate() {
  const [newTodo, setNewTodo] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(createTodo(newTodo));
    setNewTodo({ title: '', content: '' });
  };
  const handlerchange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <form action="submit" onSubmit={addTodo}>
        제목 :
        <StyledInput
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handlerchange}
          required
        />
        내용:
        <StyledInput
          type="text"
          name="content"
          value={newTodo.content}
          onChange={handlerchange}
          required
        />
        <StyledButton style={{ backgroundColor: '#70b5ed' }} type="submit">
          추가
        </StyledButton>
      </form>
    </div>
  );
}

export const StyledButton = styled.button`
  color: white;
  border-radius: 10px;
  border: transparent;
  padding: 3px 10px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid #3395e5;
  border-radius: 10px;
  margin: 0 10px;
`;
