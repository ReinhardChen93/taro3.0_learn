import request from '../../utils/request';
import api from '../../utils/api'

export async function demo(params) {
  return request(api.createByMyself, {
    method: 'get',
    params,
  });
}


export async function posts(params) {
  return request(api.posts, {
    method: 'post',
    params,
  });
}