import { Typography } from "../common/typography/Typography";

type Props = {
  children: React.ReactNode;
};

const Validation = ({ children }: Props) => {
  return (
    <div>
      <Typography type="section1" className="text-fail ml-1 m-2">
        {children}
      </Typography>
    </div>
  );
};

export default Validation;
