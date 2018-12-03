import {
	ISource,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface INoteBase {
	noteId?: EntityId;
	note: string;
	type: NoteType;
}

export interface INote extends EntityRef, INoteBase {
	timestamp: string;
}

export interface INoteInput extends INoteBase, ISource {
	id?: EntityId;
}

export enum NoteType {
	GENERAL = 1,
	ACTION_ITEM = 2,
	EXCEPTION = 3
}
