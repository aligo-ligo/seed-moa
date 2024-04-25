import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import Warnning from "./Warning";

import {
  EMAIL_INPUT,
  NICKNAME_INPUT,
  PASSWORD_INPUT,
  PASSWORD_VISIBLE_INPUT,
  ValidationAuth,
} from "@/constants/auth";

import authAPI from "@/api/auth/apis";
import IMAGE_MAP from "@/constants/image";
import STORAGE_KEYS from "@/constants/storageKeys";
import { authReducer, initialState } from "@/store/reducer";

import { ROUTER_PATHS } from "@/constants/routerPath";
import { useMutation } from "@tanstack/react-query";
import StyledButton from "../common/StyledButton";
import Validation from "./Validation";

interface AuthFormProps {
  name: string;
  isLogin: boolean;
  url: string;
}

export default function AuthForm({ name, isLogin, url }: AuthFormProps) {
  const [message, _] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [userInfo, dispatch] = useReducer(authReducer, initialState);
  const { emailValid, passwordValid, nickNameValid } = userInfo;

  const { mutateAsync: signInMutateAsync } = useMutation({
    mutationFn: authAPI.postSignin,
  });
  const { mutateAsync: signUpMutateAsync } = useMutation({
    mutationFn: authAPI.postSignup,
  });

  const navigate = useNavigate();

  const updateIsPassWordShown = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const isActive = isLogin
    ? !emailValid || !passwordValid
    : !emailValid || !passwordValid || !nickNameValid;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : 변수명이 햇갈림 isLogin -> isLoginPath
    if (isLogin) {
      try {
        const data = await signInMutateAsync(userInfo);
        localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
        localStorage.setItem(STORAGE_KEYS.nickName, data.userLoginDTO.nickName);
        navigate(ROUTER_PATHS.TARGET);
      } catch (error) {
        //TODO : 에러 처리
        console.log(error);
      }
    } else {
      try {
        const data = await signUpMutateAsync(userInfo);
        localStorage.setItem(STORAGE_KEYS.accessToken, data.accessToken);
        localStorage.setItem(STORAGE_KEYS.nickName, data.userLoginDTO.nickName);
        // TODO : 회원가입 후 어디로 보낼지 고민하여 구현
        navigate(ROUTER_PATHS.TARGET);
      } catch (error) {
        //TODO : 404 및 500 에러 처리
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col  items-center mb-8 p-3 gap-10">
        <img
          src={IMAGE_MAP.logoImage}
          alt="로고"
          className="w-4/5 pointer-events-none"
        />
      </div>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col w-3/4 desktop:w-2/3 bg-white rounded-md"
      >
        <section className="w-full">
          <div className="mb-8">
            <AuthInput
              name={EMAIL_INPUT.name}
              text={userInfo.email}
              placeholder={EMAIL_INPUT.placeholder}
              userInfo={userInfo}
              dispatch={dispatch}
            />
            {!emailValid && <Validation>{ValidationAuth.email}</Validation>}
          </div>
          <div className="mb-8">
            <AuthInput
              name={
                isPasswordShown
                  ? PASSWORD_VISIBLE_INPUT.name
                  : PASSWORD_INPUT.name
              }
              text={userInfo.password}
              placeholder={PASSWORD_INPUT.placeholder}
              userInfo={userInfo}
              dispatch={dispatch}
              isPasswordShown={isPasswordShown}
              updateIsPassWordShown={updateIsPassWordShown}
            />
            {!passwordValid && (
              <Validation>{ValidationAuth.password}</Validation>
            )}
          </div>
          {!isLogin && (
            <div className="mb-8">
              <AuthInput
                name={NICKNAME_INPUT.name}
                text={userInfo.nickName}
                placeholder={NICKNAME_INPUT.placeholder}
                userInfo={userInfo}
                dispatch={dispatch}
              />
              {!nickNameValid && (
                <Validation>{ValidationAuth.nickName}</Validation>
              )}
            </div>
          )}
          <StyledButton styleName="login" type="submit" disable={isActive}>
            {name}
          </StyledButton>
        </section>
        <StyledButton
          styleName="signInAndUp"
          type="button"
          onClick={() => navigate(url)}
        >
          {isLogin ? "회원가입" : "로그인"}하러 가기
        </StyledButton>

        <Link
          to={url}
          className="text-sm text-mainHover self-center mt-8 hover:text-main ease-in duration-100"
        ></Link>
        {message && <Warnning message={message} />}
      </form>
    </>
  );
}
