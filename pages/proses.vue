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
  async asyncData({ $axios }) {
    var components = []
    const cData = await $axios.$get(
      'http://127.0.0.1:4000/components/page/' + 'process'
    ).then((res) =>{
      for(var i = 0; i < res.length; i++){
        components.push({
          name: res[i].component,
          props: {
            compData: res[i].content
          }
        })
      }
      }
    );
    return { components }
  },
  name: 'ProcessPage',
  }
}
</script>
