import AnimatedDroplet from '@/assets/icon/AnimatedDroplet';

type RainProps = {
  position: { x: string; y: string };
  size: number;
};

const Rain = ({ position, size }: RainProps) => {
  return (
    <span className={`absolute ${position.x} ${position.y}`}>
      <AnimatedDroplet width={size} />
    </span>
  );
};

export default Rain;
