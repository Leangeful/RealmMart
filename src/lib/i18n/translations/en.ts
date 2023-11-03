import lang from '../lang.json';
export const en = {
	lang,
	nav: {
		start: 'Main',
		settings: 'Settings'
	},
	content: {
		title: 'Welcome to SvelteKit',
		info: 'You can now access all your language mutations using <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
		text: 'Visit <a class="text-secondary-700 hover:text-secondary-300" href="{{link}}">kit.svelte.dev</a> to read the documentation'
	},
	settings: {
		tickspeed: 'tickspeed',
		language: 'language'
	},
	save: {
		select: 'select',
		load: 'load',
		delete: 'delete',
		save_game: 'save now'
	}
};
