import { OliBodyImage } from "../../constant/image";

type Props = {
  word: string;
};

const LineGraphPrep = ({ word }: Props) => {
  return (
    <div className="my-3">
      <div className="flex justify-center h-36 bg-lighterGray">
        <img src={OliBodyImage} alt="이미지" />
      </div>
      <div className="flex flex-col items-center bg-lighterGray font-bold p-3">
        <p className="text-main">{word}</p>
        <p className="text-main text-3xl">Comming Soon</p>
      </div>
    </div>
  );
};

export default LineGraphPrep;
