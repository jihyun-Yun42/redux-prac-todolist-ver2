import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledButton } from './TodoCreate';

function Edit({ item }) {
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);

  return (
    <div>
      {item.edit ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <Link to={`/${item.id}`}>상세보기</Link>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>
      )}
      <StyledButton style={{ backgroundColor: '#EC6FAE' }} onClick={() => dispatch()}>
        {item.edit ? '수정완료' : '수정'}
      </StyledButton>
    </div>
  );
}

export default Edit;
