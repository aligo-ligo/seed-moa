import { useNavigate } from "react-router-dom";

type Props = {
  closeModal: () => void;
};

const AuthModal = ({ closeModal }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <p>이미 로그인 상태입니다.</p>
      <button
        className="absolute bottom-5 text-main"
        onClick={() => {
          closeModal();
          navigate("/target");
        }}
      >
        확인
      </button>
    </>
  );
};

export default AuthModal;
