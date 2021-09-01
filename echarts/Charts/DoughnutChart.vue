<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
require('echarts/theme/macarons'); // echarts theme
import resize from './mixins/resize';

const animationDuration = 2000;

export default {
  name: 'DoughnutChart',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options: {
      type: Object,
      default: () => {}
    },
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null,
      defaultOptions: {
        color: [
          '#2885FF',
          '#817FE7',
          '#52C41A',
          '#65789B',
          '#F7BE16',
          '#76D3F8',
          '#9760BC',
          '#F7903D',
          '#008685',
          '#F18BB4'
        ],
        title: {
          text: '销售额',
          left: 'center',
          top: '45%',
          textStyle: {
            color: '#666',
            fontSize: 12,
            align: 'center'
          }
        },
        // graphic: {
        //   type: 'text',
        //   left: 'center',
        //   top: '50%',
        //   style: {
        //     text: '￥44544',
        //     textAlign: 'center',
        //     fill: '#333',
        //     fontSize: 20
        //   }
        // },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(255,255,255,0.9)',
          textStyle: {
            color: '#1A2031'
          },
          extraCssText: 'box-shadow:0px 0px 12px 0px rgba(24,86,237,0.1);'
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 48,
          top: 24,
          bottom: 24,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#5A5E65',
            fontSize: 12
          },
          data: []
          // selected: data.selected
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['80%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '30',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            animationDuration
          }
        ]
      }
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.setOption();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, 'macarons');
      this.setOption();
    },
    setOption() {
      this.newOptions = { ...this.defaultOptions, ...this.options };
      // 初始化
      this.newOptions.series.length = 1;
      this.chart.clear();
      // 设置数据
      this.newOptions.title.text = this.chartData?.xaxis;
      this.newOptions.legend.data = this.chartData?.xaxisData || ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'];
      this.chartData?.yaxisData?.map((item, index) => {
        this.newOptions.series[index] = JSON.parse(JSON.stringify(this.newOptions.series[0]));
        // 数据结构特殊需要处理
        const newList = [];
        item?.map((dataItme, dataIndex) => {
          const obj = { value: dataItme, name: this.newOptions.legend.data[dataIndex] };
          newList.push(obj);
        });
        this.newOptions.series[index].data = newList;
        this.newOptions.series[index].name = this.chartData?.yaxisKey[index];
        this.newOptions.series[index].radius = this.getRadius(index);
      });
      this.chart.setOption(this.newOptions, { notMerge: true });
    },
    getRadius(index) {
      // 一组数据 50-70
      // 二组数据 40-55 65-80
      // 三组数据 30-45 55-70 80-95
      // 四组数据 20-35 40-55 60-75 80-95
      // 五组数据 0-15 20-35 40-55 60-75 80-95
      // 多余5组数据算失败，bug
      const all_radius = {
        1: [['50%', '70%']],
        2: [['40%', '55%'], ['65%', '80%']],
        3: [['30%', '45%'], ['55%', '70%'], ['80%', '95%']],
        4: [['20%', '35%'], ['40%', '55%'], ['60%', '75%'], ['80%', '95%']],
        5: [['0%', '15%'], ['20%', '35%'], ['40%', '55%'], ['60%', '75%'], ['80%', '95%']]
      };
      return all_radius[this.chartData?.yaxisData?.length][index] || ['50%', '70%'];
    },
    setData(current) {
      this.chartData = current;
      this.setOption && this.setOption();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

