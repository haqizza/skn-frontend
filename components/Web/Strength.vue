<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">{{ compData.title }}</h2>
      <hr class="w-12 mb-16 border-2 border-solid border-yellow-500">
      <div class="flex flex-row mb-12 mx-4">
        <div class="h-64 w-96">
          <img :src="imageUrl + compData.card[0].image.url" :alt="compData.card[0].image.alt" class="w-full h-full object-cover">
        </div>
        <div class="px-16 py-4">
          <h3 class="my-4 text-center text-lime-800">{{ compData.card[0].title }}</h3>
          <p class="my-4 text-lg">{{ compData.card[0].text }}</p>
        </div>
      </div>
      <div class="flex flex-row mb-12 mx-4">
        <div class="px-16 py-4">
          <h3 class="my-4 text-center text-lime-800">{{ compData.card[1].title }}</h3>
          <p class="my-4 text-lg">{{ compData.card[1].text }}</p>
        </div>
        <div class="h-64 w-96 mx-4">
          <img :src="imageUrl + compData.card[1].image.url" :alt="compData.card[1].image.alt" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="flex flex-row mb-12 mx-4">
        <div class="h-64 w-96">
          <img :src="imageUrl + compData.card[2].image.url" :alt="compData.card[2].image.alt" class="w-full h-full object-cover">
        </div>
        <div class="px-16 py-4 text-left">
          <h3 class="my-4 text-center text-lime-800">{{ compData.card[2].title }}</h3>
          <p class="my-4 text-lg">{{ compData.card[2].text }}</p>
        </div>
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
