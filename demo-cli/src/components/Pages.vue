<template>
	<div class="container">
		<header>
			<slot name="header">...header</slot>
		</header>
		<main>
			<slot>...body</slot>
			<slot name="message"></slot>
		</main>
		<footer>
			<slot name="footer">...footer</slot>
		</footer>
	</div>
</template>

<script>
</script>

<style>
	.container{
		border: 1px solid #2C3E50;
		margin-top: 1.25rem;
		padding: 5px 5px;
	}
</style>
