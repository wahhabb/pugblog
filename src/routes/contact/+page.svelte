<script lang="ts">
	import { enhance } from '$app/forms';
	let loading = false;
	let success = false;
	let error = '';

	function handleSubmit() {
		loading = true;
		error = '';
		success = false;
	}
</script>

<div class="container">
	<h1>Contact Us</h1>
	<p>You can also send me email at the email address listed on my github account (wahhabb).
</p>

	{#if success}
		<div class="success-message">
			Your message has been sent successfully!
		</div>
	{/if}

	{#if error}
		<div class="error-message">
			Error: {error}
		</div>
	{/if}

	<form
		method="POST"
		use:enhance={() => {
			handleSubmit();
			return async ({ result }) => {
				loading = false;
				if (result.type === 'success') {
					success = true;
					error = '';
				} else if (result.type === 'error') {
					error = result.error?.message || 'Failed to send message';
				}
			};
		}}
	>
		<div class="form-group">
			<label for="name">First Name: *</label>
			<input type="text" id="first-name" name="first-name" />
		</div>

		<div class="form-group">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required />
		</div>

		<div class="form-group">
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required />
		</div>

		<div class="form-group">
			<label for="message">Message:</label>
			<textarea id="message" name="message" rows="6" required></textarea>
		</div>

		<button type="submit" disabled={loading}>
			{loading ? 'Sending...' : 'Send Message'}
		</button>
	</form>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	h1 {
		color: #333;
		margin-bottom: 0.5rem;
	}

	p {
		color: #666;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group:nth-child(1) {
		z-index:-1;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
		color: #333;
		font-weight: 600;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		font-family: inherit;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #0066cc;
		box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
	}

	button {
		background-color: #0066cc;
		color: white;
		padding: 0.75rem 2rem;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover:not(:disabled) {
		background-color: #0052a3;
	}

	button:disabled {
		background-color: #999;
		cursor: not-allowed;
	}

	.success-message {
		background-color: #d4edda;
		color: #155724;
		padding: 1rem;
		border-radius: 4px;
		margin-bottom: 1.5rem;
		border: 1px solid #c3e6cb;
	}

	.error-message {
		background-color: #f8d7da;
		color: #721c24;
		padding: 1rem;
		border-radius: 4px;
		margin-bottom: 1.5rem;
		border: 1px solid #f5c6cb;
	}
</style>
