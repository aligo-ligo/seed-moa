export const TOAST_MESSAGES = Object.freeze({
    LOGIN_SUCCESS: { type: 'default', text: '로그인 되었습니다' },
    LOGIN_FAIL: { type: 'warning', text: '로그인에 실패했습니다' },
  
    LOGOUT_SUCCESS: { type: 'default', text: '로그아웃 되었습니다' },
    LOGOUT_FAIL: { type: 'warning', text: '로그아웃에 실패했습니다' },
  
    SEED_DELETE_SUCCESS: { type: 'default', text: '씨앗 삭제가 완료되었습니다' },
    SEED_DELETE_FAIL: { type: 'warning', text: '씨앗 삭제에 실패했습니다' },
  
    SEED_CREATE_SUCCESS: { type: 'default', text: '새로운 씨앗을 만들었습니다.' },
    SEED_CREATE_FAIL: { type: 'warning', text: '새로운 씨앗 생성에 실패했습니다' },

    SEED_ROUTINE_CONTENT_MODIFY_SUCCESS: { type: 'default', text: '루틴 수정이 완료되었습니다' },
    SEED_ROUTINE_CONTENT_MODIFY_FAIL:{ type: 'warning', text: '루틴 수정에 실패했습니다' },

    SEED_ROUTINE_STATE_SUCCESS: { type: 'default', text: '루틴 체크 성공, 하루에 한번 체크가 가능합니다.' },
    SEED_ROUTINE_STATE_FAIL:{ type: 'warning', text: '루틴 체크에 실패했습니다' },
  
    LINK_COPIED: { type: 'default', text: '링크가 복사되었습니다' },
    LINK_COPIED_FAIL: { type: 'warning', text: '링크 복사가 되지 않았습니다' },
  
    ERROR: { type: 'warning', text: '잠시 후에 다시 시도해 주세요' },
  }) satisfies Record<string, { type: 'default' | 'warning'; text: string }>;
  