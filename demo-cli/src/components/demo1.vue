<template>
	<div id="bind-attribute" class="demo">
		<span v-bind:title="message">
			Hover your mouse over me for a few seconds to see my dynamically-bound
			title!
		</span>
		<Pages>
			<template v-slot:header>
				<span>Header after</span>
			</template>
			<p>A paragraph for the main content.</p>
			<p>And another one.</p>
			<!-- <template v-slot:message>{{ message }}</template> -->
			<template #message>{{ message }}</template>
			<template v-slot:footer>
				<span>Footer after</span>
			</template>
		</Pages>
	</div>

</template>


<script>
	import Pages from './Pages.vue'
	export default {
		name: 'AttributeBinding',
		///1
		// data: function() {
		// 	return {
		// 		message: 'You loaded this page on ' + new Date().toLocaleString()
		// 	};
		// }
		///2
		data() {
			return {
				message: 'You loaded this page on ' + new Date().toLocaleString()
			}
		},
		components: {
			Pages
		}
	}
</script>

<style>
	.demo {
		font-family: sans-serif;
		border: 1px solid #eee;
		border-radius: 2px;
		padding: 20px 30px;
		margin-top: 1em;
		margin-bottom: 40px;
		user-select: none;
		overflow-x: auto;
	}
</style>
