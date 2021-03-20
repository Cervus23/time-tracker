import {
  SET_CURRENT_NAME,
  CLEAR_CURRENT_NAME,
  TRIGGER_CREATE,
  CREATE_TRACKER,
} from "./actions";

const initialState = {
  trackers: [],
  currentName: "",
  isCreate: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_NAME: {
      return { ...state, currentName: payload };
    }
    case CLEAR_CURRENT_NAME: {
      return { ...state, currentName: "" };
    }
    case TRIGGER_CREATE: {
      return { ...state, isCreate: !state.isCreate };
    }
    case CREATE_TRACKER: {
      state.trackers.push({ name: payload.name, time: payload.time });

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default reducer;
