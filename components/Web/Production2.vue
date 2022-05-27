<template>
  <div class="py-12 flex flex-col items-center">
    <h2 class="mb-8 text-yellow-800">GALERI PROSES PEMBUATAN</h2>
    <hr class="mb-8 w-12 border-2 border-solid border-yellow-500">
    <p class="w-1/2 mb-8 text-center">CV. Sinar Karya Nusa membuat pallet kayu dengan metode Vacuum Klin Dryer yang membuat pallet lebih awet dan berkualitas.</p>
    <ClientOnly>
    <carousel-3d class="">
      <slide :index="0" class="!border-0 bg-transparent drop-shadow-md">
        <img :src="imageUrl + 'image26.jpeg'" alt="" class="h-full object-center">
      </slide>
      <slide :index="1" class="!border-0 bg-transparent drop-shadow-md">
        <img :src="imageUrl + 'image9.jpeg'" alt="" class="h-full object-center">
      </slide>
      <slide :index="2" class="!border-0 bg-transparent drop-shadow-md">
        <img :src="imageUrl + 'image14.jpeg'" alt="" class="h-full object-center">
      </slide>
      <slide :index="3" class="!border-0 bg-transparent drop-shadow-md">
        <img :src="imageUrl + 'image1.jpeg'" alt="" class="h-full object-center">
      </slide>
      <slide :index="4" class="!border-0 bg-transparent drop-shadow-md">
        <img :src="imageUrl + 'image22.jpeg'" alt="" class="h-full object-center">
      </slide>
    </carousel-3d>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: process.env.assetsUrl,
    }
  },
}
</script>
