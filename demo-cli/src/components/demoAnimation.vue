<template>
	<div>
		<button @click='show = !show'>
			toggle
		</button>
		<transition name="slide-fade">
			<p v-if="show">Hello</p>
		</transition>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				show: true
			};
		},

	}
</script>

<style>
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		transform:  translateX(10px);
		opacity: 0;
	}
</style>
