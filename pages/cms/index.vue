<template>
  <div>
    <Topbar
      title="Overview"
    />
    <div class="px-8 pt-5">
      <p class="font-semibold text-dark tracking-wider">Selamat Datang</p>
      <h3 class="font-bold text-5xl my-4">{{ $auth.user.nama }}</h3>
      <div class="grid grid-cols-4 grid-flow-row gap-8 mt-8">
        <div class="relative p-4 rounded-lg bg-accentOrange col-span-2 row-span-3">
          <div class="absolute top-14 left-6 font-bold text-white text-4xl tracking-wider z-50">{{ '0' }}</div>
          <highchart
            :options="chartOptions"
            :modules="['exporting']"
            :update="watchers"
            style="width:100%; height: 100%"
          />
        </div>
        <KPICard
          v-for="item in highlight"
          :key="item.title"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'CMSHomePage',
  layout: 'cms',
  data() {
    return {
      highlight: [
        {
          title: 'Pages',
          value: '6'
        },
        {
          title: 'Admins',
          value: '3'
        },
        {
          title: 'Asset',
          value: '34'
        },
        {
          title: 'Components',
          value: '24'
        },
      ],
      caption: '',
      title: 'Pageviews',
      subtitle: 'as of',
      points: [14,12,10,15,12,6,8,2,0,4,21,1],
      seriesColor: '#333',
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
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: ''
      },
      stats: {}
    }
  },
  // async fetch() {
    // this.stats = await this.$axios.$get(
    //   '/stats/analytics',
    //   {
    //     headers: {
    //       'auth-token': this.$auth.strategy.token.get()
    //     }
    //   }
    // ).then((res) => res.stats);
  // },
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
          backgroundColor: '#F39200',
          className: 'pageviews-chart',
          type: this.chartType,
          marginTop: 80
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
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: [{
          title: false,
          labels: {
            enabled: false
          }
        }],
        title: {
          style: {
            color: '#black',
            fontWeight: 'semibold'
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
