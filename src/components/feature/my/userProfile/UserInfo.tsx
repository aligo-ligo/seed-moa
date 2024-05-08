import { Typography } from '@/components/common/typography/Typography';

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo = ({ name, email }: UserInfoProps) => {
  return (
    <div className="flex flex-col items-center text-white">
      <Typography type="body1">{name}님</Typography>
      <div className="flex gap-1 items-center">
        <Typography type="body1">{email}</Typography>
      </div>
    </div>
  );
};

export default UserInfo;
