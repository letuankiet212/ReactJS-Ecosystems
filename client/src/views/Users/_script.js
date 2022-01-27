import { APIGetUser } from './ListUserAPI';

const getUser = async (numberPage) => {
  await APIGetUser({ pages: numberPage }).then((res) => {
    console.log(res);
  });
};

export default getUser;
