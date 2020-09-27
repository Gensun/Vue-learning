<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" style="width: 10%; ">
		<h2>Todo List App</h2>
		<TodoList />
	</div>
</template>

<script>
	import TodoList from './components/TodoList.vue'

	export default {
		name: 'app',
		components: {
			TodoList
		}
	}
</script>

<style lang="scss">
	@import './variables.scss';
	
	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	#app {
		max-width: 25rem;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		margin: 0 auto;
		background-color: #dcdcdc;
		color: $vue-blue;
	}

	h2 {
		text-align: center;
	}
</style>
