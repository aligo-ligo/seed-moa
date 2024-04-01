import { ActionType, UserInfoType } from "@/types/AuthType";

export const ACTION_CONST = {
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
  SET_NICKNAME: "SET_NICKNAME",
} as const;

export const authReducer = (state: UserInfoType, action: ActionType) => {
  switch (action.type) {
    case ACTION_CONST.SET_EMAIL: {
      const email = action.data;
      const emailValid = email.includes("@") && email.length >= 3;

      return { ...state, email, emailValid };
    }
    case ACTION_CONST.SET_PASSWORD: {
      const password = action.data;
      const passwordValid = password.length >= 8;
      return { ...state, password, passwordValid };
    }
    case ACTION_CONST.SET_NICKNAME: {
      const nickName = action.data;
      const nickNameValid = nickName.length >= 3 && nickName.length < 11;
      return { ...state, nickName, nickNameValid };
    }
    default:
      throw new Error("Unknown Action");
  }
};

export const initialState: UserInfoType = {
  email: "",
  password: "",
  nickName: "",
  emailValid: true,
  passwordValid: true,
  nickNameValid: true,
};
