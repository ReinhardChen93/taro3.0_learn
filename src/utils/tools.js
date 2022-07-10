
import Taro from '@tarojs/taro';

const getElements = (elements) => {
  const query = Taro.createSelectorQuery();
  if (typeof elements === 'string') {
    // 查找单个DOM
    query.select(elements).boundingClientRect();
  } else if (typeof elements === 'object') {
    // 查找多个DOM
    for (const key of elements) {
      query.select(key).boundingClientRect();
    }
  }

  return new Promise((resolve, reject) => {
    query.exec(res => {
      resolve(res)
    })
  })
}

export default {
  getElements
}