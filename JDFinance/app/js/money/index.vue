
<template lang="html">

  <div style="background-color: #f5f5f5;">
    <Heador/>
    <Mslider />
    <Ada />
    <Money />
    <Adb />
    <Finance />
    <Abc />
    <Footer cname='mFooter' />
    <Navbar/>
  </div>

</template>

<script>

  import Heador from '../public/header.vue'
  import Mslider from './mslider.vue'
  import Ada from './ada.vue'
  import Money from './money.vue'
  import Adb from './adb.vue'
  import Finance from './finance.vue'
  import Abc from './abc.vue'
  import Footer from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'

  export default {
    components: {
      Heador,
      Mslider,
      Ada,
      Adb,
      Money,
      Finance,
      Abc,
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
