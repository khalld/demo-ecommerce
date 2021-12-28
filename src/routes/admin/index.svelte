<script>
	import { onMount } from 'svelte';
	
	let users = [];

	onMount(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		users = await response.json();
	});

	// $: console.log(users)
</script>

<div class="container-fluid">
	<div class="row">
		<h2>Dashboard</h2>

		<!-- TODO create searchbar compoenent -->
		<div class="input-group flex-nowrap">
			<span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i></span>
			<input type="text" class="form-control" placeholder="Search..." aria-describedby="addon-wrapping">
		</div>

<!-- TODO create table compoenent -->
		<div class="table-responsive mt-2">
			<table class="table table-striped table-sm">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Username</th>
						<th scope="col">Email</th>
						<th scope="col">Edit</th>
					</tr>
				</thead>
				<tbody>


					{#if users.length == 0}
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
					{:else}
						{#each users as u}
						<tr>
							<td>{u.id}</td>
							<td>{u.name}</td>
							<td>{u.username}</td>
							<td>{u.email}</td>
							<td><i class="fas fa-edit"></i> <i class="fa fa-trash" aria-hidden="true"></i>							</td>
						</tr>
						{/each}
					{/if}


				</tbody>
			</table>
		</div>
	</div>
</div>
