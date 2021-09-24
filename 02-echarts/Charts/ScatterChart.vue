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
        // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        //   {
        //     offset: 0,
        //     color: '#f7f8fa'
        //   },
        //   {
        //     offset: 1,
        //     color: '#cdd0d5'
        //   }
        // ]),
        // title: {
        //   text: '1990 与 2015 年各国家人均寿命与 GDP'
        // },
        // legend: {
        //   right: 10,
        //   data: ['1990', '2015']
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
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
        xAxis: {
          splitArea: {
              show: false
          }, // 去掉斑马线
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
            lineStyle: {
              color: '#B7BAC2',
              width: '1'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'solid'
            }
          }
        },
        yAxis: {
          splitArea: {
              show: false
          }, // 去掉斑马线
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
            lineStyle: {
              color: '#B7BAC2',
              width: '1'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          scale: true
        },
        series: [
          {
            name: '1990',
            data: [
              [2860, 77, 17096869, 'Australia', 1990],
              [3116, 77.4, 27662440, 'Canada', 1990],
              [151, 68, 1154605773, 'China', 1990],
              [1367, 74.7, 10582082, 'Cuba', 1990],
              [2859, 75, 4986705, 'Finland', 1990],
              [2947, 77.1, 56943299, 'France', 1990],
              [3147, 75.4, 78958237, 'Germany', 1990],
              [2866, 78.1, 254830, 'Iceland', 1990],
              [177, 57.7, 870601776, 'India', 1990],
              [2955, 79.1, 122249285, 'Japan', 1990],
              [207, 67.9, 20194354, 'North Korea', 1990],
              [1208, 72, 42972254, 'South Korea', 1990],
              [2402, 75.4, 3397534, 'New Zealand', 1990],
              [4329, 76.8, 4240375, 'Norway', 1990],
              [1008, 70.8, 38195258, 'Poland', 1990],
              [1934, 69.6, 147568552, 'Russia', 1990],
              [1067, 67.3, 53994605, 'Turkey', 1990],
              [2642, 75.7, 57110117, 'United Kingdom', 1990],
              [3706, 75.4, 252847810, 'United States', 1990]
            ],
            type: 'scatter',
            // symbolSize: function(data) {
            //   return Math.sqrt(data[2]) / 5e2;
            // },
            symbolSize: 20,
            animationDuration,
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: 'top'
              }
            }
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowColor: 'rgba(120, 36, 50, 0.5)',
            //   shadowOffsetY: 5
            //   //   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            //   //     {
            //   //       offset: 0,
            //   //       color: 'rgb(251, 118, 123)'
            //   //     },
            //   //     {
            //   //       offset: 1,
            //   //       color: 'rgb(204, 46, 72)'
            //   //     }
            //   //   ])
            // }
          }
          // {
          //   name: '2015',
          //   data: [
          //     [44056, 81.8, 23968973, 'Australia', 2015],
          //     [43294, 81.7, 35939927, 'Canada', 2015],
          //     [13334, 76.9, 1376048943, 'China', 2015],
          //     [21291, 78.5, 11389562, 'Cuba', 2015],
          //     [38923, 80.8, 5503457, 'Finland', 2015],
          //     [37599, 81.9, 64395345, 'France', 2015],
          //     [44053, 81.1, 80688545, 'Germany', 2015],
          //     [42182, 82.8, 329425, 'Iceland', 2015],
          //     [5903, 66.8, 1311050527, 'India', 2015],
          //     [36162, 83.5, 126573481, 'Japan', 2015],
          //     [1390, 71.4, 25155317, 'North Korea', 2015],
          //     [34644, 80.7, 50293439, 'South Korea', 2015],
          //     [34186, 80.6, 4528526, 'New Zealand', 2015],
          //     [64304, 81.6, 5210967, 'Norway', 2015],
          //     [24787, 77.3, 38611794, 'Poland', 2015],
          //     [23038, 73.13, 143456918, 'Russia', 2015],
          //     [19360, 76.5, 78665830, 'Turkey', 2015],
          //     [38225, 81.4, 64715810, 'United Kingdom', 2015],
          //     [53354, 79.1, 321773631, 'United States', 2015]
          //   ],
          //   type: 'scatter',
          //   symbolSize: function(data) {
          //     return Math.sqrt(data[2]) / 5e2;
          //   },
          //   emphasis: {
          //     label: {
          //       show: true,
          //       formatter: function(param) {
          //         return param.data[3];
          //       },
          //       position: 'top'
          //     }
          //   },
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowColor: 'rgba(25, 100, 150, 0.5)',
          //     shadowOffsetY: 5
          //     //   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          //     //     {
          //     //       offset: 0,
          //     //       color: 'rgb(129, 227, 238)'
          //     //     },
          //     //     {
          //     //       offset: 1,
          //     //       color: 'rgb(25, 183, 207)'
          //     //     }
          //     //   ])
          //   }
          // }
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
      // 决定有几组数据
      this.chartData?.xaxisKey?.map((xk, xkIndex) => {
        this.newOptions.series[xkIndex] = JSON.parse(JSON.stringify(this.newOptions.series[0]));
        const dataList = this.chartData?.yaxisData[0].map((key, keyIndex) => {
          const objList = [];
          objList.push(key);
          for (let i = 1; i < this.chartData?.yaxisData.length; i++) {
            const yKey = this.chartData?.yaxisData[i];
            objList.push(yKey[keyIndex]);
          }
          objList.push(this.chartData?.xaxisData[0]);
          objList.push(xk);
          return objList;
        });
        this.newOptions.series[xkIndex].data = dataList;
        this.newOptions.series[xkIndex].name = xk;
      });
      this.chart.setOption(this.newOptions);
    },
    setData(current) {
      this.chartData = current;
      this.setOption && this.setOption();
    }
  }
};
</script>
