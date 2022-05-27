<template>
  <div class="py-20 px-32 z-40">
    <div class="p-20 flex flex-row align-stretch bg-[url(~/assets/img/bg1.png)] bg-cover bg-center bg-no-repeat">
      <div class="w-1/2 mx-4 flex flex-col">
        <h2 class="my-4">{{ compData.title }}</h2>
        <hr class="w-12 border-2 border-solid border-yellow-500">
        <p class="my-4 text-lg">{{ compData.text }}</p>
      </div>
      <div class="w-1/2 h-72 mx-4">
        <img :src="imageUrl + compData.image.url" :alt="compData.image.alt" class="object-cover w-full h-full">
      </div>
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
