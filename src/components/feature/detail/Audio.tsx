import { useEffect, useRef } from 'react';

import useUpdateEffect from '@/hooks/useUpdateEffect';
import useMusicStore from '@/store/useMusicStore';

interface AudioProps {
  /** 재생할 음악의 URL입니다. */
  src: string;
}

const Audio = ({ src }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = useMusicStore((s) => s.isPlaying);
  console.log('isPlaying in Audio', isPlaying);

  /** 최초 렌더링시 아무 곳이나 마우스로 상호작용하면 음악 On/Off 처리 */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    const handleMouseUp = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play();
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  /** isPlaying 변경시 음악 On/Off 처리 */
  useUpdateEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={src} />;
};

export default Audio;
