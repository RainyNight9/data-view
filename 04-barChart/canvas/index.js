const data = [
  { type: '未知', value: 654, percent: 0.02 },
  { type: '17 岁以下', value: 654, percent: 0.02 },
  { type: '18-24 岁', value: 4400, percent: 0.2 },
  { type: '25-29 岁', value: 5300, percent: 0.24 },
  { type: '30-39 岁', value: 6200, percent: 0.28 },
  { type: '40-49 岁', value: 3300, percent: 0.14 },
  { type: '50 岁以上', value: 1500, percent: 0.06 },
];

const chartWidth = 500; // 条形图的宽度
const chartHeight = 400; // 条形图的高度

const types = Array.from(data, (d) => d.type); // 数据全部 type 新数组
const values = Array.from(data, (d) => d.value); // 数据全部 value 新数组
const indexes = Array.from(data, (_, i) => i); // 数据全部 index 新数组

// 计算每一个条左下顶点的横坐标
// 位置和在数组里面的 index 有关
const step = chartWidth / types.length; // 总宽度按照数据量平分
const barWidth = step * 0.8; // 每一个柱子的宽度
const xs = Array.from(indexes, (i) => i * step); // 每一条数据的 x 坐标

// 计算每一个条左下顶点的纵坐标
// 因为所有条底部都是对齐的，所以就是图表的高度
const y = chartHeight;

// 获得每一个条的高度
// 条的高度应该和 value 线性相关的
const valMax = Math.max(...values);
const barHeights = Array.from(values, (v) => chartHeight * (v / valMax)); // 按照最高的那个柱子为标准，计算其他每个柱子的比例高度

// 获取 canvas 的容器并设置宽高
const margin = 16; // 条形图的外边距
const containerWidth = chartWidth + margin * 2; // 容器的宽度
const containerHeight = chartHeight + margin * 2; // 容器的高度
const canvas = document.getElementById("container");
canvas.style.width = containerWidth + "px";
canvas.style.height = containerHeight + "px";

// 下面把画布宽高设置为样式宽高的两倍主要是为了解决模糊问题
// 这个地方就不详细展开了，感兴趣的可以自行查阅
canvas.width = containerWidth * 2;
canvas.height = containerHeight * 2;

const context = canvas.getContext("2d");
context.scale(2, 2); // 抵消将画布宽高设置为样式宽高两倍的影响

context.translate(margin, margin); // 将坐标原点移动到绘制图表的区域
