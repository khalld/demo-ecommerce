<script>
	import { userStore } from '../store.js';
	import { onMount } from 'svelte';

	console.log($userStore);

	if (!$userStore.loggedIn) {
		console.log('devi implementare redirect..');
		// goto("/login")
	}
</script>