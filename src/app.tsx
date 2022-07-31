// import '@tarojs/async-await'
import { FC, useEffect } from 'react'
import Taro, { showToast } from '@tarojs/taro';
import { Provider } from 'react-redux'
import dva from './utils/dva';
import models from './models';

import './styles/app.scss';



const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

const App: FC = ({ children }) => {
  useEffect(() => {
    init()
  }, [])
  const init = () => {
    // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    Taro.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          Taro.authorize({
            scope: 'scope.userInfo',
            success: function () {
              // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
              Taro.getUserInfo({
                success(result) {
                  console.log('result :>> ', result);
                },
              })
            }
          })
        }
      }
    })
  }
  // children 是将要会渲染的页面
  return <Provider store={store} > {children} </Provider>
}
export default App;
