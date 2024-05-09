import { useRef } from 'react';

import useUpdateEffect from '@/hooks/useUpdateEffect';
import useMusicStore from '@/store/useMusicStore';

interface AudioProps {
  /** 재생할 음악의 URL입니다. */
  src: string;
}

const Audio = ({ src }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = useMusicStore((s) => s.isPlaying);

  // TODO : 페이드 아웃 기능 구현 필요
  // const fadeOut = () => {
  //   if (!audioRef.current) return;
  //   const initialVolume = audioRef.current.volume;
  //   console.log('initialVolume', initialVolume);
  //   const fadeOutInterval = 1000; // 50밀리초마다 볼륨을 조정

  //   const fadeOutStep = initialVolume / (fadeOutDuration / fadeOutInterval);
  //   console.log('fadeOutStep', fadeOutStep);

  //   const fadeInterval = setInterval(() => {
  //     if (audioRef.current === null) return;

  //     console.log('audioRef.current.volume', audioRef.current.volume);
  //     if (audioRef.current.volume > 0) {
  //       audioRef.current.volume -= fadeOutStep;
  //     } else {
  //       clearInterval(fadeInterval);
  //       audioRef.current.pause();
  //     }
  //   }, fadeOutInterval);
  // };

  /** isPlaying 변경시 음악 On/Off 처리 */
  useUpdateEffect(() => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.volume = 0.2;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={src} />;
};

export default Audio;
