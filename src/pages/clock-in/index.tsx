import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function ClockIn() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='clock-in'>
      <Text>Hello world!</Text>
    </View>
  );
}
