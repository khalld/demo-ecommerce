<script>
    import { onMount } from 'svelte';
	import { cart } from '../../lib/js/store.js';

    var currentCart = [];

    onMount(async () => {
		cart.subscribe((cart) => {
			currentCart = cart.products;
		});
        console.log(currentCart)

	});


</script>


{#if $cart.products.length == 0}
	<p>No cart</p>
{:else}
    {#each $cart.products as elem }
        <p>{elem.title}</p>
    {/each}

{/if}