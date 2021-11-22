import { useEffect, useState } from 'react';
import { API_DEMO, API_DEMO2 } from './api/common';
function App() {
  const [listTodo, setListTodo] = useState([]);
  const [input, setInput] = useState('');

  const API_GETDATA = async () => {
    await API_DEMO().then((res) => {
      setListTodo(res);
    });
  };

  const API_UPDATEDATA = async (value) => {
    await API_DEMO2({ message: value }).then((res) => {
      if (res.status) {
        setListTodo(res.listTodo);
      } else {
        alert('Loi ');
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API_UPDATEDATA(input);
  };

  useEffect(() => {
    API_GETDATA();
  }, []);
  return (
    <div className="App">
      <div>
        {listTodo.length > 0
          ? listTodo.map((todo) => <div key={todo.id}>{todo.message + '-' + todo.id}</div>)
          : 'Loading'}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nhap vao day" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Xac Nhan</button>
      </form>
    </div>
  );
}

export default App;
