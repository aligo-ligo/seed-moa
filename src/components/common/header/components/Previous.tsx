import { useNavigate } from 'react-router-dom';

import ChevronLeft from '@/assets/icon/ChevronLeft';
import Button from '@/components/common/button/Button';

const Previous = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="empty"
      aria-label="뒤로가기"
      iconOnly
      Icon={<ChevronLeft width={20} height={20} color="white" />}
      onClick={() => navigate(-1)}
    />
  );
};

export default Previous;
