import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const HookHome = () => {
  const [name, setName] = useState('Eric');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Doing homework' },
    { id: 'todo2', title: 'Khoingu' }
  ]);

  //Created
  useEffect(() => {
    console.log('>>> Run useEffect');
  }, []);

  //Watch when Name update
  useEffect(() => {
    console.log('>>> Run useEffect');
  }, [name]);

  //Watch when anything Update
  useEffect(() => {
    console.log('>>> Run useEffect');
  });

  const handleEventClick = () => {
    let data = { id: Math.floor(Math.random() * 1000000), title: name };
    setTodos([...todos, data]);
    setName('');
  };
  return (
    <div className="App">
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => handleEventClick()}>hello work {name}</button>

      <Todo todos={todos} />
    </div>
  );
};

export default HookHome;
