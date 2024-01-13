import { usePatchVote } from "../../hooks/usePatchVote";

type Props = {
  closeModal: () => void;
  success: boolean | null | undefined;
  targetId: string | undefined;
};

const VoteModal = ({ closeModal, success, targetId: id }: Props) => {
  const { voteMutation } = usePatchVote(id);

  const handleClick = () => {
    voteMutation.mutate({ id, success });
    closeModal();
  };
  return (
    <>
      <div className="text-lg font-bold">투표는 변경하실 수 없어요</div>
      <div className="my-5">
        {success ? (
          <p>성공하실 것 같나요?</p>
        ) : (
          <p>타겟이 현실성이 없다고 생각하시나요?</p>
        )}
      </div>

      <div className="flex w-full justify-center gap-5 desktop:gap-10">
        <button
          className="p-2 border border-main rounded-md bg-main text-white hover:bg-mainHover hover:border-mainHover"
          onClick={handleClick}
        >
          투표하기
        </button>
        <button
          className="hover:text-gray p-2 border rounded-md"
          onClick={closeModal}
        >
          검토하기
        </button>
      </div>
    </>
  );
};

export default VoteModal;
