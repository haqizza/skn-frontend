<template>
  <div class="w-4/5 my-16 lg:my-20 m-auto z-40">
      <div class="lg:p-20 flex flex-row align-stretch bg-[url(~/assets/img/bg1.png)] bg-cover bg-center bg-no-repeat">
        <div class="w-1/2 mx-4 flex flex-col">
          <h2 class="my-4 text-yellow-800">{{ compData.title }}</h2>
          <hr class="w-12 border-2 border-solid border-yellow-500">
          <p class="my-4 text-lg">{{ compData.text }}</p>
          <NuxtLink class="w-fit px-3 py-2 my-4 bg-accentOrange text-white font-semibold" :to="compData.button[0].url">{{ compData.button[0].text }}</NuxtLink>
        </div>
        <div class="w-1/2 h-72 mx-4">
          <img :src="imageUrl + compData.image[0].url" :alt="compData.image[0].alt" class="object-cover w-full h-full">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['compData'],
  data() {
    return {
      data: {},
      imageUrl: process.env.assetsUrl,
    }
  },
  // async fetch() {

  // }
}
</script>
