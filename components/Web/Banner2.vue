<template>
  <div class="">
    <div class="w-full h-40 md:h-96">
      <img :src="imageUrl + compData.image[0].url" :alt="compData.image[0].alt" class="object-cover w-full h-full">
    </div>
  </div>
</template>

<script>
export default {
  props: ['compData'],
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
}
</script>
