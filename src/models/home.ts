import { AnyAction } from 'redux';
import { EffectsCommandMap } from 'dva-core';

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

export type homeState = {
  data: any;

};

export interface ModelType {
  namespace: string;
  state: homeState;
  effects: {
    effectsDemo: Effect;
  };
  reducers: {
    save: Reducer<homeState>;
  }

}

const Model: ModelType = {
  namespace: 'home',
  state: {
    data: [1, 2, 3]
  },
  effects: {
    * effectsDemo({ params }, { call, put }) {
      // const { status, data } = yield call(${ dirName }Api.demo, {});
      // if (status === 'ok') {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       topData: data,
      //     }
      //   });
      // }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

}

export default Model