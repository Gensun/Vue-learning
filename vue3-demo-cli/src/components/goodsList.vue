<template>
	<div name='list'>
		<ul class='goods'>
			<li v-for="(item, index) in lists" v-bind:key="index">
				<img v-bind:src="item.img" />
				<p>{{ item.goodsName }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			var _this = this
			console.log(_this.goodId)
			var url = ''
			if (_this.goodId == '笔记本1') {
				url = 'json/bjb.json'
			} else if (_this.goodId == '笔记本2') {
				url = 'json/sj.json'
			} else {
				url = 'json/bjb.json'
			}
			this.$http.get(url).then((res) => {
				console.log(res)
				_this.lists = res.data
			})
			return {
				lists: []
			}
		},
		props: {
			goodId: String
		},
		watch: {
			goodId() {
				var _this = this
				console.log(_this.goodId)

				var url = ''
				if (_this.goodId == '笔记本1') {
					url = 'json/bjb.json'
				} else if (_this.goodId == '笔记本2') {
					url = 'json/sj.json'
				} else {
					url = 'json/bjb.json'
				}
				this.$http.get(url).then((res) => {
					console.log(res)
					_this.lists = res.data
				})

				return {
					lists: []
				}
			}
		}
	}
</script>

<style>
	.goods li {
		width: 200px;
		height: 200px;
		list-style: none;
		float: left;
		font-size: 14px;
		margin-right: 20px;
		color: #FF0000;
	}

	.goods img {
		width: 150px;
		height: 150px;

	}
</style>
