import useGetPaginatedTarget from "@/hooks/useGetPaginatedTarget";
import { Spinner } from "../common/spinner/Spinner";
import TargetCard from "./TargetCard";

const TargetList = () => {
  const { data: targets, status, isLoading } = useGetPaginatedTarget();
  console.log("targets", targets);

  return (
    <ul className="flex flex-col gap-6">
      {status === "success" &&
        targets.targetInfo.map((target) => {
          return <TargetCard key={target.id} {...target} />;
        })}

      <div className="flex justify-center mt-10">
        {isLoading && <Spinner />}
      </div>
    </ul>
  );
};

export default TargetList;
