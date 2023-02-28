import { UserType } from "../HW8";

type ActionType =
	| { type: "sort"; payload: "up" | "down" }
	| { type: "check"; payload: number };

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case "sort": {
			let copyState = [...state];

			// by name
			if (action.payload === "up") {
				copyState = copyState.sort(function (a, b) {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
			}
			if (action.payload === "down") {
				copyState = copyState.sort(function (a, b) {
					if (a.name < b.name) {
						return 1;
					}
					if (a.name > b.name) {
						return -1;
					}
					return 0;
				});
			}

			return copyState; // need to fix
		}
		case "check": {
			let copyState = [...state];
			copyState = copyState.filter(
				(people) => people.age >= action.payload
			);
			return copyState; // need to fix
		}
		default:
			return state;
	}
};
