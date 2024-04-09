import { CommonButtonType } from "../../types/ButtonType";

const Button = ({
  children,
  onClick,
  type,
  style,
  disable,
}: CommonButtonType) => {
  return (
    <button type={type} onClick={onClick} className={style} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
