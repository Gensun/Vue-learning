<template>
	<div>
		<Input v-model='inputValue' @keydown.enter='addTodoItem' />
		<ul v-if='todos.length'>
			<Item v-for="todo in todos" v-bind:key='todo.id' v-bind:todo='todo' v-on:remove='removeTodo' />
		</ul>
		<p v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
	</div>
</template>

<script>
	import Input from './TodoListInput.vue'
	import Item from './TodoListItem.vue'


	let nextTodoId = 0

	export default {

		data() {
			return {
				inputValue: '',
				todos: [{
						id: nextTodoId++,
						text: 'Learn Vue'
					},
					{
						id: nextTodoId++,
						text: 'Learn about single-file components'
					},
					{
						id: nextTodoId++,
						text: 'Fall in love'
					}
				],
			}
		},
		components: {
			Input,
			Item
		},
		methods: {
			addTodoItem() {
				const value = this.inputValue.trim()

				console.log('input value' + this.inputValue)
				if (value) {
					this.todos.push({
						id: nextTodoId++,
						text: value
					})
				}
				this.inputValue = ''
			},
			removeTodo(index) {
				console.log('remove click' + index)
				this.todos = this.todos.filter((todo) => {
					return todo.id !== index
				})
			}
		}
	}
</script>

<style>

</style>
