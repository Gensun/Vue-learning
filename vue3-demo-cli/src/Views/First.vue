<template>
	<div class="home">
		<div class="left">
			<Left />
		</div>
		<div class="right">
			<div class="top">
				<img src='../../public/img/WX20200922-150054@2x.png' />
			</div>
			<Bottom />
		</div>
	</div>
</template>

<script type="text/javascript">
	import Left from '../components/Left.vue'	
	import Bottom from '../components/RightBottom.vue'
	
	export default {
		components: {
			Left,
			Bottom
		}
	}
</script>

<style type="text/css" scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.home {
		margin: 20px auto;
		width: 1200px;
	}

	.left {
		width: 100px;
		float: left;
		margin: 20px 20px;
	}

	.right {
		float: left;
		width: 1000px;
		margin: 20px 20px;
	}

	.top img {
		text-align: center;
		width: 1000px;
	}

	.left,
	.right {
		height: 500px;
		background-color: #f5f5f5;
	}
</style>
