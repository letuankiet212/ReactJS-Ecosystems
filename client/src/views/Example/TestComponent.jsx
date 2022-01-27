import React from 'react';
import AddComponent from './AddComponent';
import ListComponent from './ListComponent';
import { withRouter } from 'react-router';

class TestComponent extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 3000);
  }
  state = {
    listJob: []
  };
  addNewJob = (job) => {
    console.log('>>> Job Will Add List Job : ', job);
    this.setState({
      listJob: [...this.state.listJob, job]
      // listJob: this.state.listJob.push(job)
    });
    alert('Thêm Thành Công');
    // console.log('>>> Check job add listJob :', job);
    console.log('>>> List Job reRender : ', this.state.listJob);
  };
  removeJob = (job) => {
    let listJob = this.state.listJob.filter((res) => res.title !== job);
    console.log('>>> Job Will Delete : ', job);
    console.log('>>> List Job New', listJob);

    this.setState({
      listJob: listJob
    });
  };
  render() {
    console.log('>>> Check Props :', this.props);
    let { listJob } = this.state;
    return (
      <>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>
        <ListComponent listJob={listJob} removeJob={this.removeJob} />
      </>
    );
  }
}

export default withRouter(TestComponent);
