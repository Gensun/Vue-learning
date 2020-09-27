<template>
	<div>
		<input v-model.lazy.trim="message" v-focus placeholder="edit me" />
		<p>this is {{ message }}</p>

		<textarea v-model="message" placeholder="edit more by me"></textarea>
		<p> more ... {{ message }}</p>

		<input v-model.number='age' type='number' autofocus placeholder="please write down you age" v-on:change="ageNumber" />
		<p>your age is {{ age }} </p>

		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot>{{ message }}</slot>
		</div>

		<p v-pin='100'>test pin</p>

		<div id="dynamicexample">
			<h3>Scroll down inside this section ↓</h3>
			<p v-pinx:[direction]="200">I am pinned onto the page at 200px to the left.</p>
		</div>
	</div>
</template>

<script>
	// import demo2 from './demo2.vue'

	export default {
		name: 'Demo3',
		data() {
			return {
				message: '',
				age: '',
				direction: 'left'
			}
		},
		components: {
			// demo2
		},
		methods: {
			ageNumber() {
				console.log(typeof(this.age))
			}
		},
		directives: {
			focus: {
				inserted: function(el) {
					el.focus()
				}
			},
			pin: {
				bind: function(el, binding, vnode) {
					el.style.position = 'fixed'
					el.style.top = binding.value + 'px'
				}
			},
			pinx: {
				bind: function(el, binding, vnode) {
					el.style.position = 'fixed'
					var s = (binding.arg == 'left' ? 'left' : 'top')
					el.style[s] = binding.value + 'px'
				}
			}
		}

	}
</script>

<style>
</style>
