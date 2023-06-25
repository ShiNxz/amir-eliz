'use client'

import CheckInput from './checks'
import { ACTIONS } from './types'
import type { IAction, IInputState, IReducerState } from './types'
import ContactTopics from '@/utils/data/ContactForms/Types'

const initInputState: IInputState = {
	value: '',
	status: -1,
	error: null,
}

export const initialState: IReducerState = {
	loading: false,
	name: initInputState,
	email: initInputState,
	topic: ContactTopics[0],
	message: initInputState,
}

const Reducer = (state: IReducerState, action: IAction): IReducerState => {
	switch (action.type) {
		case ACTIONS.SET_VALUE: {
			const { key, value } = action.payload
			const check = CheckInput(key, value)

			return { ...state, [key]: check }
		}

		case ACTIONS.SET_TOPIC: {
			const { payload } = action
			return { ...state, topic: payload }
		}

		case ACTIONS.SET_LOADING: {
			const { payload } = action as { payload: boolean }
			return { ...state, loading: payload }
		}
	}
}

export default Reducer
