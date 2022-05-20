<template>
  <div class="py-12 flex flex-col items-center">
    <h2 class="mb-8 text-yellow-800">PROSES PEMBUATAN</h2>
    <hr class="mb-8 w-12 border-2 border-solid border-yellow-500">
    <p class="w-1/2 mb-8 text-center">CV. Sinar Karya Nusa membuat pallet kayu dengan metode Vacuum Klin Dryer yang membuat pallet lebih awet dan berkualitas.</p>
    <carousel-3d class="">
      <slide :index="0" class="!border-0 bg-transparent drop-shadow-md">
        <img src="~/assets/img/palletes.png" alt="" class="h-full object-center">
      </slide>
      <slide :index="1" class="!border-0 bg-transparent drop-shadow-md">
        <img src="~/assets/img/palletes.png" alt="" class="h-full object-center">
      </slide>
      <slide :index="2" class="!border-0 bg-transparent drop-shadow-md">
        <img src="~/assets/img/palletes.png" alt="" class="h-full object-center">
      </slide>
      <slide :index="3" class="!border-0 bg-transparent drop-shadow-md">
        <img src="~/assets/img/palletes.png" alt="" class="h-full object-center">
      </slide>
      <slide :index="4" class="!border-0 bg-transparent drop-shadow-md">
        <img src="~/assets/img/palletes.png" alt="" class="h-full object-center">
      </slide>
    </carousel-3d>
    <NuxtLink class="w-fit px-3 py-2 my-8 bg-accentOrange text-white font-semibold" to="/proses-pembuatan">LIHAT PROSES LENGKAP</NuxtLink>
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
