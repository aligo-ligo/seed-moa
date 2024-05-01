import useGetPaginatedTarget from "@/hooks/useGetPaginatedTarget";
import { Spinner } from "../common/spinner/Spinner";
import TargetCard from "./TargetCard";

const TargetList = () => {
  const { data: targets, isLoading } = useGetPaginatedTarget();
  console.log("targets", targets);
  return (
    <ul className="flex flex-col gap-6">
      <TargetCard />
      <TargetCard />
      <TargetCard />
      <TargetCard />
      <TargetCard />

      <div className="flex justify-center mt-10">
        {isLoading && <Spinner />}
      </div>
    </ul>
  );
};

export default TargetList;
