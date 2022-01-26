import React from 'react';

class AddTodo extends React.Component {
  state = {
    value: null
  };
  handleOnChange = (data) => {
    this.setState({
      value: data
    });
  };
  AddTodo = () => {
    let data = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.value
    };
    this.props.addNewTodo(data);
  };
  render() {
    let { value } = this.state;
    return (
      <div className="todo-add">
        <input type="text" value={value} onChange={() => this.handleOnChange(event.target.value)} />
        <button type="submit" onClick={() => this.AddTodo()}>
          ADD
        </button>
      </div>
    );
  }
}

export default AddTodo;
