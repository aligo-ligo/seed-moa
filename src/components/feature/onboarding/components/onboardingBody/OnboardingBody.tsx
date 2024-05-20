import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Button from '@/components/common/button/Button';
import { Lottie } from '@/components/common/lottie';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { OnboardingLayout } from '../onboardingLayout';
import type { OnboardingLayoutProps } from '../onboardingLayout/onboardingLayout';
import OnboardingRain from '../OnboardingRain';
import OnboardingSeedCard from '../OnboardingSeedCard';
import OnboardingSun from '../OnboardingSun';
import { OnboardingSwiper } from '../onboardingSwiper';

const ONBOARDING_VALUES: OnboardingLayoutProps[] = [
  {
    title: '씨앗 모아는 \n 작은 성취를 쌓아 \n 큰 성취를 얻길 원해요.',
    content: <Lottie src="/lottie/growSeed.json" />,
  },
  {
    title: '목표와 루틴 그리고 기간을 \n 작성하여 씨앗을 심을 수 있어요. ',
    content: <OnboardingSeedCard />,
  },
  {
    title: '심은 씨앗에 \n 물을 줄 수 있어요',
    content: <OnboardingRain />,
  },
  {
    title: '친구가 공유해 준다면  \n 심은 씨앗에  응원도 \n 가능해요.',
    content: <OnboardingSun />,
  },
];

export const OnboardingBody = () => {
  return (
    <div className="w-full h-full flex flex-col pt-[68px]">
      <div className="h-full">
        <OnboardingSwiper>
          {ONBOARDING_VALUES.map(({ title, content }, index) => (
            <SwiperSlide key={index}>
              <OnboardingLayout title={title} content={content} />
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
