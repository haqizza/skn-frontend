<template>
  <div>
    <ContactLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </ContactLight>
  </div>
</template>

<script>
export default {
    head: {
    title: 'Contact Pages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Halaman yang berisi kontak'
      }
    ],

  async asyncData({ $axios }) {
    var components = []
    const cData = await $axios.$get(
      'http://127.0.0.1:4000/components/page/' + 'contact'
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
  name: 'ContactPage',
  }
}
</script>
