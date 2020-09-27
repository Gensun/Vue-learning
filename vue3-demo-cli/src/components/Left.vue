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
	import Msg from '../assets/msg.js'

	export default {
		data() {
			return {
				lists: ['笔记本1', '笔记本2', '笔记本3','笔记本4','笔记本5']
			};
		},
		components: {
			LeftItem
		},
		methods: {
			show: function(e) {
				console.log('left' + e)
				Msg.$emit('val', e)
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
