<template>

  <section :class="[panelClass, cname]">
    <h4> {{ title }}</h4>
    <slot />
  </section>

</template>
<script>

  export default {
    name: '',
    props: {
      cname: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      panelClass: 'panel'
    })
  }

</script>
<style lang="scss" module>

  @import '../../css/element.scss';
  .panel {
    @include panel;
  }

</style>
