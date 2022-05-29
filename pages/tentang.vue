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
        content: 'Halaman Tentang Perusahaan'
      }
    ],
  async asyncData({ $axios }) {
    var components = []
    const cData = await $axios.$get(
      'http://127.0.0.1:4000/components/page/' + 'about'
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
  name: 'AboutPage',
  }
}
</script>
