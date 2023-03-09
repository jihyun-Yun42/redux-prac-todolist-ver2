import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, doneTodo, editBtnClick, editTodo } from '../redux/modules/todo';
import { StyledButton } from './TodoCreate';

function Edit({ item }) {
  const [edit, setEdit] = useState({
    editTitle: item.title,
    editContent: item.content,
  });
  const dispatch = useDispatch();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const changeEdit = (id) => {
    dispatch(editTodo({ ...edit, id }));
    // setEdit({ editTitle: item.title, editContent: item.content });
  };

  const editBtn = (id) => {
    dispatch(editBtnClick(id));
  };

  const doneBtn = (id, isDone) => dispatch(doneTodo({ id, isDone }));
  return (
    <div>
      {item.edit ? (
        <div>
          <input
            type="text"
            name="editTitle"
            value={edit.editTitle}
            onChange={(e) => inputChange(e)}
          />
          <input
            type="text"
            name="editContent"
            value={edit.editContent}
            onChange={inputChange}
          />
          <StyledButton
            style={{ backgroundColor: '#EC6FAE' }}
            onClick={() => changeEdit(item.id)}
          >
            수정
          </StyledButton>
        </div>
      ) : (
        <div>
          <Link to={`/${item.id}`}>상세보기</Link>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
          <StyledButton
            style={{ backgroundColor: '#EC6FAE' }}
            onClick={() => editBtn(item.id)}
          >
            수정
          </StyledButton>
        </div>
      )}

      <StyledButton
        style={{ backgroundColor: '#8F82C9' }}
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        삭제
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: '#518EDB' }}
        onClick={() => doneBtn(item.id, item.isDone)}
      >
        취소
      </StyledButton>
    </div>
  );
}

export default Edit;
