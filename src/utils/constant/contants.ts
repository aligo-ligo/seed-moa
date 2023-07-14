import * as yup from "yup";

export const QueryClientOptions = {
	defaultOptions: {
		queries: {
			staleTime: 5000,
			refetchOnWindowFocus: false,
		},
	},
};

export const ValidationAuth = {
	email: "올바른 이메일 주소를 입력해주세요",
	password: "영문+숫자 조합 8자리 이상 입력해주세요",
	nickName: "3~10자로 입력해주세요",
	submit: "존재하지 않는 계정이에요",
};

export const EMAIL_INPUT = {
	name: "EMAIL",
	placeholder: "example@aligo.com",
} as const;

export const PASSWORD_INPUT = {
	name: "PASSWORD",
	placeholder: "영문+숫자 조합 8자리 이상 입력해주세요",
} as const;

export const NICKNAME_INPUT = {
	name: "NICKNAME",
	placeholder: "닉네임을 입력해주세요",
} as const;

export const validationSchema = yup.object({
	goal: yup.string().required("Required"),
	subGoal: yup.string().required("Required"),
	routine: yup.string().required("Required"),
});

// 로컬 스토리지
export const ACCESS_TOKEN = "accessToken";
export const USER_ID = "userId";
export const NICK_NAME = "userNickName";
export const IS_LOGGED_IN = "isLoggedIn";

// auth url
export const SIGN_IN_URL = "/signin";
export const SIGN_UP_URL = "/signup";

// 이미지
import hero from "../../assets/logo/hero.jpeg";
import logo from "../../assets/logo/logo.png";
import oli from "../../assets/logo/oli.png";
import oliBody from "../../assets/logo/oliBody.png";
import loudOli from "../../assets/logo/louderOli.png";
import louderOli from "../../assets/logo/loudOli.png";

export const heroImage = hero;
export const LogoImage = logo;
export const OliImage = oli;
export const OliBodyImage = oliBody;
export const LoudOli = loudOli;
export const LouderOli = louderOli;

export const GOAL_TITLE = "최종 목표를 적어주세요";
export const GOAL_DESCRIPTION = "대목표를 작성해주시면 좋아요.";

export const SUBGOAL_TITLE = "최종 목표를 위한 하위 목표와 루틴을 작성해주세요";
export const SUBGOAL_DESCRIPTION =
	"우리의 목표는 즉시 달성하기 어렵기 때문에 하위 목표를 세우고 루틴을 만든다면 목표를 달성하는데 도움이 될거예요";

export const DURATION_TITLE = "언제까지 목표를 달성하기 위해 노력하실건가요?";
export const DURATION_DESCRIPTION =
	"마감일은 언제나 우리에게 긴장감을 주죠. 하지만 너무 부담 갖지 않아도 돼요";

// export const PENALTY_TITLE = "혹시나 ";
// export const PENALTY_DESCRIPTION = "대목표를 작성해주시면 좋아요.";

export const LAST_TITLE = "최종 확인";
export const LAST_DESCRIPTION =
	"목표를 달성하기 위해 하위 목표 그리고 루틴을 세웠어요. 아래의 정보를 확인하시고 변경하고자 하시면 이전 버튼으로 누르시면 돼요";
