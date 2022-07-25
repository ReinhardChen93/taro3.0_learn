import { Component } from 'react';
import { connect } from 'react-redux'
import { showToast, reLaunch } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import classnames from 'classnames';
import { AtTabBar } from 'taro-ui'
import './index.scss'

type PropsType = {
  mineModel: {
    data: string
  },
  loading: any
}

type PageState = {
  current: any;
  showLoading: boolean;
  bannerList: Array<{
    typeTitle: string;
    pic: string;
    targetId: number;
  }>;
  searchValue: string;
};

// 将src/page/index/model.ts文件连接到src/page/index/index.tsx文件中
// 绑定mineModel
@connect((
  { loading, mineModel }: {
    loading: { effects: Record<string, boolean> };
    mineModel: {
      data: string
    }
  }
) => ({
  loadingStatus: loading.effects['mineModel/effectsDomeName'],
  mineModel
}))



class Index extends Component<PropsType, PageState> {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    }; //初始化state

  }
  componentWillMount() { }

  componentDidMount() {
    console.log('props :>> ', this.props);
  }

  componentWillUnmount() { }

  componentDidShow() {
    console.log('props :>> ', this.props);
    showToast({
      title: this.props.mineModel.data,
      icon: 'success',
      duration: 2000
    })
  }

  componentDidHide() { }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  switchTab(value, url) {
    if (value !== 0) return;
    reLaunch({
      url: "/pages/index/index"
    });
  }

  render() {
    return (
      <View className='container'>
        <View className='tree_box'>
          <View className='tree'>
            <View className='toptree'>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            <View className='leaves'></View>
            </View>

            <View className='trunk'>
              <View className='branch'></View>
              <View className='branch'></View>
            </View>
          </View>
        </View>
        <AtTabBar
          fixed
          selectedColor='#FEDD64'
          tabList={[
            { title: "", iconType: "home" },
            { title: "", iconType: "bullet-list" }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index;