import { FC, useState } from 'react';
import { AtTabBar } from 'taro-ui'
import { reLaunch } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';
import Clock from '../../assets/imgs/tabbar/clock.png';
import ClockActive from '../../assets/imgs/tabbar/clock_active.png';
import Tree from '../../assets/imgs/tabbar/tree.png';
import TreeActive from '../../assets/imgs/tabbar/tree_active.png';
import Music from '../../assets/imgs/tabbar/music.png';
import MusicActive from '../../assets/imgs/tabbar/music_active.png';

type TabBarProps = {
  onClick?: () => void,
  current?: number
}

const TabBar: FC<TabBarProps> = (props) => {
  const [current, setCurrent] = useState(0)

  const switchTab = (value, event) => {
    console.log('value :>> ', value);
    switch (value) {
      case 0:

         reLaunch({
          url: "/pages/index/index"
        });
        break;
    
      default:
        break;
    }
    if (value !== 1) return;
    // reLaunch({
    //   url: "/pages/mine/index"
    // });
  }

  return (
    <View className='footer' id='footer'>
      <AtTabBar

        selectedColor='#FEDD64'
        tabList={[
          { title: "", image: Clock, selectedImage: ClockActive},
          { title: "", image: Tree, selectedImage: TreeActive },
          { title: "", image: Music, selectedImage: MusicActive }
        ]}
        onClick={(index, event) => switchTab(index, event)}
        current={current}

      />
    </View>
  )
}

TabBar.propTypes = {}

export default TabBar
