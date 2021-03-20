export const SET_CURRENT_NAME = "SET_CURRENT_NAME";
export const CLEAR_CURRENT_NAME = "CLEAR_CURRENT_NAME";
export const TRIGGER_CREATE = "TRIGGER_CREATE";
export const CREATE_TRACKER = "CREATE_TRACKER";

export const setCurrentName = (payload) => ({
  type: SET_CURRENT_NAME,
  payload,
});
export const clearCurrentName = () => ({ type: CLEAR_CURRENT_NAME });
export const triggerCreate = () => ({ type: TRIGGER_CREATE });
export const createTracker = (payload) => ({ type: CREATE_TRACKER, payload });
