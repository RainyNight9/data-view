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
  // 雷达坐标系组件
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '销售', max: 6500 },
      { name: '管理', max: 16000 },
      { name: '信息技术', max: 30000 },
      { name: '客服', max: 38000 },
      { name: '研发', max: 52000 },
      { name: '市场', max: 25000 }
    ]
  },
  series: [{
    name: '预算 vs 开销',
    type: 'radar',
    data: [
      {
        value: [4200, 3000, 20000, 35000, 50000, 18000],
        name: '预算分配'
      },
      {
        value: [5000, 14000, 28000, 26000, 42000, 21000],
        name: '实际开销'
      }
    ]
  }]
}

// 根据配置项显示图表
myChart.setOption(option)