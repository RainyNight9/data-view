// 基于准备好的dom
const dom = document.getElementById('main')
// 初始化echarts实例
const myChart = echarts.init(dom, 'dark')

// 图表的配置项数据
const option = {
  // 标题
  title: {
    text: '主标题',
    subtext: '副标题',
    left: 'center', // 位置 left center right
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
  // 提示框
  tooltip: {
    trigger: 'item', // 提示框触发方式 item（图形触发，主用于散点图、饼图无类目轴的图表），axis（坐标轴触发，主用于柱状图，折线图有类目轴的图表），none （不触发）
    show: true,
  },
  // 绘图区域
  grid: {
    top: 80,
    right: 20,
    bottom: '5%',
    left: '7%'
  },
  // 工具栏
  toolbox: {
    feature: { // 工具配置项
      saveAsImage: {}, // 保存图片
      dataView: {}, // 数据视图
    }
  },
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
  },
  yAxis: {},
  series: [{
    type: 'k',
    data: [
      [20, 34, 10, 38],
      [40, 35, 30, 50],
      [31, 38, 33, 44],
      [38, 15, 5, 42]
    ]
  }]
}

// 根据配置项显示图表
myChart.setOption(option)