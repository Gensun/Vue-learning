<template>
	<div>{{ kk }}</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				kk: 0
			}
		},
		mounted: function() {
			var _this = this
			console.log('123')
			this.Eventdemo.$on('val', (m) => 
			{
				_this.kk = m
			})
		}
	}
</script>

<style>
</style>
