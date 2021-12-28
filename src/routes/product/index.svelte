<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { cart } from '../../lib/js/store.js';
	import ProductCardList from '../../lib/component/ProductCardList.svelte';
	
	let products = [];

	onMount(async () => {
		const response = await fetch('https://fakestoreapi.com/products/');
		products = await response.json();
	});

	function addToCart (id) {
		var currentCart = [];
		cart.subscribe((cart) => {
			currentCart = cart.products;
		});
		currentCart.push(products.at(id));
		cart.set({products: currentCart, amount: 0.0})
	}
</script>

{#if products.length == 0}
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
{:else}
	<div class="row row-cols-1 row-cols-md-2 g-4">
		{#each products as p}
			<div class="col">
				<ProductCardList {p} addToCart={() => addToCart(p.id)}/>
			</div>
		{/each}
	</div>
{/if}
