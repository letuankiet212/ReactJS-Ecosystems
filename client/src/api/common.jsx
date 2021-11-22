import request from './../helpers/Request';

export function API_DEMO() {
  return request({
    url: 'http://localhost:5001/api/list-todo',
    method: 'get'
  });
}

export function API_DEMO2(object) {
  return request({
    url: 'http://localhost:5001/api/update-todo',
    method: 'post',
    data: object
  });
}
