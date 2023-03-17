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
					return a.name.localeCompare(b.name);
				});
			}
			if (action.payload === "down") {
				copyState = copyState.sort(function (a, b) {
					return b.name.localeCompare(a.name);
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
