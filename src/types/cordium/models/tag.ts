import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface ITagBase extends Cordium.ITextSearch {
	tagId?: EntityId;
	value: string;
}

export interface ITag extends EntityRef, ITagBase {}

export interface ITagInput extends ITagBase {
	id?: EntityId;
};

export interface ITagAssocMutator {
	tagsToAdd: EntityId[];
	tagsToRemove: EntityId[];
}
