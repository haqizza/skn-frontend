<template>
  <div>
    <Topbar title="Analytics"/>
    <div class="px-8 pt-5">
      <div class="flex flex-row justify-around ">
        <KPICard
          v-for="item in analytics"
          :key="item.title"
          :data="item"
          align="center"
        />
      </div>
      <div class="main-container my-4 flex flex-row">
        <div>
          Visitor graphics
        </div>
        <div class="flex flex-col">
          Device
          <div>

          </div>
          <div class="flex flex-col">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
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
      ]
    }
  }
}
</script>
