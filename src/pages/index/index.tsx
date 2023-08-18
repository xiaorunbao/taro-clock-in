import {
  ITouchEvent,
  Image,
  OpenData,
  Picker,
  ScrollView,
  StickyHeader,
  Swiper,
  SwiperItem,
  Text,
  Video,
  View,
} from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';
import { AtCalendar, AtCard, AtDivider } from 'taro-ui';
import './index.scss';

export default function Index() {
  const mockRange = [{ key: 'XX园东区' }, { key: 'XX园西区' }];

  const [selected, setSelected] = useState('未选择');

  useLoad(() => {
    console.log('Page loaded.');
    const code = Taro.getStorageSync('code');
    console.log('从storage中取出code', code);
    if (!code) {
      Taro.login({
        success: function (res) {
          if (res.code) {
            console.log('res', res);
            Taro.setStorage({ key: 'code', data: res.code });
            //发起网络请求
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        },
      });
    }
  });

  function handlerSwiperClick(event: ITouchEvent): void {
    console.log('click event', event);
  }

  const onChangeHander = (e: any) => {
    setSelected(mockRange[e.detail.value].key);
  };

  const [taskData, setTaskData] = useState<{ value: string }[]>([]);
  useEffect(() => {
    if (!isEqual(selected, '未选择')) {
      console.log('进来了！！！！');
      // 请求该园区打卡任务
      const mockTask = [
        { value: '2023/08/01' },
        { value: '2023/08/02' },
        { value: '2023/08/03' },
        { value: '2023/08/04' },
        { value: '2023/08/07' },
        { value: '2023/08/08' },
      ];
      setTaskData(mockTask);
    }
  }, [selected]);

  return (
    <ScrollView className='index'>
      <StickyHeader id='user-info'>
        <View className='user-info'>
          <Text>Hello, </Text>
          <OpenData type='userNickName' lang='zh_CN' />
          <OpenData type='userAvatarUrl' lang='zh_CN' className='avatar' />
        </View>
      </StickyHeader>

      <Swiper
        className='swiper-banner'
        indicatorColor='#999'
        indicatorActiveColor='#931'
        circular
        indicatorDots
        onClick={handlerSwiperClick}
      >
        <SwiperItem itemId='1'>
          <Video
            id='video'
            src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            poster='https://hd.wallpaperswide.com/thumbs/cute_corgi-t2.jpg'
            initialTime={0}
            controls
            autoplay={false}
            loop={false}
            muted={false}
            objectFit='fill'
          />
        </SwiperItem>
        <SwiperItem itemId='2'>
          <View className='banner-2'>
            <Image
              src='https://hd.wallpaperswide.com/thumbs/im_hungry-t2.jpg'
              style={{ width: 375 }}
            ></Image>
          </View>
        </SwiperItem>
        <SwiperItem itemId='3'>
          <View className='banner-3'>
            <Image
              src='https://hd.wallpaperswide.com/thumbs/cute_husky_puppy-t2.jpg'
              style={{ width: 375 }}
            />
          </View>
        </SwiperItem>
      </Swiper>
      <AtDivider lineColor='#ed3f14' />
      <View className='content-cneter'>
        <Picker
          mode='selector'
          range={mockRange}
          onChange={onChangeHander}
          rangeKey='key'
        >
          <View className='picker'>当前园区:{selected}</View>
        </Picker>
        <AtDivider lineColor='#ed3f14' />
      </View>
      <View>
        <AtCard title='打卡日历' isFull>
          <AtCalendar
            currentDate='2023/08/11'
            minDate='2023/08/01'
            maxDate='2023/08/31'
            marks={taskData}
            hideArrow
          />
        </AtCard>
      </View>
    </ScrollView>
  );
}
