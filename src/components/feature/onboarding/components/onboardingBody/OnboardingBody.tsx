import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Button from '@/components/common/button/Button';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { OnboardingLayout } from '../onboardingLayout';
import type { OnboardingLayoutProps } from '../onboardingLayout/onboardingLayout';
import { OnboardingSwiper } from '../onboardingSwiper';

const ONBOARDING_VALUES: OnboardingLayoutProps[] = [
  {
    title: '내가 걸어갈 길의 \n 방향을 짚어가면서 \n 목표와 계획을 세워보세요.',
  },
  {
    title: '한 조각씩 채우다 보면 \n 나만의 인생지도가 \n 완성될 거예요.',
  },
  {
    title: '한 조각씩 채우다 보면 \n 나만의 인생지도가 \n 완성될 거예요.',
  },
  {
    title: '한 조각씩 채우다 보면 \n 나만의 인생지도가 \n 완성될 거예요.',
  },
  {
    title: '한 조각씩 채우다 보면 \n 나만의 인생지도가 \n 완성될 거예요.',
  },
];

export const OnboardingBody = () => {
  return (
    <div className="w-full h-full flex flex-col pt-[68px]">
      <div className="h-full">
        <OnboardingSwiper>
          {ONBOARDING_VALUES.map(({ title }, index) => (
            <SwiperSlide key={index}>
              <OnboardingLayout title={title} />
            </SwiperSlide>
          ))}
        </OnboardingSwiper>
      </div>
      <Link to={ROUTER_PATHS.TARGET}>
        <Button width="full" variant="secondary" className={`w-full h-16 bg-none`}>
          시작하기
        </Button>
      </Link>
    </div>
  );
};
