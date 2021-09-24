<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
require('echarts/theme/macarons'); // echarts theme
import resize from './mixins/resize';

const animationDuration = 2000;

export default {
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
        color: ['#2885FF', '#817FE7', '#52C41A', '#65789B', '#F7BE16', '#76D3F8', '#9760BC', '#F7903D', '#008685', '#F18BB4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: 'rgba(255,255,255,0.9)',
          textStyle: {
            color: '#1A2031'
          },
          extraCssText: 'box-shadow:0px 0px 12px 0px rgba(24,86,237,0.1);'
        },
        grid: {
          top: 30,
          left: 24,
          right: 24,
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              show: true,
              interval: 'auto',
              rotate: 0,
              margin: 8,
              // formatter: null,
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#797B84',
                fontWeight: 400,
                fontFamily: 'PingFangSC-Regular,PingFang SC',
                fontSize: 12,
                height: 17,
                lineHeight: 17
              }
            },
            data: [],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#B7BAC2',
                width: '1'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              show: true,
              interval: 'auto',
              rotate: 0,
              margin: 8,
              // formatter: null,
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#797B84',
                fontWeight: 400,
                fontFamily: 'PingFangSC-Regular,PingFang SC',
                fontSize: 12,
                height: 17,
                lineHeight: 17
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            }, // 去掉斑马线
            splitLine: {
              lineStyle: {
                color: '#E8EBF1'
              }
            }
          }
        ],
        series: [
          {
            name: 'pageA',
            type: 'bar',
            // stack: 'vistors',
            // barWidth: '60%',
            data: [79, 52, 200, 334, 390, 330, 220],
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
      this.newOptions.xAxis.length = 1;
      this.chart.clear();
      // 设置数据
      this.newOptions.xAxis[0].data = this.chartData?.xaxisData || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      this.chartData?.yaxisData?.map((item, index) => {
        this.newOptions.series[index] = JSON.parse(JSON.stringify(this.newOptions.series[0]));
        this.newOptions.series[index].data = item;
        this.newOptions.series[index].name = this.chartData?.yaxisKey[index];
      });
      this.chart.setOption(this.newOptions, { notMerge: true });
    },
    setData(current) {
      this.chartData = current;
      this.setOption && this.setOption();
    }
  }
};
</script>
