import { Children } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Edit from './Edit';

export function TodoBody({ children }) {
  return <div style={{ color: '#AE7BC0', margin: '30px' }}>{children}</div>;
}

export const TodoTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

export const TodoContent = ({ done }) => {
  const todo = useSelector((state) => state.todo);
  return (
    <section
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      {todo.map(
        (item) =>
          item.isDone === done && (
            <Box key={item.id}>
              <Edit item={item} />
            </Box>
          )
      )}
    </section>
  );
};
const Box = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  padding: 20px 20px;
  border-radius: 20px;
`;
