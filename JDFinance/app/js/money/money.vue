<template lang="html">

  <Panel title="-理财精选-" :class="$style.panel">
    <section :class="$style.context">

      <dl v-for="elem in items" :key="elem.title" :class="$style.item">
        <dt>{{ elem.title }} <span> {{ elem.sub }}</span></dt>
        <dd>{{ elem.rate }}</dd>
        <dd>{{ elem.text }}</dd>
      </dl>

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
        items: [
          {
            title: '定期理财',
            sub: '理财首选',
            rate: '5.60%',
            text: '历史年化回报率'
          },
          {
            title: '小白理财',
            sub: '理财首选',
            rate: '4.22%',
            text: '7日年化收益率'
          },
          {
            title: '月月盈',
            sub: '养老保障',
            rate: '5%',
            text: '七日年化收益率'
          },
          {
            title: '小白基金',
            sub: '天天赚钱',
            rate: '4.27%',
            text: '7日年化收益率'
          }
        ]
      }
    }
  }

</script>

<style lang="scss" module>

  @import '../../css/element.scss';

  .panel {
    @include panel;

    .context {
      @include flex(row);
      justify-content: space-around;
      box-sizing: border-box;
      &:after {
        content: ' ';
        display: block;
        width: 100%;
        height: 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        position: relative;
        top: -208px;
      }
      .item {
        width: 50%;
        position: relative;
        box-sizing: border-box;
        padding: 0.85rem 0.4rem;

        &:after {
          content: '';
          position: absolute;
          height: 136px;
          width: 1px;
          top: 0;
          right: 0;
          display: block;
          border-right: 1px solid #eee;
        }

        dt {
          font-size: 0.75rem;
          height: 34px;
          line-height: 34px;
          color: #333;

          span {
            font-size: 0.55rem;
            border: 1px solid red;
            padding: 2px 8px;
            vertical-align: 0.025rem;
            margin-left: 0px;
          }
        }

        dd {
          font-weight: 700;
          font-size: 1.1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          &:nth-child(2) {
            color: #ff5155;
          }
          &:nth-child(3) {
            font-size: 0.6rem;
            color: #999;
            height: 0.85rem;
            line-height: 0.85rem;
          }
        }
      }
    }
  }

</style>
