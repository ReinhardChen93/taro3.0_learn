import { AnyAction } from 'redux';
import { EffectsCommandMap, Subscription } from 'dva-core';
import Taro, { showToast } from '@tarojs/taro';
import * as API from './service';


export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap,
) => void;

export interface Action<T = any> {
  type: T
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

export type CIRState = {
  data: any;

};

export interface ModelType {
  namespace: string;
  state: CIRState;
  effects: {
    effectsDomeName: Effect;
  };
  reducers: {
    save: Reducer<CIRState>;
  };
  subscriptions?: { setup?: Subscription };


}

const Model: ModelType = {
  namespace: 'CIEModel',
  state: {
    data: '测试model是否配置成功'
  },
  effects: {
    // 此处换成自己的方法名称
    * effectsDomeName({ params, callBack }, { call, put }) {
      // Api是request封装的请求方法(如果有需要下一期我再下一篇axios在taro的封装
      const response = yield call(API.demo, params);
      console.log('response', response)
      if (response.data.status === 200 && response.data.status === 0) {
        callBack(response.data.result)
      }
      if (response.status === 200 && response.data.status === 1) {
        showToast({
          title: response.data.msg || '发生错误',
          icon: 'erroe'
        })
        yield put({
          type: 'save',
          payload: {
            data: response.data.result,
          }
        });
      }
      console.log('first', params)
      Taro.showLoading({
        title: '正在加载'
      })
     
      return response
    },
    
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname }) => {
    //     if (pathname === '/shop') {
    //       dispatch({
    //         type: 'query',
    //       })
    //     }
    //   });
    // }
  }
}

export default Model