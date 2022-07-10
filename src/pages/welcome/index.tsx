import { Component } from 'react';
import { connect } from 'react-redux'
import { redirectTo } from '@tarojs/taro';
import { View } from '@tarojs/components'


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



class Welcome extends Component<PropsType, PageState> {
  constructor(props) {
    super(props);
    this.state = {
     
    }; //初始化state

  }
  componentWillMount() { }

  componentDidMount() {
    console.log('props :>> ', this.props);
  }

  componentWillUnmount() { }

  componentDidShow() {
    setTimeout(() => {
      redirectTo({
        url: '/pages/index/index'
      })
    }, 1500);
  }

  componentDidHide() { }

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
        <view  >
          
        </view>
        
      </View>
    )
  }
}

export default Welcome;