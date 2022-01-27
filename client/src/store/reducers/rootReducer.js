const initState = {
  users: [
    {
      id: 1,
      name: 'Sengoku'
    },
    {
      id: 2,
      name: 'TuanKiet'
    }
  ],
  posts: []
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER': {
      console.log('>>> DELETE USER IN REDUX WHICH ID : ', action.payload);
      let users = state.users;
      users = users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users
      };
    }
    case 'CREATE_USER': {
      console.log('>>> ADD NEW USER IN REDUX');
      let id = Math.floor(Math.random() * 1000000);
      let user = {
        id: id,
        name: `random-${id}`
      };
      return {
        ...state,
        users: [...state.users, user]
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
