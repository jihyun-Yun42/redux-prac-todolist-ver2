import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const param = useParams();

  const todo = useSelector((state) => state.todo);

  const data = todo.find((item) => item.id === parseInt(param.id));
  return (
    <Box>
      <Link to={'/'}>홈으로</Link>
      <h1>{data.title}</h1>
      <main>{data.content}</main>
    </Box>
  );
}
const Box = styled.div`
  border: 1px solid #cd75b7;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Detail;
