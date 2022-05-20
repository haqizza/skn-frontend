<template>
  <div class="py-20 px-24 bg-slate-300">
    <div class="p-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <h2 class="my-4 text-yellow-800">PROSES LENGKAP</h2>
      <hr class="w-12 border-2 border-solid border-yellow-500">
      <div class="flex flex-row">
        <div class="w-24 h-24  mx-4 bg-lime-800 rotate-45 rounded-xl">
          <h2 class="text-white">1</h2>
        </div>
        <div class="px-16 py-4 mx-4">
          <h3 class="my-4 text-center text-lime-800">Pengaplikasian Obat Anti Rayap</h3>
          <p class="my-4 text-lg">Deskripsi</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Pengaplikasian Obat Anti Rayap" class="w-24 md:w-48 mb-3">
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-24 h-24  mx-4 bg-accentOrange rotate-45 rounded-xl">
          <h2 class="-rotate-45 text-4xl text-white">2</h2>
        </div>
        <div class="px-16 py-4 mx-4">
          <h3 class="my-4 text-center text-accentOrange">Vacuum Drying Kayu</h3>
          <p class="my-4 text-lg">Deskripsi</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Vacuum Drying Kayu" class="w-24 md:w-48 mb-3">
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-24 h-24  mx-4 bg-lime-800 rotate-45 rounded-xl">
          <h2 class="-rotate-45 text-4xl text-white">3</h2>
        </div>
        <div class="px-16 py-4 mx-4">
          <h3 class="my-4 text-center text-lime-800"></h3>
          <p class="my-4 text-lg">Deskripsi</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Logo Sinar Karya Nusa" class="w-24 md:w-48 mb-3">
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-24 h-24  mx-4 bg-accentOrange rotate-45 rounded-xl">
          <h2 class="-rotate-45 text-4xl text-white">4</h2>
        </div>
        <div class="px-16 py-4 mx-4">
          <h3 class="my-4 text-center text-accentOrange">Penghalusan Permukaan Kayu</h3>
          <p class="my-4 text-lg">Deskripsi</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Penghalusan Permukaan Kayu" class="w-24 md:w-48 mb-3">
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-24 h-24  mx-4 bg-lime-800 rotate-45 rounded-xl">
          <h2 class="-rotate-45 text-4xl text-white">5</h2>
        </div>
        <div class="px-16 py-4 mx-4">
          <h3 class="my-4 text-center text-lime-800">Pembuatan Pallet</h3>
          <p class="my-4 text-lg">Deskripsi</p>
        </div>
        <div class="h-80 w-96 mx-4">
          <img :src="imageUrl + 'image12.jpeg'" alt="Pembuatan Pallet" class="w-24 md:w-48 mb-3">
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
