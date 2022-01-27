import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import ListTodo from './Todos/ListTodo';
import TestComponent from './Example/TestComponent';
import ListUser from './Users/ListUser';
import './App.scss';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact={true}>
            <ListTodo />
          </Route>
          <Route path="/test">
            <TestComponent />
          </Route>
          <Route path="/users">
            <ListUser />
          </Route>
        </Switch>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;
