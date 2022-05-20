<template>
  <!-- <div v-html="require(`~/assets/icon/${icon}.svg?raw`)" /> -->
  <div>{{name}}</div>

</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'home'
      },
    },
  };
</script>
