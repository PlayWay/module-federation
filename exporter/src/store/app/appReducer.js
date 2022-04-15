import {HIDE_LOADING, INIT_APP, SHOW_LOADING, UPDATE_PROGRESS_LOADING} from "./actionTypes";
const initialState = {
	loading: {
		status: false,
		percentProgress: 0,
    message: 'Загрузка...'
	},
	init_data: {
		data: {},
		control_input:{
			id: "3_26302",
			value:"VALUE"
		}
	}
}

export const appReducer = (state=initialState, action)=> {
	switch (action.type) {
		case INIT_APP:
			return {...state,init_data: action.payload}
		case SHOW_LOADING:
			return {...state, loading: {...state.loading,status: true,message:action.payload}}
		case HIDE_LOADING:
			return {...state, loading: {...state.loading,status: false}}
		case UPDATE_PROGRESS_LOADING:
			return {...state, loading: {...state.loading,percentProgress: action.payload}}
		default: return state
	}
}
