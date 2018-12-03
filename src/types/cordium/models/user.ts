import {
	IAppContext,
	EntityId,
	EntityRef,
	IProfile
} from 'types/cordium';

export interface IUserBase {
	userId?: EntityId;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	active: boolean;
}

export interface IUser extends IProfile, IUserBase {
	visas: Cordium.EntityId[];
}

export interface IUserInput extends IUserBase {
	id?: EntityId;
	userId: EntityId;
}

export interface IZendeskToken {
	name: string; // first + last name (display name)
	email: string;
	external_id: string; // username
	jti: Cordium.EntityId; // uuid
	iat: number; // utc timestamp
}

export enum EmailFrequencyType {
	NONE = 0,
	HOURLY = 1,
	TWICE_DAILY = 12,
	ONCE_DAILY = 24
}
