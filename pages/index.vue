<template>
  <div>
    <LandingLight>
      <component
        v-for="(component, index) in components"
        :key="'component'+index"
        :is="component.name"
        v-bind="component.props"
      />
    </LandingLight>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $auth }) {
    var components = []
    await $axios.$get(
      '/pages/home/components',
    )
    .then((res) =>{
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
  name: 'LandingPage',
}
</script>
