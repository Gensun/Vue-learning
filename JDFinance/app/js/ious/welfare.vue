<template lang="html">

  <Panel title="-白条福利-" :class="$style.panel">
    <section :class="$style.context">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
             alt="">
        <div>
          <h4>开通白条</h4>
          <p>送188元礼包</p>
        </div>
        <em>立即开通 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"
             alt="">
        <div>
          <h4>白条闪付</h4>
          <p>新手享158元礼包</p>
        </div>
        <em>随机立减 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
             alt="">
        <div>
          <h4>白条提额</h4>
          <p>金融app专享提额礼包</p>
        </div>
        <em>去提额 > </em>
      </div>
    </section>
  </panel>

</template>

<script>

  import Panel from '../core/panel.vue'
  export default {
    components: {
      Panel
    }
  }

</script>

<style lang="scss" module >

  @import '../../css/element.scss';

  .panel {
    @include panel;

    .context {
      @include flex;
      border-top: 1px solid #eee;

      .item {
        @include flex(row);
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;
        line-height: 1.8;
        font-size: 0.8rem;
        color: #333;
        height: 144px;

        &:after {
          content: '';
          width: 100%;
          margin-left: 180px;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          height: 0;
          overflow: hidden;
        }
        &:last-child:after {
          display: none;
        }
        img {
          width: 2.2rem;
          height: 2.2rem;
          display: inline-block;
        }
        div {
          text-align: left;
          h4 {
          }
          p {
            font-size: 0.6rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #999;
            line-height: 1.1;
            width: 354px;
          }
        }

        em {
          color: #ff801a;
          font-size: 0.7rem;
          width: 140px;
        }
      }
    }
  }

</style>
