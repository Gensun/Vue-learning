<template lang="html">

  <Panel title="-In货推荐-" :class="$style.panel">
    <section :class="$style.content">
      <div v-for="(elem,index) in items" :key="elem.catory">
        <img :src="elem.catory" alt="">
        <section :class="$style.list">
          <div :class="$style.product" v-for="item in elem.list" :key="item.title">
            <img :src="item.img" alt="">
            <h4>{{item.title}}</h4>
            <p><em>{{item.price}}</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:item.progress+'%'}" />
              </div>
              <p>{{ item.progress }}%</p>
            </article>
            <p v-if="index == 0 && choice" :class="$style.choice">{{ choice }}</p>
          </div>
        </section>
      </div>
    </section>
  </Panel>

</template>

<script>

  import Panel from '../core/panel.vue'

  export default {
    components: {
      Panel
    },
    data() {
      return {
        choice: '精选',
        items: [
          {
            catory:
              '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
            list: [
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
                title: '双响炮蓝牙音箱',
                price: '29.00',
                progress: 172
              },
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                title: '脑波相机',
                price: '998.00',
                progress: 259
              }
            ]
          },
          {
            catory:
              '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
            list: [
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                title: '智能电动牙刷',
                price: '19.00',
                progress: 481
              },
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                title: '烟草加热电子烟',
                price: '258.00',
                progress: 105
              }
            ]
          },
          {
            catory:
              '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
            list: [
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                title: '赖公高淮封藏老酒',
                price: '99.00',
                progress: 199
              },
              {
                img:
                  'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
                title: '泗洪花雕醉蟹',
                price: '58.00',
                progress: 222
              }
            ]
          }
        ]
      }
    }
  }

</script>


<style lang="scss" module >

  @import '../../css/element.scss';

  .panel {
    @include panel;
    .content {
      @include flex;

      > div {
        padding: 20px 0;
      }
      img {
        width: 100%;
      }
      .list {
        @include flex(row);
        padding-top: 20px;

        .product {
          justify-content: space-around;
          position: relative;
          text-align: center;
          width: 50%;
          height: 9.9rem;
          background: rgba(0, 0, 0, 0.02);
          box-sizing: border-box;

          img {
            width: 4.5rem;
            height: 4.5rem;
            margin: 1.1rem auto 0.5rem;
          }
          h4 {
            font-family: PingFangSC-Medium;
            font-size: 0.7rem;
            color: #444;
          }
          p {
            color: #999;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 14px;
            em {
              color: #ff3232;
              font-size: 0.9rem;
              margin-right: 0.1rem;
            }
          }

          article {
            @include flex(row);
            align-items: center;
            justify-content: space-around;
            line-height: 30px;
            padding: 0 2rem;
            height: 30px;
            margin-top: 16px;
            .wrapper {
              width: 144px;
              height: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                width: 40%;
                max-width: 100%;
                height: 10px;
                border-radius: 22px;
                background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
              }
              p {
                position: absolute;
                color: #999;
                font-size: 0.6rem;
              }
            }
          }
          .choice {
            color: red;
            font-size: 24px;
            width: 50px;
            height: 40px;
            line-height: 40px;
            background-color: gray;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

</style>
