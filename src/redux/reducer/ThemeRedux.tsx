const types = {
  DARK_THEME: 'DARK_THEME',
};

export const actions = {
  setDarkTheme: (dispatch: any, status: any) =>
    dispatch({type: types.DARK_THEME, isDark: status}),
};

const initialState = {
  isDark: false,
};

export const reducer = (state = initialState, action: any) => {
  const {type, isDark} = action;
  switch (type) {
    case types.DARK_THEME:
      return {...state, isDark};

    default:
      return state;
  }
};
