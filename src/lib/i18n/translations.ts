import lang from './lang.json';

export default {
	en: {
		lang,
		nav: {
			start: 'Main',
			settings: 'Settings'
		},
		content: {
			title: 'Welcome to SvelteKit',
			info: 'You can now access all your language mutations using <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
			text: 'Visit <a href="{{link}}">kit.svelte.dev</a> to read the documentation'
		}
	},
	de: {
		lang,
		nav: {
			start: 'Start',
			settings: 'Einstellungen'
		},
		content: {
			title: 'Willkommen SvelteKit',
			info: 'You can now access all your language mutations using <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
			text: 'Visit <a href="{{link}}">kit.svelte.dev</a> to read the documentation'
		}
	}
};

/* export default {
	en: {
		common: {
			Key: 'Blah',
			Hello: 'Hello',
			Start: 'Start by exploring'
		}
	},
	de: {
		common: {
			Hello: 'Hallo',
			Start: 'Fange an zu erkunden'
		}
	}
}; */
