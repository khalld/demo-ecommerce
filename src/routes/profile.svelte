<script>
	import { userStore } from '../lib/js/store';
</script>

<div class="container rounded bg-white mt-5 mb-5">
	<div class="row">
		<div class="col-md-3 border-right">
			<div class="d-flex flex-column align-items-center text-center p-3 py-5">
				<img
					alt="avatar"
					class="rounded-circle mt-5"
					width="150px"
					src="https://avatars.githubusercontent.com/u/37438774?v=4"
				/><span class="font-weight-bold">khalld</span><span class="text-black-50"
					>https://github.com/khalld</span
				><span />
			</div>
		</div>
		<div class="col border-right">
			<div class="p-3 py-5">
				<div class="d-flex justify-content-between align-items-center mb-3">
					<h4 class="text-right">Profile Settings</h4>
				</div>

				<div class="row my-3">
					<label for="email" class="form-label">Email</label>
					<input
						id="email"
						name="email"
						type="text"
						class="form-control"
						bind:value={$userStore.user.email}
					/>
				</div>

				<div class="row my-3">
					<label for="name" class="form-label">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						class="form-control"
						bind:value={$userStore.user.name}
					/>
				</div>
				<div class="row my-3">
					<label for="username" class="form-label">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						class="form-control"
						bind:value={$userStore.user.username}
					/>
				</div>

				<div class="d-grid my-3">
					<button class="btn btn-primary disabled" type="button">Save</button>
				</div>

				<div class="row my-3">
					<label for="role" class="form-label">Username</label>
					<input
						id="role"
						name="role"
						type="text"
						class="form-control"
						bind:value={$userStore.user.role}
					/>
					<div id="roleHelp" class="form-text">Change to something other than 'admin' to block the admin page from the navbar.</div>
				</div>

				<div class="d-grid my-3">
					<button class="btn btn-primary" type="button">Change role</button>
				</div>
			</div>
		</div>
	</div>
</div>
