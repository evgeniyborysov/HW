const initState = {
	themeId: 1,
};

type InitState = {
	themeId: number;
};

type ChangeThemeIdACType = {
	type: "SET_THEME_ID";
	id: number;
};

export const themeReducer = (
	state = initState,
	action: ChangeThemeIdACType
): InitState => {
	// fix any
	switch (action.type) {
		// дописать
		case "SET_THEME_ID": {
			return { ...state, themeId: action.id };
		}
		default:
			return state;
	}
};

export const changeThemeIdAC = (id: number): ChangeThemeIdACType => ({
	type: "SET_THEME_ID",
	id,
}); // fix any
