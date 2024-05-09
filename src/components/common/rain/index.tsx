import Droplet from '@/assets/icon/Droplet';

type RainProps = {
  position: { x: string; y: string };
  size: number;
};

const Rain = ({ position, size }: RainProps) => {
  return (
    <span className={`absolute w-fit h-fit inset-y-0 ${position.x} ${position.y}`}>
      <Droplet width={size} />
    </span>
  );
};

export default Rain;
