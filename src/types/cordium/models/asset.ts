import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface IAssetBase {
	assetId?: EntityId;
	contentType: string;
	uploadedTimestamp: string | null;
	name: string;
	friendlyName: string;
	file: number[] | null;
	isDisposable: boolean;
	hash: string;
	description: string;
}

export interface IAsset extends EntityRef, IAssetBase {}

export interface IAssetInput extends IAssetBase, IAppContext {
	id?: EntityId;
}

export interface IAssetAssocMutator {
	assetToAdd: EntityId[];
	assetToRemove: EntityId[];
}
