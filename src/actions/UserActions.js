import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/User';

export function handleLogin() {
	return (dispatch) => {
		dispatch({
			type: LOGIN_REQUEST
		});

		setTimeout(() => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: 'snake'
			});
		}, 3000);
	};
}