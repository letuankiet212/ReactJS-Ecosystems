import React from 'react';
import AddTodo from './AddTodo';
import './ListTodo.scss';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Making video' },
      { id: 'todo3', title: 'Fixing bugs' }
    ]
  };

  componentDidMount() {
    console.log('>>> Check Props: ', this.props.dataRedux);
  }

  addNewTodo = (data) => {
    console.log('>>> Data New Object', data);
    this.setState({
      listTodos: [...this.state.listTodos, data]
    });
    toast.success(`Thành Công`, {});
  };

  handleEditTodo = (idTodo) => {
    console.log('>>> Edit Todo ID : ', idTodo);
  };

  handleDelTodo = (idTodo) => {
    console.log('>>> Delete Todo ID : ', idTodo);
  };

  handleDelRedux = (id) => {
    this.props.deleteUserRedux(id);
  };
  handleCreateRedux = () => {
    this.props.createUserRedux();
  };

  render() {
    const _data = this.state;
    let listUser = this.props.dataRedux;
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
          <p>Dữ liệu đổ = redux</p>
          <div>
            <button onClick={() => this.handleCreateRedux()}>Add New</button>
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item, index) => {
                return (
                  <div key={index}>
                    {index + 1} - {item.name}{' '}
                    <span onClick={() => this.handleDelRedux(item.id)}>X</span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDisplatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (idUser) => dispatch({ type: 'DELETE_USER', payload: idUser }),
    createUserRedux: () => dispatch({ type: 'CREATE_USER' })
  };
};

export default connect(mapStateToProps, mapDisplatchToProps)(ListTodo);
