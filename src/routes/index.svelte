<script>
	import { userStore } from '../lib/js/store.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		if (!$userStore.loggedIn) {
			console.log('devi implementare redirect..');
			goto('/login');
		}
	});
</script>

<div class="mx-3 my-3">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper mollis tincidunt.
		Praesent orci est, rhoncus a nunc ut, sollicitudin ullamcorper quam. Curabitur placerat feugiat
		leo, et porta risus tincidunt sed. Curabitur sollicitudin sit amet orci non porta. Curabitur
		cursus mollis egestas. Nulla lacinia ligula id libero eleifend, in sagittis dolor luctus.
		Integer libero magna, rutrum sed vehicula consequat, imperdiet vitae ligula. Mauris a ligula
		nunc. Ut lobortis lobortis nibh, ut vulputate urna porta a. Ut vel ligula mi. Proin mollis
		interdum justo, ut posuere ligula vestibulum non. Pellentesque ornare, velit sagittis congue
		pretium, leo felis fringilla libero, id consequat ante arcu sit amet arcu.
	</p>
</div>
