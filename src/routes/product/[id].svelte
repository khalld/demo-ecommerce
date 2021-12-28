<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ProductCardDetail from '$lib/component/ProductCardDetail.svelte';
	import { cart } from '../../lib/js/store.js';

	const id = $page.params.id;

	let product = null;

	onMount(async () => {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		product = await response.json();
	});

	function addToCart () {
		var currentCart = [];
		cart.subscribe((cart) => {
			currentCart = cart.products;
		});
		currentCart.push(product);
		cart.set({products: currentCart, amount: 0.0})
	}

	// https://fakestoreapi.com/products/
</script>

{#if !product}
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
{:else}
	<ProductCardDetail product={product} addToCart={addToCart()} />
{/if}