import { RankInfoVO } from '@/interfaces';
import { Text, View } from '@tarojs/components';

import no1 from '@/resource/no1-1.png';
import no2 from '@/resource/no2.png';
import no3 from '@/resource/no3.png';
import { AtAvatar } from 'taro-ui';
import RankIcon from '../rank-icon';
import './index.scss';

export default function RankInfo({
  avatarImg,
  userName,
  score,
  rank,
}: RankInfoVO) {
  const renderRankIcon = () => {
    if (rank === 1) {
      return <RankIcon imgPath={no1} />;
    }
    if (rank === 2) {
      return <RankIcon imgPath={no2} />;
    }
    if (rank === 3) {
      return <RankIcon imgPath={no3} />;
    }
    return null;
  };

  return (
    <View className='rank-info'>
      <AtAvatar
        circle
        image='https://jdc.jd.com/img/200'
        text={avatarImg}
        className='avatar'
      />
      <Text className='name'>{userName}</Text>
      <Text className='score'>{score}</Text>
      <Text className='rank'>{rank}</Text>
      {renderRankIcon()}
    </View>
  );
}
