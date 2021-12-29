<script>
	import Searchbar from '$lib/component/Searchbar.svelte';
	import Table from '$lib/component/Table.svelte';
	import TableElement from '$lib/component/TableElement.svelte';
	import { onMount } from 'svelte';
	import { userStore } from '../lib/js/store';
	import { goto } from '$app/navigation';

	let users = [];

	onMount(async () => {
		if ($userStore.user.role !== "admin"){
			goto("/");
		}

		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		users = await response.json();
	});

</script>

<div class="container-fluid">
	<div class="row">
		<h2>Dashboard</h2>

		<Searchbar />

		<Table>
			{#if users.length == 0}
				<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			{:else}
				{#each users as u}
					<TableElement {u}/>
				{/each}
			{/if}
		</Table>
	</div>
</div>
