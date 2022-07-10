import request from '@/utils/request';
import api from '@/utils/api'

export async function demo(params) {
  return request(api.createByMyself, {
    method: 'get',
    params,
  });
}