<template lang="html">

  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination" />
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </section>

</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      cname: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev'
            // },
            notNextTick: false
          }
        }
      },
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }

</script>

<style lang="css" scoped>

  @import '~swiper/dist/css/swiper.css';
  .swiper-button-prev,
  .swiper-button-next {
    width: 70px;
    height: 70px;
  }

</style>
