import { Image } from '@tarojs/components';

export default function RankIcon({ imgPath }: { imgPath: string }) {
  return (
    <Image
      src={imgPath}
      style={{
        height: 30,
        width: 30,
        position: 'absolute',
        right: 20,
      }}
    />
  );
}
