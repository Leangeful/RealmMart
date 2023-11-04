import type { RessourceExport } from './types';

export class Ressource implements RessourceExport {
	amount: number;
	income: number;

	constructor(amount?: number, income?: number) {
		this.amount = amount ?? 0;
		this.income = income ?? 0;
	}

	process(deltaT: number) {
		this.amount += this.income / (1000 / deltaT);
	}

	getExportedProps(): RessourceExport {
		return { amount: this.amount, income: this.income };
	}
	setExportedProps(obj: RessourceExport) {
		this.amount = obj.amount;
		this.income = obj.income;
	}
}
