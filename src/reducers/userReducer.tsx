const initialState = {
 
};

const userProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;