import {
	IAppContext,
	EntityId,
	EntityRef
} from 'types/cordium';

export interface IProfile extends EntityRef {
	imageUri?: string;
	firstName: string;
	lastName: string;
	twoFactorEnabled?: boolean;
	hasActiveTwoFactorDevice?: boolean;
}
