export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/clock-in/index',
    'pages/user/index',
    'pages/rank/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '主页',
        iconPath: 'resource/home-page.png',
        selectedIconPath: 'resource/home-page-1.png',
      },
      {
        pagePath: 'pages/rank/index',
        text: '排行榜',
        iconPath: 'resource/rank.png',
        selectedIconPath: 'resource/rank-selected.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'resource/firm.png',
        selectedIconPath: 'resource/firm-selected.png',
      },
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
});
