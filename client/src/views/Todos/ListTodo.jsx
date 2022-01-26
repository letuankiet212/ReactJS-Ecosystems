import React from 'react';
import AddTodo from './AddTodo';
import './ListTodo.scss';

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Making video' },
      { id: 'todo3', title: 'Fixing bugs' }
    ]
  };

  addNewTodo = (data) => {
    console.log('>>> Data New Object', data);
    this.setState({
      listTodos: [...this.state.listTodos, data]
    });
    console.log('>>> Data Array', this.state.listTodos);
  };
  handleEditTodo = (idTodo) => {
    console.log('>>> Edit Todo ID : ', idTodo);
  };

  handleDelTodo = (idTodo) => {
    console.log('>>> Delete Todo ID : ', idTodo);
  };
  render() {
    const _data = this.state;
    return (
      <>
        <div className="todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          {_data.listTodos.length > 0 ? (
            <div className="todo-list">
              {_data.listTodos.map((todo, index) => {
                return (
                  <div className="todo" key={index}>
                    <span>{todo.title}</span>
                    <button onClick={() => this.handleEditTodo(todo.id)}>Edit</button>
                    <button onClick={() => this.handleDelTodo(todo.id)}>Delete</button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </div>
      </>
    );
  }
}

export default ListTodo;
