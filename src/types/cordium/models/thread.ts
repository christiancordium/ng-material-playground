import {
	IAppContext,
	EntityId,
	EntityRef,
	ISource,
	IPassage
} from 'types/cordium';

export interface IThreadBase {
	threadId?: EntityId;
	name: string;
	description: string;
	type?: any;
}

export interface IThread extends IThreadBase, EntityRef {
	passages: IPassage[];
}

export interface IThreadInput extends IThreadBase, ISource {};
