<script>
	import { onMount } from 'svelte';
  import { page } from '$app/stores'
import ProductCardDetail from '$lib/component/ProductCardDetail.svelte';

  const id = $page.params.id;

	let product = null;
	onMount(async () => {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		product = await response.json();
		console.log(product);
        console.log(product != null);

	});

	// https://fakestoreapi.com/products/
</script>

{#if !product}
	<div class="spinner-border" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
{:else}
<ProductCardDetail product={product} />

  {/if}