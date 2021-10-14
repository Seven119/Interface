<template>
  <div class="charts">
    <normalNav></normalNav>
    <rightNav></rightNav>
    <div id="main" style="width: 600px; height:400px"></div>
    <div id="zhexian" style="width:600px; height:400px"></div>
  </div>
</template>
<script>
import normalNav from "../components/normalNav.vue";
import rightNav from "../components/rightNav.vue";
export default {
  name: "app",
  components: { normalNav, rightNav },
  methods: {
    drawChart1() {
      var echarts = require("echarts");

      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      // prettier-ignore
      let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
      // prettier-ignore
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "特性示例：渐变色 阴影 点击缩放",
          subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: data
          }
        ]
      };
      // Enable data zoom when user click bar.
      const zoomSize = 6;
      myChart.on("click", function(params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
      });

      option && myChart.setOption(option);
    },
    drawChart2() {
      var echarts = require("echarts");

      var ROOT_PATH =
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

      var chartDom = document.getElementById("zhexian");
      var myChart = echarts.init(chartDom);
      var option;

      $.get(ROOT_PATH + "/data/asset/data/aqi-beijing.json", function(data) {
        myChart.setOption(
          (option = {
            title: {
              text: "Beijing AQI",
              left: "1%"
            },
            tooltip: {
              trigger: "axis"
            },
            grid: {
              left: "5%",
              right: "15%",
              bottom: "10%"
            },
            xAxis: {
              data: data.map(function(item) {
                return item[0];
              })
            },
            yAxis: {},
            toolbox: {
              right: 10,
              feature: {
                dataZoom: {
                  yAxisIndex: "none"
                },
                restore: {},
                saveAsImage: {}
              }
            },
            dataZoom: [
              {
                startValue: "2014-06-01"
              },
              {
                type: "inside"
              }
            ],
            visualMap: {
              top: 50,
              right: 10,
              pieces: [
                {
                  gt: 0,
                  lte: 50,
                  color: "#93CE07"
                },
                {
                  gt: 50,
                  lte: 100,
                  color: "#FBDB0F"
                },
                {
                  gt: 100,
                  lte: 150,
                  color: "#FC7D02"
                },
                {
                  gt: 150,
                  lte: 200,
                  color: "#FD0100"
                },
                {
                  gt: 200,
                  lte: 300,
                  color: "#AA069F"
                },
                {
                  gt: 300,
                  color: "#AC3B2A"
                }
              ],
              outOfRange: {
                color: "#999"
              }
            },
            series: {
              name: "Beijing AQI",
              type: "line",
              data: data.map(function(item) {
                return item[1];
              }),
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333"
                },
                data: [
                  {
                    yAxis: 50
                  },
                  {
                    yAxis: 100
                  },
                  {
                    yAxis: 150
                  },
                  {
                    yAxis: 200
                  },
                  {
                    yAxis: 300
                  }
                ]
              }
            }
          })
        );
      });

      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
  }
};
</script>

<style scoped>
#main {
  float: left;
  margin-left: 100px;
  margin-top: 100px;
}
#zhexian{
    float: right;
    margin-right: 50px;
    margin-top: 100px;
}
</style>
