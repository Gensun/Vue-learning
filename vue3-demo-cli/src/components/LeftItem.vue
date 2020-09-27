<template>

	<p @click="$emit('show' , item)">{{ item }}</p>

</template>

<script>
	export default {
		name: 'LefItem',
		props: {
			item: String
		}
	}
</script>

<style scoped>
	p {
		cursor: pointer;
		border-bottom: 1px solid lavender;
		margin-bottom: 2px;
		line-height: 50px;
		list-style: none;
		height: 50px;
	}
</style>
