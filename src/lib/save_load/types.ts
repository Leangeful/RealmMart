export type SaveType = 'auto' | 'manual';

export interface SaveInfo {
	saveKey: string;
	saveType: SaveType;
	id: number;
	date: number;
}

export interface SaveList {
	autoSaveInfo?: SaveInfo;
	manualSaveInfo?: SaveInfo[];
}
