import { Typography } from '@/components/common/typography/Typography';

const ProfileCard = () => {
  return (
    <div className="w-[349px] h-[130px] bg-white rounded-lg overflow-hidden relative">
      <div className="absolute top-2xs left-3xs text-blue-35">
        <Typography className="font-insungit">반디부디와 함께한지 123</Typography>
        <div className="flex items-center">
          <Typography className="font-insungit">13 </Typography>
          {/* <StarIcon /> */}
        </div>
      </div>
      {/* <ProfileCardCoverImage /> */}
    </div>
  );
};

export default ProfileCard;
