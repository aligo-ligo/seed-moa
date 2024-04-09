const ERROR_RESPONSES = {
    unknown: '알 수 없는 오류가 발생했습니다.',
    authenticationEntryPoint: '로그인이 필요한 요청 입니다.',
    accessExpired: 401,
    memberNotFound: '존재하지 않는 회원입니다.',
    accessDeniedLetter: '해당 편지에 접근할 수 없습니다.',
  } as const;
  
export default ERROR_RESPONSES;
  