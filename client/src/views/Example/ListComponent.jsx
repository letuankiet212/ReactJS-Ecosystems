import React from 'react';

class ListComponent extends React.Component {
  handleDelete = (title) => {
    this.props.removeJob(title);
  };
  render() {
    const { listJob } = this.props;
    return (
      <>
        {listJob.length > 0 ? (
          <div>
            <ul>
              {listJob.map((item, index) => {
                return (
                  <li key={index}>
                    <p>
                      <span>
                        {item.title} - {item.salary}
                      </span>
                      <span onClick={() => this.handleDelete(item.title)}>
                        <b>
                          <u>X</u>
                        </b>
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>Không có dữ liệu</div>
        )}
      </>
    );
  }
}

export default ListComponent;
