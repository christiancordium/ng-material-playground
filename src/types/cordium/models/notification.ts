import {
	IAppContext,
	AppContextType,
	EntityId,
	EntityRef,
	ISource
} from 'types/cordium';

export interface INotificationBase extends ISource {
	notificationId?: EntityId;
	content: string;
	isAcknowledged: boolean;
	sourceType: AppContextType;
}

export interface INotification extends INotificationBase, EntityRef {
	timestamp: string;
}

export interface INotificationInput extends INotificationBase {
	id?: EntityId;
};
