import { CSSProperties } from "react";
import { FiChevronsLeft, FiChevronsRight, FiEdit } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import StyledButton from "../components/common/StyledButton";
import Header from "../components/target/Header";
import CreateToast from "../components/toast/CreateToast";

const Target = () => {
  const navigate = useNavigate();
  // const { data: targets, isLoading } = useGetAllTargets();

  const name = localStorage.getItem("userNickName");

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 10,
    top: "calc(70% - 15px)",
    fontSize: "40px",
    cursor: "pointer",
  };

  return (
    <div className={`relative flex flex-col min-h-screen px-6 pb-10`}>
      <Header name={name} />
      <section className="flex flex-col mt-10 h-full">
        <h1 className="font-semibold text-2xl pointer-events-none">
          현재 타겟 목록
        </h1>
        <div className="flex flex-row justify-center mt-8 h-full">
          <Carousel
            className="w-3/4 desktop:w-2/3"
            useKeyboardArrows
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15, top: 200 }}
                >
                  <FiChevronsLeft className="text-orange-500 bg-orange-100" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15, top: 200 }}
                >
                  <FiChevronsRight className="text-orange-500 bg-orange-100" />
                </button>
              )
            }
            statusFormatter={(
              currentItem: number,
              total: number
            ): string | JSX.Element => {
              return (
                <span className="text-black font-bold text-sm">{`${total}개의 목표 중 ${currentItem}번째`}</span>
              );
            }}
          ></Carousel>
        </div>

        <StyledButton
          styleName="target"
          type="button"
          onClick={() => navigate("create")}
        >
          <FiEdit className="mx-auto text-white text-2xl" />
        </StyledButton>
      </section>
      <CreateToast />
    </div>
  );
};

export default Target;
