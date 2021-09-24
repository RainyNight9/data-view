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
  // 图例
  legend: {
    left: 'left', // 位置
    orient: 'vertical', // 图例列表的布局朝向 'horizontal', 'vertical'
  },
  // 工具栏
  toolbox: {
    feature: { // 工具配置项
      saveAsImage: {}, // 保存图片
      dataView: {}, // 数据视图
    }
  },
  // 系列列表 {}一个系列 []多个系列数据
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%', // 半径 也可以[起始半径, 结束半径]生成环
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ],
      roseType: false, // 玫瑰图形 radius area false
      emphasis: { // 高亮状态的扇区和标签样式
        itemStyle: {
          shadowBlur: 10, // 图形阴影的模糊大小
          shadowOffsetX: 0, // 阴影水平方向上的偏移距离
          shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
        }
      }
    }
  ]
}

// 根据配置项显示图表
myChart.setOption(option)