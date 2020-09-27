<template>
	<div id="event-handling">
		<p>{{ message }}---{{message_Com}}</p>
		<button v-on:click="reverseMessage"> Reverse Message</button>
		<div :class='{active: isActive}'>test</div>
		<div :class='classObject'>test-Object</div>
		<span v-if="ok">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</span>
		<div v-if="Math.random() > 0.5">
			" > 0.5"
		</div>
		<div v-else-if="Math.random() === 0.5">
			"= 0.5"
		</div>
		<div v-else>
			" 小于 0.5"
		</div>

		<h1 v-show="ok" style="display: flex; ">Hello!
			<div>ssd</div>
		</h1>

		<div id="todo-list-example">
			<form v-on:submit.prevent="addNewTodo">
				<label for="new-todo">Add a todo</label>
				<input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat">
				<button>Add</button>
			</form>
			<ul>
				<TodoItem is="todo-item" v-for="(todo, index) in todos" v-bind:key="todo.id" v-bind:title="todo.title" v-on:remove="todos.splice(index, 1)"></TodoItem>
			</ul>
		</div>

		<Button>Save</Button>
	</div>

</template>

<script>
	// import TodoItem from './todoItem.vue'
	import Button from './Button.vue'

	export default {
		name: 'ReverseMessage',
		components: {
			'TodoItem': () => import('./todoItem.vue'),
			Button
		},
		data() {
			return {
				message: 'Hello world...Vue.js',
				isActive: true,
				error: 'fatal',
				ok: !false,
				newTodoText: '',
				todos: [{
						id: 1,
						title: '1-1'
					},
					{
						id: 2,
						title: '2-2'
					}, {
						id: 3,
						title: '3-3'
					}, {
						id: 4,
						title: '4-4'
					}
				],
				nextTodoId: 5
			}
		},
		methods: {
			reverseMessage() {
				this.message = this.message.split('').reverse().join('')
				this.message_Com = 'setter'
			},
			addNewTodo() {
				this.todos.push({
					id: this.nextTodoId++,
					title: this.newTodoText
				})
				this.newTodoText = ''
			},

		},
		computed: {
			// message_Com: function() {
			// return this.message + 'computed'
			// }
			message_Com: {
				get: function() {
					return this.message + '+getter'
				},
				set: function() {
					console.log('setter called')
					this.message = "setter message"
				}
			},
			classObject: function() {
				return {
					active: this.isActive && !this.error,
					'text-danger': this.error && this.error === 'fatal'
				}
			}
		}
	}
</script>

<style>
	.active {
		background-color: aqua;
	}

	.text-danger {
		color: red;
		font-weight: bold;
	}

	.textAlign {
		text-align: left;
		margin-left: 0rem;
		width: 100px;
	}
</style>
