import RankInfo from '@/components/rank-info/rank-info';
import { ListView, ScrollView } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Rank() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <ScrollView className='croll-list'>
      <ListView className='rank-list'>
        <RankInfo avatarImg='11' userName='rainbow' rank={1} score={100} />
        <RankInfo avatarImg='22' userName='22' rank={2} score={99} />
        <RankInfo avatarImg='33' userName='33' rank={3} score={95} />
      </ListView>
    </ScrollView>
  );
}
