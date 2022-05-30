<template>
  <div class="py-12 flex flex-col items-center">
    <h2 class="mb-8 text-yellow-800">{{ compData.title }}</h2>
    <hr class="mb-8 w-12 border-2 border-solid border-yellow-500">
    <p class="w-1/2 mb-8 text-center">{{ compData.text }}</p>
    <ClientOnly>
      <carousel-3d>
        <slide v-for="(img, index) in compData.image" :key="'image' + index" :index="index" class="!border-0 bg-transparent drop-shadow-md">
          <img :src="imageUrl + img.url" :alt="img.alt" class="h-full object-cover">
        </slide>
      </carousel-3d>
    </ClientOnly>
    <NuxtLink :to="compData.button[0].url" class="w-fit px-3 py-2 my-4 bg-accentOrange text-white font-semibold">{{ compData.button[0].text }}</NuxtLink>
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
