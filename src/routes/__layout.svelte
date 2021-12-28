<script>
import Footer from '$lib/component/Footer.svelte';
import Navbar from '../lib/component/Navbar.svelte';
import { page } from '$app/stores';
</script>

<Navbar />

{#if $page.path !== '/admin'}
<div class="my-3 mx-3">
    <slot></slot>
</div>
{:else}
    <slot></slot>
{/if}
<!-- <Footer /> -->