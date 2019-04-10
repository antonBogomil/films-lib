export const API_LOGIN = '/user/login';
export const API_REGISTER = '/user/register';
export const API_AUTH = '/user/auth';
export const API_LOGOUT = '/user/logout';
export const API_GET_FILMS = '/film/all';


export const ERROR = {
	WRONG_LOGIN : 'You have entered an invalid username or password',
	USER_EXIST : 'User with this email already exist!',
	FATAL: 'Oops! Something went wrong...',
	SERVER_ERROR: '500 Internal Server Error ',
	PAGE_NOT_FOUND:' Page not found...'
};

export const DICTIONARY = {
	LOGIN: 'LOGIN',
	SEND: 'SEND'
};

export const FIELD = {
	TYPE: {
		PASSWORD: 'password',
		EMAIL: 'email',
		TEXT: 'text',
		NUMBER: 'number',
		DATE: 'date',
		FILE: 'file',
		TEL: 'tel'
	},
	PLACEHOLDER: {
		PASSWORD: 'mypassword',
		EMAIL: 'my-email@site.com',
		NAME: 'Will Smith',
	},
};
export const FORM = {
	ENTER_MESSAGE: 'Enter your ',
	CREATE_MESSAGE: 'Create your ',
	EXAMPLE: 'For example: '
};