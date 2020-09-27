
<template lang="html">

  <div>
    <Heador/>
    <ISlider />
    <Welfare />
    <Service />
    <Footer cname='iFooter' />
    <Navbar/>
  </div>

</template>

<script>

  import Heador from '../public/header.vue'
  import ISlider from './iSlider.vue'
  import Welfare from './welfare.vue'

  import Service from './service.vue'

  import Footer from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'

  export default {
    components: {
      Heador,
      ISlider,
      Welfare,
      Service,
      Footer,
      Navbar
    }
  }

</script>

<style lang="scss">

  .iFooter {
    ul {
      li {
        &:last-child {
          display: none;
        }
      }
    }
  }

</style>
