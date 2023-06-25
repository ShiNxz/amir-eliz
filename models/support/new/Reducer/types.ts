export enum ACTIONS {
	SET_VALUE,
	SET_LOADING,
	SET_TOPIC,
}

export interface IInputState {
	value: string
	status: InputStatusType
	error: string | null
}

export interface IReducerState {
	loading: boolean

	name: IInputState
	email: IInputState
	topic: string
	message: IInputState

	[key: string]: any
}

export interface IAction {
	type: ACTIONS
	payload: any | null
}
