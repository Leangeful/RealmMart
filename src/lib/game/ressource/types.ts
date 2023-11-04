export interface RessourceExport {
	amount: number;
	income: number;
}

export interface GoldExport extends RessourceExport {
	upgrade: number;
}
