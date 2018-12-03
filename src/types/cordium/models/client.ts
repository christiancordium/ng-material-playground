import {
	IAppContext,
	EntityId,
	EntityRef,
	ITagAssocMutator
} from 'types/cordium';

export interface IClientBase {
	clientId?: EntityId;
	name: string;
	timeZone: string;
	active: boolean;
}
export interface IClient extends EntityRef, IClientBase {}

export interface IClientInput extends IClientBase, ITagAssocMutator {
	id?: EntityId;
};
