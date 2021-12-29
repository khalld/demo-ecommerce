<script>
	import { onMount } from 'svelte';
	import { cart } from '../lib/js/store.js';
	import ProductCardCart from '../lib/component/ProductCardCart.svelte';

	var currentCart = [];

	const shipping = 5.00;

	onMount(async () => {
		cart.subscribe((cart) => {
			currentCart = cart.products;
		});
	});
</script>

{#if $cart.products.length == 0}
	<div class="alert alert-danger text-center" role="alert">Empty cart!</div>
{:else}
	<div class="container py-5 h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col">
				<div class="card">
					<div class="card-body p-4">
						<div class="row">
							<div class="col-lg-7">
								<div class="d-flex justify-content-between align-items-center mb-4">
									<div>
										<p class="mb-1">Shopping cart</p>
										<p class="mb-0">You have {$cart.products.length} items in your cart</p>
									</div>
									<!-- <div>
										<p class="mb-0">
											<span class="text-muted">Sort by:</span>
											<a href="#!" class="text-body">price <i class="fas fa-angle-down mt-1" /></a>
										</p>
									</div> -->
								</div>

								{#each $cart.products as elem}
									<ProductCardCart obj={elem} />
								{/each}
							</div>
							<div class="col-lg-5">
								<div class="card bg-primary text-white rounded-3 h-100">
									<div class="card-body">
										<div class="d-flex justify-content-between align-items-center mb-4">
											<h5 class="mb-0">Order details</h5>
										</div>


										<hr class="my-4" />

										<div class="d-flex justify-content-between">
											<p class="mb-2">Subtotal</p>
											<p class="mb-2">{$cart.amount} €</p>
										</div>

										<div class="d-flex justify-content-between">
											<p class="mb-2">Shipping</p>
											<p class="mb-2">{shipping} €</p>
										</div>

										<div class="d-flex justify-content-between mb-4">
											<p class="mb-2">Total (Incl. taxes)</p>
											<p class="mb-2">{$cart.amount + shipping} €</p>
										</div>

										<button type="button" class="btn btn-info btn-block btn-lg">
											<div class="d-flex justify-content-between">
												<span>Checkout</span>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
