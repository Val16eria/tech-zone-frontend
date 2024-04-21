interface IStatus {
	status: string;
}

interface IEmail {
	email: string;
}

interface IAuthentication {
	identifier: string;
	code: number;
}

interface ITokens {
	token_access: string;
	token_refresh: string;
}

export type {
	IStatus,
	IEmail,
	IAuthentication,
	ITokens
};
