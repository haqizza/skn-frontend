<template>
  <div class="overflow-scroll">
    <Topbar title="Analytics"/>
    <div class="px-8">
      <div class="flex flex-row justify-around ">
        <KPICard
          v-for="item in analytics"
          :key="item.title"
          :data="item"
          align="center"
        />
      </div>
      <div class="main-container my-4 flex flex-row">
        <highchart
          :options="chartOptions"
          :modules="['exporting']"
          :update="watchers"
          style="width:100%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  layout: 'cms',
  data() {
    return {
      analytics: [
        {
          title: 'All Time Views',
          value: '600'
        },
        {
          title: 'This Month',
          value: '433'
        },
        {
          title: 'This Week',
          value: '255'
        },
        {
          title: 'Today',
          value: '38'
        },
      ],
      caption: '',
      title: 'Visitor Graphics',
      subtitle: 'as of',
      points: [14,12,10,15,12,6,8,2,0,4,21,1,12,5,8,2,5,7,3,8,1,7,5,12,16,2,1],
      seriesColor: '#F39200',
      animationDuration: 1000,
      chartType: 'spline',
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      seriesName: '',
      yAxis: '',
      watchers: [
        'options.title',
        'options.series'
      ],
      colors: [
        'Red',
        'Green',
        'Blue',
        'Pink',
        'Orange',
        'Brown',
        'Black',
        'Purple'
      ],
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: ''
      },
      opt: false,
      stats: {}
    }
  },
  async fetch() {
    this.stats = await this.$axios.$get(
      '/stats/analytics',
      {
        headers: {
          'auth-token': this.$auth.strategy.token.get()
        }
      }
    ).then((res) => res.stats);
  },
  computed: {
    chartOptions () {
      const ctx = this
      return {
        caption: {
          text: this.caption,
          style: {
            color: '#black'
          }
        },
        chart: {
          backgroundColor: '#ffffff',
          className: 'visitor-chart',
          type: this.chartType
        },
        plotOptions: {
          series: {
            tooltip: {
              headerFormat: '',
              pointFormat: '{point.y}',
            },
            cursor: 'pointer',
            point: {
              events: {
                click () {
                  ctx.$emit('pointClicked', this)
                }
              }
            }
          }
        },
        yAxis: [{
          title: false
        }],
        title: {
          style: {
            color: '#black',
            fontWeight: 'bold'
          },
          align: 'left',
          text: `${this.title} ` +
            (this.lastPointClicked.timestamp !== ''
              ? `(Point clicked: ${this.lastPointClicked.timestamp})`
              : '')
        },
        legend: false,
        series: [
          {
          name: this.seriesName,
          data: this.points,
          color: this.seriesColor
          }
        ]
      }
    }
  }
}
</script>
