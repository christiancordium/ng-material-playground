import {
	IAppContext,
	AppContextType,
	EntityId,
	EntityRef,
	ISource
} from 'types/cordium';

export interface IPassageBase {
	passageId?: EntityId;
	content: string;
}

export interface IPassage extends IPassageBase, EntityRef {
	isMe: boolean;
	visas: Cordium.EntityId[];
	timestamp: string;
}

export interface IPassageInput extends IPassageBase, ISource {};
