<template lang="html">

  <Panel :class="$style.panel" title="- 生活服务 -">

    <ul :class="$style.content">
      <li v-for="elem in items" :key="elem.title" :class="$style.item">
        <router-link :to="{ name: elem.href }">
          <img :src="elem.img" :alt="elem.title">
          <p>{{ elem.title }}</p>
          <p v-if="elem.info">{{ elem.info }}</p>
        </router-link>
      </li>
    </ul>

  </Panel>

</template>

<script>

  import Panel from '../core/panel.vue'

  export default {
    components: {
      Panel
    },
    data: () => ({
      items: [
        {
          href:'',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
          title: '惠加油',
          info: ''
        },
        {
          href:'',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
          title: '小白信用',
          info: '全新升级'
        },
        {
          href:'',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
          title: '信用卡还款',
          info: ''
        },
        {
          href:'',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
          title: '卡转让',
          info: ''
        },
        {
          href:'',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
          title: '定期还款',
          info: ''
        }
      ]
    })
  }

</script>

<style lang="scss" module >

  @import '../../css/element.scss';

  .panel {
    @include panel;

    .content {
      @include flex(row);
      box-sizing: border-box;
      padding-bottom: 40px;

      .item {
        width: 20%;
        text-align: center;

        img {
          width: 90px;
          height: 90px;
        }
        p {
          margin-bottom: 5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 18px;
          color: #000 !important;
          &:nth-child(3) {
            color: #ff801a;
          }
        }
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }
  }

</style>
