<template lang="html">

  <Panel title="-理财精选-" :class="$style.panel">

    <section :class="$style.content">
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
             alt="">
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率4.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
             alt="">
        <div>
          <h4>季度理财</h4>
          <p>历史年化回报率5.50%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
             alt="">
        <div>
          <h4>一年理财</h4>
          <p>历史年化回报率5.80%</p>
        </div>
        <em>去赚钱 > </em>
      </div>
    </section>

  </Panel>

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

    > h4 {
      border-bottom: 1px solid #eee;
    }

    .content {
      @include flex;
      margin-top: 20px;
      .item {
        @include flex(row);
        justify-content: space-around;
        overflow: hidden;
        align-items: center;
        height: 140px;

        &:after {
          content: ' ';
          display: block;
          width: 100%;
          height: 0px;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
          position: relative;
          top: 0px;
          margin-left: 4.95rem;
        }
        &:last-child:after {
          display: none;
        }
        img {
          width: 2.2rem;
          height: 2.2rem;
          display: inline-block;
          margin: 0 0.5rem;
        }
        div {
          width: 420px;
          h4 {
            font-family: inherit;
            vertical-align: baseline;
            margin: 10px 0;
          }
          p {
            color: #ff3232;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.6rem;
          }
        }
        em {
          color: #ff801a;
          font-size: 0.7rem;
        }
      }
    }
  }

</style>
