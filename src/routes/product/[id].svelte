<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { page } from '$app/stores'
import Checkout from '../cart/checkout.svelte';
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
<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={product.image} class="img-fluid rounded-start" alt={product.name}>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <p class="card-text"><small class="text-muted">{product.price}</small></p>
          <button class="btn btn-primary" on:click={() => console.log("TODO add in cart.Checkout.")}>Add in cart </button>
        </div>
      </div>
    </div>
  </div>
  {/if}