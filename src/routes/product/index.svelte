<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { cart } from '../../lib/js/store.js';
	import ProductCardList from '../../lib/component/ProductCardList.svelte';
	
	let products = [];

	onMount(async () => {
		// const response = await fetch('https://swapi.dev/api/people/1');
		// const character = await response.json();
		// console.log(character)
		// characterName = character.name;

		const response = await fetch('https://fakestoreapi.com/products/');
		products = await response.json();
		// console.log(products);
		// console.log(products.length);
	});

	function addToCart (id) {
		var currentCart = [];
		cart.subscribe((cart) => {
			currentCart = cart.products;
		});
		currentCart.push(products.at(id));
		cart.set({products: currentCart, amount: 0.0})
	}

	// https://fakestoreapi.com/products/
</script>

{#if products.length == 0}
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
{:else}
		<div class="row row-cols-1 row-cols-md-2 g-4">
			{#each products as p}
				<div class="col">
					<!-- <div class="card">
						<img src={p.image} class="card-img-top " alt={p.name} style="max-width: 100%; height: auto; width: 150px;"/>
						<div class="card-body">
							<h5 class="card-title">{p.title}</h5>
							<p class="card-text">
								{p.description}
							</p>
							<button class="btn btn-success" on:click={() => goto(`/product/${p.id}`)} >Detail</button>
							<button class="btn btn-success" on:click={() => addToCart(p.id)} >Add to cart</button>

						</div>
					</div> -->
					<ProductCardList {p} addToCart={() => addToCart(p.id)}/>
				</div>
			{/each}
		</div>
{/if}
