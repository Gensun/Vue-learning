<template>
	<div>
		<p class="selected">热门推荐</p>
		<ul>
			<LeftItem v-for="(item ,index) in lists" :key='index' v-bind:item='item' v-on:show='show'> </LeftItem>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import LeftItem from './LeftItem.vue'	

	export default {
		data() {
			return {
				lists: ['笔记本', '笔记本', '笔记本']
			};
		},
		components: {
			LeftItem
		},
		methods: {
			show:function(e) {
				console.log(e)
				this.Eventdemo.$emit('val',e)
			}
		}
	}
</script>

<style scoped>
	.selected {
		color: red;
	}

	ul {
		padding-left: 0px;
	}
</style>
