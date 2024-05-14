import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Typography } from '@/components/common/typography/Typography';
import SeedList from '@/components/target/seedList';
import useFilteringSeed from '@/hooks/useGetPaginatedTarget';
import { SeedSwiper } from './SeedSwiper';

const SEED_PAGE_VALUES = [
  {
    title: `땅에 씨앗을 심고 \n 열매를 맺어봐요.`,
    isActive: true,
  },
  {
    title: '완료한 씨앗을 \n 확인해보세요.',
    isActive: false,
  },
];

const SeedPageBody = () => {
  const { seeds, fetchNextPage } = useFilteringSeed();

  const lastTargetElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lastTargetElementRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });

    io.observe(lastTargetElementRef.current);
    return () => io.disconnect();
  }, [fetchNextPage]);

  return (
    <div className="flex-1 flex flex-col">
      <SeedSwiper>
        {SEED_PAGE_VALUES.map(({ title, isActive }, index) => {
          return (
            <SwiperSlide key={index}>
              <h1 className="pointer-events-none mb-8 text-white">
                <Typography type="heading1">{title}</Typography>
              </h1>
              <SeedList isActive={isActive} seeds={seeds} />
            </SwiperSlide>
          );
        })}
      </SeedSwiper>
      <div className="flex justify-center" ref={lastTargetElementRef}></div>
    </div>
  );
};

export default SeedPageBody;
