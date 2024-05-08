import Profile from '@/assets/icon/Profile';
import UserInfo from './UserInfo';

interface UserProfileProps {
  name: string;
  email: string;
}

const UserProfile = ({ name = '주영', email = 'hys8375195@gmail.com ' }: UserProfileProps) => {
  return (
    <div className="mt-10 flex flex-col gap-2 items-center">
      <Profile width={80} />
      <UserInfo name={name} email={email} />
    </div>
  );
};

export default UserProfile;
