<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">{{ compData.title }}</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500 my-4">
      <div v-for="(card, index) in compData.card" :key="'card' + index" class="flex flex-row my-4">
        <div class="h-60 w-96 mx-4">
          <img :src="imageUrl + card.image[0].url" :alt="card.image[0].alt" class="w-full h-full">
        </div>
        <div class="w-3/4 mx-4">
          <h3 class="my-4 text-left text-lime-800">{{ card.title }}</h3>
          <p class="my-4 text-lg">{{ card.text }}</p>
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
