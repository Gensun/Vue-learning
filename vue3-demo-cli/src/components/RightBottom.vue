<template>
	<div>
		<Goods :goodId='kk'/>
	</div>

</template>

<script type="text/javascript">
	import Msg from '../assets/msg.js'
	import Goods from './goodsList.vue'
	export default {
		data() {
			return {
				kk: ''
			}
		},
		components: {
			Goods
		},
		mounted: function() {
			var _this = this
			console.log('123')
			Msg.$on('val', (m) => {
				_this.kk = m
			})
		}
	}
</script>

<style>
</style>
