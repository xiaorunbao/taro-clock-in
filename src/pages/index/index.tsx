import { Button, ITouchEvent, Image, Swiper, SwiperItem, Text, Video, View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('res', res)
          //发起网络请求
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  })

  function handlerSwiperClick(event: ITouchEvent): void {
    console.log('click event', event)
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
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
            poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
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
              src='https://cn.bing.com/images/search?view=detailV2&ccid=ErSUxd%2bo&id=69EE6B190ABD230706B69E56CC65FA74FD33A9B1&thid=OIP.ErSUxd-oUB_zG5XHQnnEpgHaFL&mediaurl=https%3a%2f%2fts1.cn.mm.bing.net%2fth%2fid%2fR-C.12b494c5dfa8501ff31b95c74279c4a6%3frik%3dsakz%252fXT6ZcxWng%26riu%3dhttp%253a%252f%252fseopic.699pic.com%252fphoto%252f40006%252f3343.jpg_wh1200.jpg%26ehk%3d62DFtUPweTTi1Pj4%252fVWdFDMY0lYZm7kYRHRVlkuKVHU%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=840&expw=1200&q=zaixiantupian&simid=608050031153068571&FORM=IRPRST&ck=86A477672A021805036BF513A28CC3E6&selectedIndex=5&ajaxhist=0&ajaxserp=0'
              style={{ width: '300px', height: '100px' }}
              mode='aspectFit'
            >
            </Image>
          </View>
        </SwiperItem>
        <SwiperItem itemId='3'>
          <View className='banner-3'>3</View>
        </SwiperItem>
      </Swiper>

      <View>
        <Button type='primary'>dddddd</Button>
      </View>
    </View>
  )
}
