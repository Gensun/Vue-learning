
<template lang="html">

  <div>
    <Heador/>
    <Rslider />
    <Day />
    <In />
    <Welfare />
    <Footer cname='mFooter' />
    <Navbar/>
  </div>

</template>

<script>

  import Heador from '../public/header.vue'
  import Rslider from './rslider.vue'
  import Day from './day.vue'
  import In from './in.vue'
  import Welfare from './welfare.vue'
  import Footer from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'

  export default {
    components: {
      Heador,
      Rslider,
      Day,
      In,
      Welfare,
      Footer,
      Navbar
    }
  }

</script>

<style lang="scss">

  .mFooter {
    ul {
      li {
        &:first-child {
          img {
            display: none;
          }
        }
        &:last-child {
          display: none;
        }
      }
    }
  }

</style>
