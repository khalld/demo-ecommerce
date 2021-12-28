<script>
	import { cart } from '../../lib/js/store.js';
    export let obj;

	function deletefromCart(){

		// TODO

		console.log(obj.id)
		var currentCart = [];

		cart.subscribe((cart) => {
			currentCart = cart.products;
		});

		const index = currentCart.indexOf(obj.id);
		if (index > -1) {
			currentCart = currentCart.splice(index, 1);
		}

		console.log("before set");
		console.log(currentCart);

		cart.set({products: currentCart, amount: 0.0})
	}

</script>

<div class="card mb-3 mb-lg-0">
	<div class="card-body">
		<div class="d-flex justify-content-between">
			<div class="d-flex flex-row align-items-center">
				<div>
					<img
						src="{obj.image}"
						class="img-fluid rounded-3"
						alt="Shopping item"
						style="width: 65px;"
					/>
				</div>
				<div class="ms-3">
					<h5>{obj.title}</h5>
					<p class="small mb-0">{obj.category}</p>
				</div>
			</div>
			<div class="d-flex flex-row align-items-center">
				<div style="width: 50px;">
					<h5 class="fw-normal mb-0">1</h5>
				</div>
				<div style="width: 80px;">
					<h5 class="mb-0">{obj.price}</h5>
				</div>
				<i class="fas fa-trash-alt" on:click={deletefromCart}/>
			</div>
		</div>
	</div>
</div>