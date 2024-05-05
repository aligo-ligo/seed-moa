import useGetPaginatedTarget from "@/hooks/useGetPaginatedTarget";
import { useEffect, useRef } from "react";
import { Spinner } from "../common/spinner/Spinner";
import TargetCard from "./TargetCard";
import TargetEmptyCard from "./TargetEmptyCard";

const TargetList = () => {
  const {
    data: targets,
    fetchNextPage,
    status,
    isLoading,
  } = useGetPaginatedTarget();
  const lastTargetElementRef = useRef<HTMLDivElement>(null);

  //TODO : 컴포넌트로 분리할 수 있지 않을까?!
  useEffect(() => {
    if (!lastTargetElementRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });

    io.observe(lastTargetElementRef.current);
    return () => io.disconnect();
  }, [targets]);

  return (
    <ul className="flex flex-col gap-6">
      {status === "success" &&
        targets.map((target) => {
          return <TargetCard key={target.id} {...target} />;
        })}

      {targets?.length === 0 && <TargetEmptyCard />}

      <div className="flex justify-center mt-10" ref={lastTargetElementRef}>
        {isLoading && <Spinner />}
      </div>
    </ul>
  );
};

export default TargetList;
