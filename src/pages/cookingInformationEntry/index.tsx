import { Component } from 'react';
import { connect } from 'react-redux'
import Taro, { showToast, reLaunch, eventCenter, getCurrentInstance } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import classnames from 'classnames';
import moment from 'moment';
import { AtTabBar, AtForm, AtInput, AtImagePicker, AtButton } from 'taro-ui';
import Tool from '../../utils/tools.js';
import './index.scss'

type PropsType = {
  dispatch: any;
  CIEModel: {
    data: string
  },
  loadingStatus: any
}

type PageState = {
  current: number;
  foodSource: string;
  foodName: string;
  files: Array<any>;
  mood: string;
  bodyH: number;
  // bannerList: Array<{
  //   typeTitle: string;
  //   pic: string;
  //   targetId: number;
  // }>;
  // searchValue: string;
};

// 将src/page/index/model.ts文件连接到src/page/index/index.tsx文件中
// 绑定CIEModel
@connect((
  { loading, CIEModel }: {
    loading: { effects: Record<string, boolean> };
    CIEModel: {
      data: string
    }
  }
) => ({
  loadingStatus: loading.effects['CIEModel/effectsDomeName'],
  CIEModel
}))



class CookingInformationEntry extends Component<PropsType, PageState> {



  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      foodName: '',
      foodSource: '',
      files: [],
      mood: '',
      bodyH: 0
    }; //初始化state
  }



  componentWillMount() {
    // 获取元素高度
    if (this.$instance.router) {
      const onReadyEventId = this.$instance.router.onReady
      eventCenter.once(onReadyEventId, () => {
        Tool.getElements(['#header', '#footer']).then(res => {
          let bodyH = res[0].height + res[1].height
          this.setState({
            bodyH
          })
        })
      })
    }

  }


  componentDidMount() {


  }

  componentWillUnmount() { }

  $instance = getCurrentInstance()

  componentDidShow() {

  }

  componentDidHide() { }

  handleFoodNameChange = (value) => {
    this.setState({
      foodName: value
    })
  }

  handleFoodSource = (value) => {
    this.setState({
      foodSource: value
    })
  }

  headelMoodChange = (value) => {
    this.setState({
      mood: value
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  switchTab(value) {
    if (value !== 1) return;
    reLaunch({
      url: "/pages/mine/index"
    });
  }

  handelImgChange = (files) => {
    this.setState({
      files
    })
  }

  handelImgChangeFail = (mes) => {
    console.log(mes)
  }


  handleImgClick = (index, file) => {
    console.log('index, file', index, file)
    console.log('this.state.file :>> ', this.state.files);
    let fileList = this.state.files.map(i => i.url)
    Taro.previewImage({
      current: fileList[index], // 当前显示图片的http链接
      urls: fileList // 需要预览的图片http链接列表
    })
  }

  handelOnSubmit = () => {
    const { foodName, foodSource, files, mood, } = this.state
    this.props.dispatch({
      type: 'CIEModel/effectsDomeName',
      params: {
        foodName,
        foodSource,
        files,
        mood,
      }
    }).then(res => {
      console.log('res :>> ', res);
    })
  }

  render() {

    return (
      <View className='container'>
        <view className='header' id='header'>
          <Text className='time'>{moment().format('YYYY年MM月DD日')}</Text>
        </view>

        <View className='body' style={{
          height: `calc(100vh -  ${this.state.bodyH}px - 30px)`
        }}
        >
          <AtForm className='form_content'>
            <View className='form_item'>
              <View className='label'>食物名称</View>
              <View className='value'>
                <AtInput
                  name='foodName'
                  title=''
                  type='text'
                  placeholder='请填入食物名称'
                  value={this.state.foodName}
                  onChange={this.handleFoodNameChange.bind(this)}
                />
              </View>
            </View>

            <View className='form_item'>
              <View className='label'>食物照片</View>
              <View className='value'>
                <AtImagePicker
                  length={5}
                  files={this.state.files}
                  onChange={this.handelImgChange.bind(this)}
                  onFail={this.handelImgChangeFail.bind(this)}
                  onImageClick={this.handleImgClick.bind(this)}
                />
              </View>
            </View>

            <View className='form_item'>
              <View className='label'>食物来源</View>
              <View className='btn_content'>
                <Text className={classnames('btn', {
                  'actvie': this.state.foodSource === '1'
                })} onClick={() => this.handleFoodSource('1')}
                >
                  家庭烹饪
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.foodSource === '2'
                })} onClick={() => this.handleFoodSource('2')}
                >
                  其他
                </Text>

              </View>
            </View>

            <View className='form_item'>
              <View className='label'>进食后的心情</View>
              <View className='btn_content_grid'>
                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '1'
                })} onClick={() => this.headelMoodChange('1')}
                >
                  快乐
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '2'
                })} onClick={() => this.headelMoodChange('2')}
                >
                  平常
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '3'
                })} onClick={() => this.headelMoodChange('3')}
                >
                  轻松
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '4'
                })} onClick={() => this.headelMoodChange('4')}
                >
                  焦虑
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '5'
                })} onClick={() => this.headelMoodChange('5')}
                >
                  愧疚
                </Text>

                <Text className={classnames('btn', {
                  'actvie': this.state.mood === '6'
                })} onClick={() => this.headelMoodChange('6')}
                >
                  没感觉
                </Text>

              </View>
            </View>

            <AtButton className='submit' type='primary' onClick={() => this.handelOnSubmit()} loading={this.props.loadingStatus}>完成</AtButton>
          </AtForm>
        </View>
        <View className='footer' id='footer'>
          <AtTabBar

            selectedColor="#FEDD64"
            tabList={[
              { title: "", iconType: "home" },
              { title: "", iconType: "bullet-list" }
            ]}
            onClick={this.switchTab.bind(this)}
            current={this.state.current}

          />
        </View>
      </View>
    )
  }
}

export default CookingInformationEntry;