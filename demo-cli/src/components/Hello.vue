<template lang="jade">
	div
	p {{ greeting }} Sun
</template>

<script>
	export default {
		data() {
			return {
				greeting: 'hello world'
			}
		}
		 
	}
</script>

<style lang="stylus" scoped>
	p
	 font-size 2em
	 text-align center
</style>
