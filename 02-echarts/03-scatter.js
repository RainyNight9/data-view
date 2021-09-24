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
  // 工具栏
  toolbox: {
    feature: { // 工具配置项
      saveAsImage: {}, // 保存图片
      dataView: {}, // 数据视图
    }
  },
  xAxis: {},
  yAxis: {},
  series: [{
    type: 'scatter',
    // symbolSize: 20,
    symbolSize: (param)=>{
      return param[0]
    },
    data: [
      // [x, y, z]
      [10.0, 8.04],
      [8.07, 6.95],
      [13.0, 7.58],
      [9.05, 8.81],
      [11.0, 8.33],
      [14.0, 7.66],
      [13.4, 6.81],
      [10.0, 6.33],
      [14.0, 8.96],
      [12.5, 6.82],
      [9.15, 7.20],
      [11.5, 7.20],
      [3.03, 4.23],
      [12.2, 7.83],
      [2.02, 4.47],
      [1.05, 3.33],
      [4.05, 4.96],
      [6.03, 7.24],
      [12.0, 6.26],
      [12.0, 8.84],
      [7.08, 5.82],
      [5.02, 5.68]
    ]
  }]
}

// 根据配置项显示图表
myChart.setOption(option)