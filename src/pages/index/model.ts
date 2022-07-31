import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva-core';
// import * as API from './service';
import { showToast } from '@tarojs/taro';

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

export type indexState = {
  data: any;

};

export interface ModelType {
  namespace: string;
  state: indexState;
  effects: {
    effectsDomeName: Effect;
  };
  reducers: {
    save: Reducer<indexState>;
  }

}

const Model: ModelType = {
  namespace: 'indexModel',
  state: {
    data: '测试model是否配置成功'
  },
  effects: {
    // 此处换成自己的方法名称
    * effectsDomeName({ params, callBack }, { call, put }) {
      // Api是request封装的请求方法(如果有需要下一期我再下一篇axios在taro的封装
      // const response = yield call(API.demo, {});
      // if (Response.stattus === 200 && Response.data.status === 0) {
      //   callBack(response.data.result)
      // }
      // if (response.status === 200 && response.data.status === 1) {
      //   showToast({
      //     title: response.data.msg || '发生错误',
      //     icon: 'erroe'
      //   })
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       data: response.data.result,
      //     }
      //   });
      // }
    },
    subscriptions: {

    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

}

export default Model