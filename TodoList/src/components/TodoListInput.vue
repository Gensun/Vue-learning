<template>
	<input placeholder="New todo" type="text" class="input" :value="value" v-on='listeners' />
</template>

<script>
	export default {
		props: {
			value: String,
			defalut: ''
		},
		computed: {
			listeners() {
				return {
					...this.$listeners,
					input: event => this.$emit('input', event.target.value)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './variables.scss';

	.input {
		width: 100%;
		padding: 8px 10px;
		border: 1px solid $vue-blue
	}
</style>
