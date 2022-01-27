import React from 'react';
import { APIGetUser } from './ListUserAPI';

class ListUser extends React.Component {
  state = {
    listUsers: []
  };
  getUser = async (numberPage) => {
    await APIGetUser({ pages: numberPage }).then((res) => {
      this.setState({
        listUsers: res.data
      });
    });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.map((item, index) => {
              return <div key={index}>{item.first_name + ' ' + item.last_name}</div>;
            })}
        </div>
      </div>
    );
  }
}

export default ListUser;
