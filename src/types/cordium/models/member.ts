import {
	IAppContext,
	EntityId,
	IProfile
} from 'types/cordium';

export interface IMember extends IProfile, Cordium.ITextSearch {
	memberId?: EntityId;
	type?: number;
	isMe: boolean;
	value: string;
}
