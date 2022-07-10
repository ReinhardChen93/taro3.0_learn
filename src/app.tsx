// import '@tarojs/async-await'
import { FC } from 'react'
import { showToast } from '@tarojs/taro';
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

  // children 是将要会渲染的页面
  return <Provider store={store} > {children} </Provider>
}
export default App;
