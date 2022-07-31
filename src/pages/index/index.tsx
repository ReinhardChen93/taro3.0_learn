import { Component } from 'react';
import { connect } from 'react-redux'
import Taro, { reLaunch } from '@tarojs/taro';
import { View } from '@tarojs/components';
import TabBar from '../../components/TabBar'


import './index.scss'

type PropsType = {
  indexModel: {
    data: string
  },
  loading: any
}

type PageState = {
  current: number;
  showLoading: boolean;
  bannerList: Array<{
    typeTitle: string;
    pic: string;
    targetId: number;
  }>;
  searchValue: string;
};

// 将src/page/index/model.ts文件连接到src/page/index/index.tsx文件中
// 绑定indexModel
@connect((
  { loading, indexModel }: {
    loading: { effects: Record<string, boolean> };
    indexModel: {
      data: string
    }
  }
) => ({
  loadingStatus: loading.effects['indexModel/effectsDomeName'],
  indexModel
}))



class Index extends Component<PropsType, PageState> {
  constructor(props) {
    super(props);
    this.state = {

    }; //初始化state

  }
  componentWillMount() { }

  componentDidMount() {
    console.log('props :>> ', this.props);
    this.init()
  }

  componentWillUnmount() { }

  componentDidShow() {

  }

  componentDidHide() { }

  init() {

  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  switchTab(value, url) {
    if (value !== 1) return;
    reLaunch({
      url: "/pages/mine/index"
    });
  }

  render() {
    return (
      <View className='container'>
        <View className='clock'></View>
        <View className='btn'>开始烹饪</View>
        <TabBar />
      </View>
    )
  }
}

export default Index;