// 基于准备好的dom
const dom = document.getElementById('main')
// 初始化echarts实例
const myChart = echarts.init(dom)

// 图表的配置项数据
const option = {
  // 标题
  title: {
    text: '主标题',
    subtext: '副标题',
    left: 'left', // 位置 left center right
    textStyle: {
      color: 'red',
      fontSize: 24
    },
    subtextStyle: {
      color: 'orange',
      fontSize: 16
    },
    show: true, // true可见 false不可见
  },
  // 工具栏
  toolbox: {
    feature: { // 工具配置项
      saveAsImage: {}, // 保存图片
      dataView: {}, // 数据视图
    }
  },
  backgroundColor: '#161627',
  series: [{
    type: 'gauge',
    axisLine: {
      lineStyle: {
        width: 30,
        color: [
          [0.3, '#67e0e3'],
          [0.7, '#37a2da'],
          [1, '#fd666d']
        ]
      }
    },
    pointer: {
      itemStyle: {
        color: 'auto'
      }
    },
    axisTick: {
      distance: -30,
      length: 8,
      lineStyle: {
        color: '#fff',
        width: 2
      }
    },
    splitLine: {
      distance: -30,
      length: 30,
      lineStyle: {
        color: '#fff',
        width: 4
      }
    },
    axisLabel: {
      color: 'auto',
      distance: 40,
      fontSize: 20
    },
    detail: { // 仪表盘详情
      valueAnimation: true,
      formatter: '{value} km/h',
      color: 'auto'
    },
    data: [{
      value: 70
    }]
  }]
}

// 随机改变数据
setInterval(function () {
  option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
  myChart.setOption(option, true);
}, 2000);

// 根据配置项显示图表
myChart.setOption(option)