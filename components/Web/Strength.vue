<template>
  <div class="py-20 px-32 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">Keunggulan Produk</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500">
      <div class="flex flex-row mx-4">
        <div class="h-80 w-96">
          <img :src="imageUrl + 'image12.jpeg'" alt="Logo Sinar Karya Nusa" class="w-24 md:w-48 mb-3">
        </div>
        <div class="px-16 py-4">
          <h3 class="my-4 text-center text-lime-800">Visi</h3>
          <p class="my-4 text-lg">Keunggulan Produk 1</p>
        </div>
      </div>
      <div class="flex flex-row mx-4">
        <div class="px-16 py-4">
          <h3 class="my-4 text-center text-lime-800">Visi</h3>
          <p class="my-4 text-lg">Keunggulan Produk 1</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Logo Sinar Karya Nusa" class="w-24 md:w-48 mb-3">
        </div>
      </div>
      <div class="flex flex-row">
        <div class="h-80 w-96">
          <img :src="imageUrl + 'image12.jpeg'" alt="Logo Sinar Karya Nusa" class="w-24 md:w-48 mb-3">
        </div>
        <div class="px-16 py-4">
          <h3 class="my-4 text-center text-lime-800">Visi</h3>
          <p class="my-4 text-lg">Keunggulan Produk 1</p>
        </div>
      </div>
    </div>
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
