import { writable } from 'svelte/store';
import type { GameExport } from '../types';
import type { SaveInfo, SaveList, SaveType } from './types';

const autoKey = 'realmMart-auto-0-';
const manualKey = 'realmMart-manual-';

let saveList: SaveList = {};
export const saveListStore = writable(saveList);

export function saveGame(game: GameExport, autoSave = true, manualID?: number) {
	let saveKey = autoSave ? autoKey : manualKey;
	let oldAutoKey: string = '';

	if (autoSave && saveList.autoSaveInfo) oldAutoKey = saveList.autoSaveInfo.saveKey;

	if (!autoSave) {
		if (manualID) {
			saveKey += manualID.toString() + '-';
		} else {
			let higestID = 0;
			if (saveList.manualSaveInfo) {
				for (let i = 0; i < saveList.manualSaveInfo.length; i++) {
					if (saveList.manualSaveInfo[i].id > higestID) higestID = saveList.manualSaveInfo[i].id;
				}
			}
			saveKey += (higestID + 1).toString() + '-';
		}
	}
	saveKey += Date.now().toString();
	writeToLocalStorage(saveKey, game);
	deleteSave(oldAutoKey);
}

export function deleteSave(saveKey: string) {
	localStorage.removeItem(saveKey);
	updateSaveList();
}

export function loadGame(loadKey?: string): GameExport | undefined {
	updateSaveList();

	let saveStr: string | null = '';

	if (!loadKey) {
		loadKey = '';
		let higestDate = 0;
		if (saveList.autoSaveInfo) {
			loadKey = saveList.autoSaveInfo.saveKey;
			higestDate = saveList.autoSaveInfo.date;
		}
		if (saveList.manualSaveInfo) {
			saveList.manualSaveInfo.forEach((manualSave) => {
				if (manualSave.date > higestDate) {
					higestDate = manualSave.date;
					loadKey = manualSave.saveKey;
				}
			});
		}
	}

	saveStr = localStorage.getItem(loadKey);

	if (saveStr) {
		return JSON.parse(atob(saveStr));
	}

	return undefined;
}

export function getSaveList(): SaveList {
	const result: SaveList = {};

	Object.entries(localStorage).forEach((storageItem) => {
		const storageKey = storageItem[0];
		if (storageKey.includes(autoKey)) {
			result.autoSaveInfo = parseSaveKeyString(storageKey);
		} else if (storageKey.includes(manualKey)) {
			result.manualSaveInfo = result.manualSaveInfo
				? [...result.manualSaveInfo, parseSaveKeyString(storageKey)]
				: [parseSaveKeyString(storageKey)];
		}
	});

	return result;
}

function writeToLocalStorage(key: string, data: object) {
	localStorage.setItem(key, btoa(JSON.stringify(data)));
}

function parseSaveKeyString(saveKeyStr: string): SaveInfo {
	const keyAttribs = saveKeyStr.split('-');
	const result: SaveInfo = { saveKey: saveKeyStr, saveType: 'auto', id: 0, date: 0 };

	result.saveType = keyAttribs[1] as SaveType;
	result.id = Number(keyAttribs[2]);
	result.date = Number(keyAttribs[3]);

	return result;
}

function updateSaveList() {
	saveList = getSaveList();

	saveList.manualSaveInfo?.sort((a, b) => a.id - b.id);
	saveListStore.set(saveList);
}
