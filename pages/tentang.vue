<template>
  <div>
    <AboutLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </AboutLight>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About Pages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman tentang perusahaan'
      }
    ],
  },
  async asyncData({ $axios }) {
    var components = []
    await $axios.$get(
      '/pages/about/components',
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
  name: 'AboutPage',
}
</script>
