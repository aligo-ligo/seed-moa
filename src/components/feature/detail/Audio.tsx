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
