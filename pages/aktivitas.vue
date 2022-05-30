<template>
  <div>
    <ActivityLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </ActivityLight>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Activity Pages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman Aktivitas di lingkungan kantor'
      }
    ],
  },
  async asyncData({ $axios }) {
    var components = []
    await $axios.$get(
      '/pages/activity/components',
    ).then((res) =>{
      for(var i = 0; i < res.components.length; i++){
        components.push({
          name: res.components[i].component,
          props: {
            compData: res.components[i].content
          }
        })
      }
      }
    );
    return { components }
  },
  name: 'ActivityPage',
}
</script>
