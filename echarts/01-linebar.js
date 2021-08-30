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
    trigger: 'axis', // 提示框触发方式 item（图形触发，主用于散点图、饼图无类目轴的图表），axis（坐标轴触发，主用于柱状图，折线图有类目轴的图表），none （不触发）
  },
  // 绘图区域
  grid: {
    top: 80,
    right: 20,
    bottom: '5%',
    left: '7%'
  },
  // 图例
  legend: {
    data: ['我的数据', '你的数据'], // 每一项代表一个系列的name
    left: 'left', // 位置
  },
  // 工具栏
  toolbox: {
    feature: { // 工具配置项
      saveAsImage: {}, // 保存图片
      dataView: {}, // 数据视图
      restore: {}, // 配置项还原
      dataZoom: {}, // 数据区域缩放
      magicType: { // 动态类型
        type: ['line', 'bar', 'stack']
      }
    }
  },
  // x轴
  xAxis: {
    name: 'x轴名称',
    data: ['类目1', '类目2', '类目3'], // 类目数据
    // boundaryGap: 0, // 边界留白
  },
  // y轴
  yAxis: {
    name: 'y轴名称',
    splitNumber: 5, // 预估分割段数
  },
  // 系列列表 {}一个系列 []多个系列数据
  series: [
    {
      type: 'line', // 图表类型 line bar
      name: '我的数据',
      data: [30, 20, 50], // 数据，与x轴相对应
      smooth: true, // 平滑
      itemStyle: { // 项目样式
        color: '#00abcd'
      },
      areaStyle: { // 区域样式
        color: '#00ccdd',
        opacity: 0.2
      },
      symbolSize: 20, // 标记点大小
      symbol: 'pin', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none', 'image://url', 'path://'
    },
    {
      type: 'bar',
      name: '你的数据',
      data: [20, 40, 60]
    }
  ]
}

// 根据配置项显示图表
myChart.setOption(option)