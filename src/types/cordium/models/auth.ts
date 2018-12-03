import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface ITokenResponse {
	token: string | null;
	tokenSubject: TokenSubject,
	createdTime: string;
	expiryTime: string;
	webTokenId: EntityId;
}

export interface IAuthUser {
	username: string;
	password: string;
	lookupSecret: string | null;
	actor: IActor;
	apiKey: string;
}

export interface IActor {
	referrer: string;
}

export interface IHashBrown {
	hash: string;
	actor: IActor;
	apiKey: string;
}

export interface ILookUpSecret {
	lookUpSecret: string;
}

export interface IDeviceSecret extends ILookUpSecret {
	deviceId: EntityId;
}

export interface ISetPasswordRequest {
	newPassword: string;
}

export interface IChangePasswordRequest {
	oldPassword: string;
	newPassword: string;
}

export interface IAuthSettings {
	twoFactorEnabled: boolean;
}

export interface ITwoFactorCodeResponse {
	oneTimePasswordId: EntityId;
	type: TokenCodeType;
	description: string;
	uri: string;
}

export interface IForgotPasswordRequest {
	username: string;
	lookupSecret: string;
	actor: Cordium.IActor;
}

export enum AuthorizationStatus {
	INVALID = -1,
	NEEDS_AUTHORIZATION = 0,
	AUTHORIZED = 1,
	NEEDS_VISA = 2,
	NEEDS_MFA = 3,
	NEEDS_SET_PASSWORD = 4,
	NEEDS_SET_MFA = 5,
	VIEW_RECOVERY_CODES = 6,
	FORGOT_PASS_MFA = 7,
	RESET_PASSWORD = 8,
	FORGOT_PASSWORD = 10
}

export enum AuthGuardTypes {
	LOGIN = 'LOGIN',
	PILOT = 'PILOT',
	ZEUS = 'ZEUS',
	VISA = 'VISA',
	MFA = 'MFA',
	ACTIVATE = 'ACTIVATE',
	ACTIVATEMFA = 'ACTIVATEMFA',
	PRIVACY = 'PRIVACY',
	VIEW_RECOVERY_CODES = 'RECOVERY_CODES',
	SELF_SERVICE = 'SELF_SERVICE'
}

export enum TokenCodeType {
	RECOVERY = 0,
	DEVICE = 1
}

export enum TokenSubject {
	INVALID = 0,
	AUTHORIZED = 1,
	USER_ACTIVATION = 2,
	USER_FORGOT_PASSWORD = 3,
	DIRECT_PASSWORD_RESET = 4,
	SELECT_VISA = 5
}

export enum ActivationStage {
	INITIAL = 0,
	SET_PASSWORD = 1,
	ENABLE_MFA_DEVICE = 2,
	SETUP_MFA_DEVICE = 3,
	VIEW_RECOVERY_CODES = 4
}
