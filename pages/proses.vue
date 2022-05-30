<template>
  <div>
    <ProcessLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </ProcessLight>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Process Pages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman Proses Pembuatan Pallet'
      }
    ],
  },
  async asyncData({ $axios }) {
    var components = []
    const cData = await $axios.$get(
      '/pages/process/components',
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
  name: 'ProcessPage',
}
</script>
