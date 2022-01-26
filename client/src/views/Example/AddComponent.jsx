import React from 'react';

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: ''
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert('Missing required params');
      return false;
    }
    const data = {
      title: this.state.title,
      salary: this.state.salary
    };
    this.props.addNewJob(data);
    this.setState({
      title: '',
      salary: ''
    });
  };
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor="fname">Job's title : </label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <br />
        <button type="submit">Xác Nhận</button>
      </form>
    );
  }
}

export default AddComponent;
