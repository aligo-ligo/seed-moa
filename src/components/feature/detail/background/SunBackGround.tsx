import SunIcon from '@/assets/icon/SunIcon';
import AbsoluteSpan from '@/components/common/absoluteSpan';
import { ABSOLUTE_SPAN_LOCATION_LIST } from '@/constants/background';
import { useCheerContext } from '@/context/CheerContext';

const SunBackground = () => {
  const { isSunOpen } = useCheerContext();

  return (
    <>
      {isSunOpen && (
        <>
          {ABSOLUTE_SPAN_LOCATION_LIST.map((span, index) => (
            <AbsoluteSpan position={span.postion} key={index}>
              <SunIcon width={span.width * 2} />
            </AbsoluteSpan>
          ))}
        </>
      )}
    </>
  );
};

export default SunBackground;
