import { writable } from 'svelte/store';

export const userStore = writable({ loggedIn: false, user: {} });

export const cart = writable({products: [], amount: 0.0})