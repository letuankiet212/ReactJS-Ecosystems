import request from './../../helpers/Request';

const domain = 'https://reqres.in/api/users';

export function APIGetUser(object) {
  return request({
    url: domain,
    methods: 'get',
    data: object
  });
}
