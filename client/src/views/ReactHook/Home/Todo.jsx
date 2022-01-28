import React from 'react';

const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="list">
      {todos.map((todo, index) => {
        return <p key={index}> {todo.title}</p>;
      })}
    </div>
  );
};

export default Todo;
